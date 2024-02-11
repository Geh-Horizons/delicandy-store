"use client" 
import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItem";

const Categories = async () => {

    const categorie = await prismaClient.category.findMany({}) 

    return ( 
    <div className="w-full p-5 flex justify-between gap-x-4 gap-y-2 pt-[10px]">
        {categorie.map((category)=> <CategoryItem key={category.id} category={category}/>)}
    </div> 
    );
}
 
export default Categories;