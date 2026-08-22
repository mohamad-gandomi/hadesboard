#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
archive_path="$project_root/hadesboard-cpanel.zip"

for command_name in zip unzip; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "Required command not found: $command_name" >&2
    exit 1
  fi
done

cd "$project_root"
npm run build

(
  cd "$project_root/out"
  zip -qr -FS "$archive_path" .
)

unzip -tq "$archive_path" >/dev/null

archive_size="$(du -h "$archive_path" | cut -f1)"
echo "Ready to upload: $archive_path ($archive_size)"
