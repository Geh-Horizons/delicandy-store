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
    <div className="h-screen pt-[135px]">
      <div className="flex h-[150px] items-center justify-between bg-orange-400 px-5 text-center">

        {category.map((product) => (
          <div className="flex items-center justify-between gap-4" key={product.id}>
            <h1 className="h-auto" style={{ fontFamily: "Bebas Neue", fontSize: "100px" }}>
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
            <div className="w-24 h-24 rounded-full overflow-hidden p-1">
              <Image
                src={product.imageUrl}
                alt="banner"
                width={100}
                height={100}
                quality="90"
                priority={true}
                className="w-[200px] rounded-full blur-0 hover:scale-150 hover:rotate-12 hover:duration-700"
              />
            </div>
            
          </div>
        ))}
      </div>


      <div className="flex items-center justify-center">
        <h1 className="font-bold">DETALHES: </h1>
      </div>
    </div>
  );
}
