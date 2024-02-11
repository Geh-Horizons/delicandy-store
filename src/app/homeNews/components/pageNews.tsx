"use client";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { prismaClient } from "@/lib/prisma";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function PageNews() {

  const categorie = await prismaClient.category.findMany({})
    

  return (
    <div className="w-full bg-slate-200 z-0 p-[50px]" style={{backgroundImage: 'url(/plano-de-fundo.jpg)'}}>
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
          </div>
        </div>
        {/* <div className="w-[100%]  flex flex-col md:w-[50%] md:flex md:pt-0 pt-10 justify-center items-center ">
          <Carousel className="w-[70%] md:h-[50vw] h-[50vw] flex justify-center items-center rounded-lg ">
            <CarouselContent>
              {categorie.map((product) => (
                <CarouselItem key={product.id}>
                  <div className="w-full gap-4 rounded-sm justify-between flex flex-col items-center ">
                    <Link
                      href={`/detalhes/${product.id}`}
                      className="flex justify-center items-center relative"
                    >
                      <Image
                        src={product.imageUrl}
                        alt='foto'
                        width={500}
                        height={500}
                        className="w-[80%] h-[80%] object-contain rounded-lg cursor-pointer relative text-ellipsis"
                        quality={90}
                        priority={true}
                      />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}
      </div>
    </div>
  );
}
