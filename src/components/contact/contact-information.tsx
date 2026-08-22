import type { ContactChannel } from "@/data/contact";

type ContactInformationProps = {
  channels: readonly ContactChannel[];
};

export function ContactInformation({ channels }: ContactInformationProps) {
  return (
    <div className="mt-8">
      <dl className="border-t border-line">
        {channels.map((channel) => (
          <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 border-b border-line py-4" key={channel.id}>
            <dt className="contents">
              <span className="pt-0.5 font-mono text-[9px] text-accent" dir="ltr">{channel.id}</span>
              <span className="text-sm font-medium text-ink">{channel.label}</span>
            </dt>
            <dd className="col-start-2 mt-1 min-w-0 text-xs leading-6 text-body">
              <a
                className="focus-ring inline-block max-w-full break-all transition-colors hover:text-accent"
                dir="ltr"
                href={channel.href}
                rel={channel.external ? "noopener noreferrer" : undefined}
                target={channel.external ? "_blank" : undefined}
              >
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
