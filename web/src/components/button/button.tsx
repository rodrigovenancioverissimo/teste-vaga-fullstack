import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<any>) {
  return (
    <>
      <button
        {...rest}
        className={`flex items-center justify-center px-3 h-8 leading-tight 
        text-gray-500 bg-white cursor-pointer border border-gray-300 rounded-md 
        hover:bg-gray-100 hover:text-gray-700 disabled:opacity-70
        disabled:hover:text-gray-500 disabled:hover:bg-white  ${className}`}
      >
        {children}
      </button>
    </>
  );
}
