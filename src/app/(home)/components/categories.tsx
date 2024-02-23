"use client"
import { prismaClient } from "@/lib/prisma";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";

interface CategoryProps {
    id: string,
    name: string
    slug: string
    imageUrl: string
}

const Categories = () => {

    const [data, setData] = useState<CategoryProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const categorie = await prismaClient.category.findMany({})
            setData(categorie)
        }
        fetchData()
    }, [])

    return (
        <div className="w-full p-5 flex justify-between gap-x-4 gap-y-2 pt-[10px]">
            {data.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Categories;