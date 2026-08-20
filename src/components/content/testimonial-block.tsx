type TestimonialBlockProps =
  | { quote: string; name: string; role?: string; pending?: false }
  | { pending: true; quote?: never; name?: never; role?: never };

export function TestimonialBlock(props: TestimonialBlockProps) {
  if (props.pending) {
    return (
      <div className="border-y border-line py-10 sm:py-14" role="note">
        <p className="font-mono text-[9px] tracking-[0.12em] text-accent" dir="ltr">STATUS / CONTENT PENDING</p>
        <p className="type-section mt-6 max-w-4xl font-medium text-ink">
          بازخورد واقعی مشتری، پس از دریافت اجازه انتشار، اینجا قرار می‌گیرد.
        </p>
        <p className="mt-7 max-w-xl leading-8 text-body">این جایگاه عمداً بدون نقل‌قول، نام یا نتیجه ساختگی منتشر شده است.</p>
      </div>
    );
  }

  const { quote, name, role } = props;

  return (
    <figure className="border-y border-line py-10 sm:py-14">
      <blockquote className="type-section max-w-4xl font-medium text-ink">«{quote}»</blockquote>
      <figcaption className="mt-8 flex items-center gap-3 text-sm text-body">
        <span className="h-px w-8 bg-accent" />
        <span>{name}{role ? `، ${role}` : ""}</span>
      </figcaption>
    </figure>
  );
}
