import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
}

const Input = ({ register }: InputProps) => {
  return <input {...register}  />;
};

export default Input;
