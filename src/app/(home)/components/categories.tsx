"use client"
import { prismaClient } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";

interface Category {
    id: string,
    name: string
    slug: string
    imageUrl: string
}

const Categories = () => {

    const [data, setData] = useState<Category[]>([])

    useEffect(() => {
        const usefetchData = async () => {

            const categorie = await prismaClient.category.findMany({})
            setData(categorie)
        }
        usefetchData()
    }, [])
    console.log(data)
    return (
        <div className="w-full p-5 grid grid-cols-2 justify-between gap-x-4 gap-y-2 pt-[10px]">
            {data.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Categories;