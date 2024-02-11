import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function CategorySlug(CategorySlug: string){

    const category = await prisma.product.findMany({
        where: {
            category: {
                slug: CategorySlug
            }
        }
    })
    return category
}