import { FC, forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => {
    const { label, className, ...rest } = props;
    return (
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <textarea
            ref={ref}
            rows={4}
            className={`${className} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

export default TextArea;
