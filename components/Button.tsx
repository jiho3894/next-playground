interface ButtonProps {
  text: string;
  type: "submit" | "button";
}

const Button = ({ text, type }: ButtonProps) => {
  console.log("hello")
  return <button className="w-16 h-8 bg-black text-white rounded-lg" type={type}>{text}</button>;
};

export default Button;
