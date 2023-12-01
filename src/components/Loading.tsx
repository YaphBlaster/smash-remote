import Image from "next/image";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex flex-col items-center gap-4 animate-bounce">
      <Image
        src="/loading.gif"
        alt="me"
        width={400}
        height={400}
        className="rounded-[50%] aspect-square"
      />
      <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl animate-pulse">
        Loading
      </h3>
    </div>
  );
}

export default Loading;
