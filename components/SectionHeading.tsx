export function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2 className="section-heading" id={id}>
      <span>{children}</span>
    </h2>
  );
}
