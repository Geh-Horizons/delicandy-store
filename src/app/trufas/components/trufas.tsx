import { prismaClient } from "@/lib/prisma"

export default async function Trufas() {

    const trufaCategory = await prismaClient.product.findMany({
        where: {
            slug: "trufas"
        }
    })


    return (
    <div className="pt-[125px] grid grid-cols-4 justify-between">
        {trufaCategory.map((trufa)=> (
            <div>
                {trufa.slug && (
                    <div key={trufa.id}>
                        {trufa.name}
                    </div>
                )}
            </div>
        ))}
    </div>
    )
}