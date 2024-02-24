"use client";
import { Button } from "@/components/ui/button";

import { prismaClient } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { PlusCircleIcon } from "lucide-react";
import Categories from "../(home)/components/categories";

export default function PageNews() {
    

  return (
    <div className="w-full h-screen bg-slate-200 z-0 p-[50px] pt-[150px] flex " style={{backgroundImage: 'url(/plano-de-fundo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', imageRendering: '-webkit-optimize-contrast', backgroundRepeat: 'no-repeat'}}>
      <div className="w-full p-1 block md:flex justify-between items-center  md:max-w-full md:min-w-[50%] md:pt-0 pt-[100px] text-xl md:text-xl md:gap-0 gap-4 md:justify-center">
        <div className="w-full flex flex-col text-amber-100 items-center justify-center md:flex md:w-1/2 ">
          <div className="flex flex-col">
            <h1
              className="flex w-full text-4xl md:text-6xl text-black"
              style={{ fontFamily: "Bebas Neue",  }}
            >
              to the
            </h1>
            <p
              className="w-auto text-8xl md:text-9xl uppercase flex text-center flex-col drop-shadow-xl text-orange-500"
              style={{ fontFamily: "Bebas Neue", letterSpacing: "20px" }}
            >
              unknow
            </p>
            <Button className="md:mb-0 mb-4 gap-4 text-left text-2xl w-full font-inter uppercase">
              Novidades <PlusCircleIcon />
            </Button>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}
