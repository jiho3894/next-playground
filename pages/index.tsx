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
  console.log(duck);
  return (
    <div className="w-full h-screen bg-blue-400">
      <Image
        alt=""
        src="https://avatars.githubusercontent.com/u/79081800?v=4"
        // layout="fill"
        width={50}
        height={50}
      />
      <div className="w-full text-center text-red-500 absolute">
        <form onSubmit={handleSubmit(onValid)}>
          <input {...register("Id")} />
        </form>
        <Link href={`/details/${inputId}`}>{inputId}</Link>
      </div>
    </div>
  );
};

export default Home;
