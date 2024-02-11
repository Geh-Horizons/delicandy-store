import { prismaClient } from "@/lib/prisma";

import PageNews from "../homeNews/components/pageNews";
import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";

export default async function Home() {
  

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      }
    }
  })

  return (
    <div className="h-[100vw]">
      <PageNews />
      <div>
        <Categories />
      </div>
      
      <ProductList products={deals}/>
    </div>
  );
}
