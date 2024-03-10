import { ChangeEventHandler } from "react";

type Props = {
  label?: string;
  options: { value: string; label: string }[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function SelectInput({ label, options, onChange }: Props) {
  return (
    <>
      <div className=''>
        <label
          className='text-gray-700 text-xs font-bold mb-2'
          htmlFor='select'
        >
          {label}
        </label>
        <select
          id='select'
          onChange={onChange}
          className='shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          <option></option>
          {options.map(({ label, value }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
