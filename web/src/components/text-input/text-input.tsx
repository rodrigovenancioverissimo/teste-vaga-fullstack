import { ChangeEventHandler } from "react";

type Props = {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function TextInput({ label, onChange }: Props) {
  return (
    <>
      <div className=''>
        <label className='text-gray-700 text-xs font-bold mb-2' htmlFor='input'>
          {label}
        </label>
        <input
          data-testid='text-input'
          className='shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='input'
          type='text'
          onChange={onChange}
        />
      </div>
    </>
  );
}
