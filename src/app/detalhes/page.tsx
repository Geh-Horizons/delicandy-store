import ProductItem from "@/components/ui/productItem";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function PageDetalhes({ params }: any) {
  const category = await prismaClient.category.findMany({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });
  if (!category) {
    return null;
  }

  return (
    <p className="h-[100vw] pt-[20px]">
      <div className="flex h-[200px] items-center justify-between bg-orange-400 px-5 text-center">
        <div className="relative flex h-[50px] items-center justify-center ">
          {category.map((product) => (
            <div>
              <h1
                className="h-auto"
                style={{ fontFamily: "Bebas Neue", fontSize: "100px" }}
              >
                {product.name}
              </h1>
              <p
                className="absolute bottom-2 text-center text-white"
                style={{
                  fontFamily: "Blooming Elegant Monoline",
                  fontSize: "50px",
                }}
              >
                gourmet
              </p>
              <Image
                src="/banner/trufas.png"
                alt="banner"
                width={500}
                height={500}
                className="h-auto w-[180px] md:w-[20%] "
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <h1 className="font-bold">DETALHES: </h1>
      </div> */}
    </p>
  );
}
