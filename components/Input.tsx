import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file";
}

const Input = ({ register,type }: InputProps) => {
  return <input {...register}  type={type} />;
};

export default Input;
