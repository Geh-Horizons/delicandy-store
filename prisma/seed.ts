const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    //Criando categorias
    try {


        const CupCakesCategory = await prisma.category.create({
            data: {
                name: 'CupCake',
                slug: 'cupcake',
                imageUrl: '/cupcake/cupcake1.jpg',
            },
        });
        const cupcakes = [
            {
                name: 'CupCake de Chocolcate com Amora',
                slug: 'cupcake-de-chocolate-com-amora',
                description: 'Um belíssimo cupcake de chocolate com amora',
                basePrice: 9,
                imageUrls: [
                    '/cupcake/cupcake4.jpg',
                    '/cupcake/cupcake4.jpg',
                    '/cupcake/cupcake4.jpg',
                    '/cupcake/cupcake4.jpg',
                ],
                categoryId: CupCakesCategory.id,
                discountPercent: 5,
            },
            {
                name: 'CupCake de Bauninha e Sorvete',
                slug: 'cupcake-de-bauninha-e-sorvete',
                description: 'Um Cupcake de bauninha com sorvete e um fresco morango em cima',
                basePrice: 7,
                imageUrls: [
                    "/cupcake/cupcake1.jpg",
                    "/cupcake/cupcake1.jpg",
                    "/cupcake/cupcake1.jpg",
                    "/cupcake/cupcake1.jpg",
                ],
                categoryId: CupCakesCategory.id,
                discountPercent: 5,
            },
            {
                name: 'CupCake Arcoires de bolinhas coloridas',
                slug: 'cupcake-arcoires-de-bolinhas-coloridas',
                description: 'Um belíssimo cupcake arcoires',
                basePrice: 9,
                imageUrls: [
                    "/cupcake/cupcake3.jpg",
                    "/cupcake/cupcake3.jpg",
                    "/cupcake/cupcake3.jpg",
                    "/cupcake/cupcake3.jpg",
                ],
                categoryId: CupCakesCategory.id,
                discountPercent: 5,
            },
            {
                name: 'CupCake de Frutas Vermelhas',
                slug: 'cupcake-de-frutas-vermelhas',
                description: 'Um belíssimo cupcake de chocolate com amora',
                basePrice: 9,
                imageUrls: [
                    "/cupcake/cupcake2.jpg",
                    "/cupcake/cupcake2.jpg",
                    "/cupcake/cupcake2.jpg",
                    "/cupcake/cupcake2.jpg",
                ],
                categoryId: CupCakesCategory.id,
                discountPercent: 5,
            }
        ]
        await prisma.product.createMany({
            data: cupcakes,
        })


        //bolos
        const BolosCategory = await prisma.category.create({
            data: {
                name: 'Bolo',
                slug: 'bolo',
                imageUrl: '/bolo/bolo1.jpg'
            }
        });

        const bolos = [
            {
                name: 'Bolo de Chocolate',
                slug: 'bolo-de-chocolate',
                description: 'Bolo de chocolate com raspas de chocolate e colinhas de colfetes brancas',
                basePrice: 125,
                imageUrls: [
                    '/bolo/bolo1.jpg',
                    '/bolo/bolo1.jpg',
                    '/bolo/bolo1.jpg',
                    '/bolo/bolo1.jpg',
                ],
                categoryId: BolosCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Bolo de Chocolate com Morango',
                slug: 'bolo-de-chocolate-com-morango',
                description: 'Bolo de chocolate com morango e raspas de chocolate.',
                basePrice: 155,
                imageUrls: [
                    '/bolo/bolo2.jpg',
                    '/bolo/bolo2.jpg',
                    '/bolo/bolo2.jpg',
                    '/bolo/bolo2.jpg',
                ],
                categoryId: BolosCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Bolo de Amendoas',
                slug: 'bolo-de-amendoas',
                description: 'Bolo de amendoas',
                basePrice: 35,
                imageUrls: [
                    '/bolo/bolo3.jpg',
                    '/bolo/bolo3.jpg',
                    '/bolo/bolo3.jpg',
                    '/bolo/bolo3.jpg',
                ],
                categoryId: BolosCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Bolo de Creme de Bauninha e Laranja',
                slug: 'bolo-de-creme-de-bauninha-e-laranja',
                description: 'Bolo de creme de bauninha com raspas de laranja',
                basePrice: 180,
                imageUrls: [
                    '/bolo/bolo4.jpg',
                    '/bolo/bolo4.jpg',
                    '/bolo/bolo4.jpg',
                    '/bolo/bolo4.jpg',
                ],
                categoryId: BolosCategory.id,
                discountPercent: 5,
            }
        ]
        await prisma.product.createMany({
            data: bolos
        })

        //trufas
        const TrufasCategory = await prisma.category.create({
            data: {
                name: 'Trufas',
                slug: 'trufas',
                imageUrl: '/trufa/trufa1.jpg'
            }
        })
        //criando produtos


        const trufas = [
            {
                name: 'Trufa de Chocolate',
                slug: 'trufa-de-chocolate',
                description: 'Trufa de chocolate com raspas de chocolate em barra',
                basePrice: 3.9,
                imageUrls: [
                    '/trufa/trufa1.jpg',
                    '/trufa/trufa1.jpg',
                    '/trufa/trufa1.jpg',
                    '/trufa/trufa1.jpg',
                ],
                categoryId: TrufasCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Trufa de Chocolate com Amendoim',
                slug: 'trufa-de-chocolate-com-amendoim',
                description: 'Trufa de chocolate de amendoim',
                basePrice: 4.9,
                imageUrls: [
                    '/trufa/trufa2.jpg',
                    '/trufa/trufa2.jpg',
                    '/trufa/trufa2.jpg',
                    '/trufa/trufa2.jpg',
                ],
                categoryId: TrufasCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Trufa de Chocolate em Pó',
                slug: 'trufa-de-chocolate-em-po',
                description: 'Trufa de chocolate em pó nescal',
                basePrice: 2.9,
                imageUrls: [
                    '/trufa/trufa3.jpg',
                    '/trufa/trufa3.jpg',
                    '/trufa/trufa3.jpg',
                    '/trufa/trufa3.jpg',
                ],
                categoryId: TrufasCategory.id,
                discountPercent: 5,
            },
            {
                name: 'Trufa de Brigadeiro',
                slug: 'trufa-de-brigadeiro',
                description: 'Trufa de brigadeiro',
                basePrice: 3.9,
                imageUrls: [
                    '/trufa/trufa4.jpg',
                    '/trufa/trufa4.jpg',
                    '/trufa/trufa4.jpg',
                    '/trufa/trufa4.jpg',
                ],
                categoryId: TrufasCategory.id,
                discountPercent: 5,
            }
        ]
        await prisma.product.createMany({
            data: trufas
        })


    }
    catch (error) {
        console.error('erro seeding database', error);
    }
    finally {
        await prisma.$disconnect()
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })


export { }