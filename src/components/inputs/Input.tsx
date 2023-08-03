import * as React from "react";

interface IInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  icon: JSX.Element;
  register: any;
  error: any;
  disabled: boolean;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const { name, label, type, placeholder, icon, register, error, disabled } =
    props;
  return (
    <div className="relative mt-1 rounded-md shadow-md">
      <div className="pointer-event-none absolute left-0 inset-y-0 flex items-center pl-3">
        <span className="text-gray-500 text-sm">{icon}</span>
      </div>
      <input
        className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <div className="fill-red-500 absolute right-2 top-2.5 text-xl"></div>
      )}
    </div>
  );
};

export default Input;
