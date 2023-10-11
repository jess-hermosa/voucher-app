import { FC, MouseEventHandler } from "react";

interface Props {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<any>;
  layout?: "primary" | "secondary";
}

const Button: FC<Props> = ({
  disabled,
  children,
  className,
  onClick,
  layout,
}) => {
  let css = {
    layout:
      "bg-indigo-600  text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  };

  if (layout === "secondary")
    css.layout =
      "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  return (
    <button
      type="button"
      className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${css.layout} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
