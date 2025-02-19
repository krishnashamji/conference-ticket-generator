import clsx from "clsx";

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormField({
  label,
  id,
  type,
  value,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-lg text-[#EAE6FD]" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={clsx(
          "w-full rounded-xl border border-[#8A84A8] bg-white bg-opacity-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
          { "border border-[#BC8990]": error },
        )}
      />
      {error && (
        <div className="flex gap-2">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="#BC8990"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
            />
            <path fill="#BC8990" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path
              stroke="#BC8990"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.004 10.462V7.596M8 5.569v-.042"
            />
          </svg>
          <span className="text-xs text-[#BC8990]">{error}</span>
        </div>
      )}
    </div>
  );
}
