import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import duck from "../public/duck.jpg";

// 유저 프로필 검색 페이지

interface ProfileId {
  Id: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit, setValue } = useForm<ProfileId>();
  const [inputId, setInputId] = useState<String>("");
  const onValid: SubmitHandler<ProfileId> = ({ Id }) => {
    setInputId(Id);
    setValue("Id", "");
  };
  return (
    <div className="w-full h-screen bg-blue-400">
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("Id")} />
      </form>
      <Link href={`/details/${inputId}`}>{inputId}</Link>
      <Image alt="" src={duck} placeholder="blur" quality={5} />
    </div>
  );
};

export default Home;
