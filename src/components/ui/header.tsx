"use client";
import { Button } from "@/components/ui/button";

import {
  ShoppingBag,
  LogInIcon,
  User,
  MenuIcon,
  FrownIcon,
  LogOutIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Armchair, Home, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

export default function Header() {
  const [logado, setLogado] = useState("");
  const [count, setCount] = useState(0);
  const [logando, setLogando] = useState(false);
  const [scrolY, setScrolY] = useState(0);
  const { status, data } = useSession();

  useEffect(() => {
    const handleScrool = () => {
      setScrolY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  });

  const handlerClickLogar = async () => {
    await signIn("google");
  };
  const handleClickLogout = async () => {
    await signOut();
  };

  return (
    <Card
      className={`w-full fixed flex justify-between p-5 items-center bg-slate-100 z-10 translate-all duration-300 ${scrolY > 50 ? "h-[25vh]" : "h-[20vh]"} backdro-filter backdrop-blur-sm bg-opacity-10 bg-orange-400 bg-clip-padding`}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-[70px] h-[50px] min-w-[60px]">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex flex-col pt-10 justify-between"
        >
          <SheetHeader className="flex flex-col w-full gap-1">
            <h1>MENU</h1>

            {status === "authenticated" && data?.user && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && (
                      <AvatarImage
                        src={data.user.image}
                        className="w-10 rounded-full"
                      />
                    )}
                  </Avatar>

                  <div className="flex flex-col items-start">
                    <p className="uppercase font-medium">{data.user.name} </p>
                    <p className="font-sm opacity-75">Boas Compras!</p>
                  </div>
                </div>
              </div>
            )}


            <Link href={"/"}>
              <Button className="w-full gap-2">
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <Home size={18} /> HOME
                </div>{" "}
              </Button>
            </Link>

            {status === "unauthenticated" && (
              <Button
                className="w-full gap-2 cursor-pointer"
                onClick={handlerClickLogar}
              >
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <LogInIcon size={18} /> LOGIN
                </div>
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                className="w-full gap-2 cursor-pointer"
                onClick={handleClickLogout}
              >
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <LogOutIcon size={18} /> LOGOUT
                </div>
              </Button>
            )}
            <Link href={"/trufas"} className="w-full">
              <Button className="w-full gap-2">
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <BedDouble size={18} /> TRUFAS
                </div>
              </Button>
            </Link>
            <Link href={"/cupcake"}>
              <Button className="w-full gap-2">
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <Armchair size={18} /> CUPCAKE
                </div>
              </Button>
            </Link>
            <Link href={"/bolos"}>
              <Button className="w-full gap-2">
                <div className="w-[100px] gap-2 flex items-center justify-left">
                  <BedDouble size={18} /> BOLOS
                </div>
              </Button>
            </Link>
            
              <Link href={"/cadastro"}>
                <Button className="w-full flex gap-2 justify-center items-center">
                  <div className="w-[100px] flex gap-2 items-center justify-left">
                    <User size={18} /> REGISTER
                  </div>
                </Button>
              </Link>
            
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo1.png"
          alt="foto logo"
          width={500}
          height={500}
          className="w-[15%] min-w-[180px]"
          quality={90}
          priority={true}
        />
      </Link>
      <div className="flex flex-col items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-[70px] h-[50px] min-w-[50px] flex flex-col">
              <ShoppingBag />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            {count > 0 ? (
              <div>Vazio</div>
            ) : (
              <div className="h-[100vh] flex flex-col items-center justify-center">
                <FrownIcon /> Vazio
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}
