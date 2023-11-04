import { FC, forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  checked?: boolean;
}

const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { name, label, description, className, checked, ...rest } = props;

    return (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id="candidates"
            aria-describedby="candidates-description"
            name={name}
            type="checkbox"
            className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 ${className}`}
            checked={checked}
            {...rest}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="candidates" className="font-medium text-gray-900">
            {label}
          </label>
          <p id="candidates-description" className="text-gray-500">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

export default Checkbox;
