import { useState } from "react";

export default function useInput(text: string) {
  const [inputText, setInputText] = useState<String>(text);
  setInputText(text);
  return inputText;
}
