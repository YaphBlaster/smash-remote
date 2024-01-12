"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  backdropFilePath: string;
  logoFilePath: string;
};

const LogoCard = ({ backdropFilePath, logoFilePath }: Props) => {
  return (
    <div
      className="relative rounded-md bg-primary flex items-center justify-center overflow-hidden p-2 bg-cover lg:w-[500px] lg:h-[550px] max-w-sm w-96 h-52  "
      style={{
        backgroundImage: `url(/images/backdrops/${backdropFilePath})`,
      }}
    >
      <Tilt className="p-4 w-full h-full">
        <div className=" rounded-lg w-full h-full bg-slate-200 opacity-70 flex items-center justify-center">
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
            style={{
              width: "90%",
              height: "90%",
            }}
          >
            <Image
              src={`/images/logos/${logoFilePath}`}
              alt="Layer 1 Logo"
              className="mix-blend-multiply z-0 object-contain"
              fill
            />
            <Image
              src={`/images/logos/${logoFilePath}`}
              alt="Layer 2 Logo"
              className="mix-blend-color-burn opacity-80 blur-sm object-contain"
              fill
            />
          </Tilt>
        </div>
      </Tilt>
    </div>
  );
};

export default LogoCard;
