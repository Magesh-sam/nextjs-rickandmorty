import Image from "next/image";
import React from "react";
import { ICharacter } from "../page";

export const Card = ({ character }: { character: ICharacter }) => {
  const status = (status: string) => {
    if (status === "Alive") {
      return "text-green-500";
    } else if (status === "Dead") {
      return "text-red-500";
    } else {
      return "text-yellow-500";
    }
  };
  
  return (
    <div className=" w-[300px] h-[600px] flex flex-col mx-auto sm:w-[300px] sm:h-[600px] sm:flex-col md:max-w-[600px] md:min-w-[600px]  md:h-[300px]  md:flex-row    ">
      <Image
        className="  sm:rounded-t-lg md:rounded-l-lg md:rounded-r-none "
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={character.image}
      />
      <div className="w-[300px] h-[300px]  bg-secondary-text text-lg text-primary-text p-4  flex flex-col gap-1 sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px]">
        <h3 className=" underline underline-offset-8 text-white hover:text-primary-text hover:cursor-pointer ">
          {character.name}
        </h3>
        <div className="flex gap-2  ">
          <p>{character.species}</p>
          <p className={status(character.status)}>{character.status}</p>{" "}
        </div>
        <p className="">{`Gender:${character.gender}`}</p>
        <p className="">{`Type:${
          character.type ? character.type : character.species
        }`}</p>
        <p className="">Origin:{character.origin.name}</p>
        <p title={character.location.name} >
          Location:{character.location.name}
        </p>
      </div>
    </div>
  );
};
