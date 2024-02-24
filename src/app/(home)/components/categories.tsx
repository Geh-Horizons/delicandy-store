'use client'
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";

interface Category {
    id: string;
    name: string;
    slug: string;
    imageUrl: string
}

const Categories = async () => {

    const categorie = await prismaClient.category.findMany({})
    return (
        <div className="p-5 bg-[#ff6600] flex justify-between rounded-md shadow-md">

            {categorie.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Categories;