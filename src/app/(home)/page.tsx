import { prismaClient } from "@/lib/prisma";

import PageNews from "../homeNews/pageNews";
import ProductList from "../../components/ui/product-list";
import Categories from "./components/categories";


export default async function Home() {

  //const categorie = await prismaClient.category.findMany({})  

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      }
    }
  })
  const categoriesProps = {
  
  }

  return (
    <div className="h-[100vw]">
      <PageNews />
      <div className="mt-2 p-5">
        <Categories />
      </div>
      
      <ProductList products={deals}/>
    </div>
  );
}
