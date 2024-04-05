interface ButtonProps {
  children: JSX.Element | string;
  disabled?: boolean | undefined;
  className: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  disabled,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`uppercase font-sans font-light text-sm tracking-wide py-2 px-4 rounded-md hover:bg-primary-200 hover:text-[#F3F6F4] transition-all flex gap-1 justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
