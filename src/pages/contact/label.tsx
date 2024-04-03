interface LabelProps {
  htmlFor?: string | undefined;
  children: string;
}

export default function Label({ htmlFor = undefined, children }: LabelProps) {
  return (
    <label className="italic tracking-wider mb-2 text-sm " htmlFor={htmlFor}>
      {children}
    </label>
  );
}
