import type { LegalBlock } from "@/content/legal";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="leading-relaxed">{block.text}</p>;
    case "address":
      return (
        <address className="not-italic leading-relaxed">
          {block.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      );
    case "contact":
      return (
        <p className="leading-relaxed">
          Telefon:{" "}
          <a href={block.phoneHref} className="text-brand-600 hover:text-brand-700">
            {block.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${block.email}`}
            className="text-brand-600 hover:text-brand-700"
          >
            {block.email}
          </a>
        </p>
      );
    case "link":
      return (
        <p>
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-brand-600 hover:text-brand-700"
          >
            {block.label}
          </a>
        </p>
      );
    case "list":
      return (
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export function LegalSectionBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

export function LegalSubsection({
  title,
  blocks,
}: {
  title: string;
  blocks: LegalBlock[];
}) {
  if (blocks.length === 0) return null;
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-ink-800">{title}</h3>
      <LegalSectionBlocks blocks={blocks} />
    </div>
  );
}
