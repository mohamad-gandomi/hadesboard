<?php

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

function respond($status, $success, $message)
{
    http_response_code($status);
    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

function field($name)
{
    $value = $_POST[$name] ?? '';
    return is_string($value) ? trim($value) : '';
}

function text_length($value)
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, false, 'روش درخواست معتبر نیست.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$requestHost = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '');
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $normalizeHost = static function ($host) {
        return preg_replace('/^www\./i', '', strtolower($host));
    };
    if (!is_string($originHost) || $normalizeHost($originHost) !== $normalizeHost($requestHost)) {
        respond(403, false, 'مبدأ درخواست معتبر نیست.');
    }
}

if (field('website') !== '') {
    respond(200, true, 'درخواست شما ثبت شد.');
}

$rateLimitFile = sys_get_temp_dir() . '/hadesboard-contact-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (is_file($rateLimitFile) && time() - (int) filemtime($rateLimitFile) < 30) {
    respond(429, false, 'لطفاً کمی صبر کنید و دوباره تلاش کنید.');
}

$name = field('name');
$contactMethod = field('contactMethod');
$projectSummary = field('projectSummary');
$projectType = field('projectType');
$budget = field('budget');
$timeline = field('timeline');

if ($name === '' || $contactMethod === '' || $projectSummary === '') {
    respond(422, false, 'لطفاً فیلدهای ضروری را کامل کنید.');
}

$limits = [
    'نام' => [$name, 120],
    'راه ارتباطی' => [$contactMethod, 200],
    'توضیح پروژه' => [$projectSummary, 5000],
    'نوع پروژه' => [$projectType, 100],
    'بودجه' => [$budget, 200],
    'زمان‌بندی' => [$timeline, 200],
];

foreach ($limits as $label => [$value, $maximum]) {
    if (text_length($value) > $maximum) {
        respond(422, false, "فیلد {$label} بیش از حد طولانی است.");
    }
}

$safeName = preg_replace('/[\r\n]+/', ' ', $name);
$recipient = 'm.gandomi1995@gmail.com';
$sender = 'info@hadesboard.com';
$subjectText = "درخواست پروژه جدید از {$safeName}";
$subject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subjectText, 'UTF-8')
    : $subjectText;

$replyTo = filter_var($contactMethod, FILTER_VALIDATE_EMAIL) ? $contactMethod : $sender;
$headers = implode("\r\n", [
    "From: HadesBoard <{$sender}>",
    "Reply-To: {$replyTo}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$body = implode("\n\n", [
    "نام: {$name}",
    "راه ارتباطی: {$contactMethod}",
    "نوع پروژه: " . ($projectType !== '' ? $projectType : 'ثبت نشده'),
    "بودجه تقریبی: " . ($budget !== '' ? $budget : 'ثبت نشده'),
    "زمان‌بندی: " . ($timeline !== '' ? $timeline : 'ثبت نشده'),
    "توضیح پروژه:\n{$projectSummary}",
    'زمان ارسال: ' . date('Y-m-d H:i:s T'),
]);

if (!mail($recipient, $subject, $body, $headers)) {
    respond(500, false, 'ارسال انجام نشد. لطفاً از یکی از راه‌های ارتباطی مستقیم استفاده کنید.');
}

@touch($rateLimitFile);
respond(200, true, 'درخواست شما با موفقیت ارسال شد.');
