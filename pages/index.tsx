import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button";
import Input from "../components/Input";

// 유저 프로필 검색 페이지

interface ProfileId {
  Id: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit, setValue } = useForm<ProfileId>();
  const [inputId, setInputId] = useState<String>("");
  const onValid: SubmitHandler<ProfileId> = ({ Id }) => {
    setInputId(Id);
    setCookie("id", Id);
    setValue("Id", "");
  };
  const [cookies, setCookie] = useCookies(["id"]);
  console.log(cookies);
  return (
    <div className="w-full h-screen bg-blue-400">
      <Image
        alt=""
        src="https://avatars.githubusercontent.com/u/79081800?v=4"
        // layout="fill"
        width={50}
        height={50}
      />
      <div className="w-full text-center text-gray-700 absolute">
        <form onSubmit={handleSubmit(onValid)}>
          <Input type="file" register={register("Id", { required: true })} />
          <Button text="안녕" type="submit" />
        </form>
        <Link href={`/details/${inputId}`}>{inputId}</Link>
      </div>
    </div>
  );
};

export default Home;
