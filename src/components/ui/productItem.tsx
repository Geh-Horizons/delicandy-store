import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface ProductItemprops {
  product: Product;
}

const ProductItem = ({ product }: ProductItemprops) => {
  return (
    <div className="w-full mt-3 flex flex-col justify-between gap-4 rounded-lg p-2 bg-orange-400">
      <div className="w-[200px] h-[200px] flex items-center justify-between shadow-lg">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          quality="90"
          priority={true}
          className="w-[200px] h-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-full min-h-[150px] bg-slate-950 text-slate-200 rounded-b-lg py-2 p-2">
        <h1 className="text-sm">{product.name}</h1>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-between">
            <p className="text-xl font-bold">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
            <p className="text-slate-500 line-through">
              R$ {product.discountPercent.toFixed(2)}
            </p>
          </div>

          <Link href={`/detalhes/${product.slug}`} className="w-full">
            <Button className="w-full text-slate-100 uppercase">Ver detalhes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
