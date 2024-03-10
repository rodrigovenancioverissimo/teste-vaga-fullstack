import { ChangeEvent } from "react";

type ComponentProps = {
  onChange: (file: File) => void;
};

export function FileInput({ onChange }: ComponentProps) {
  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) onChange(e.target.files[0]);
  }
  return (
    <>
      <input
        type='file'
        onChange={handleFile}
        accept={".csv"}
        className='bg-gray-50 p-1 rounded-md hover:opacity-90'
      />
    </>
  );
}
