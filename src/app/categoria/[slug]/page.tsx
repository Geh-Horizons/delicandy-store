import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { CATEGORY_ICON } from "@/app/constants/category-icon";
import ProductItem from "@/components/ui/productItem";
import { computerProductTotalPrice } from "@/helpers/products";

const CategoryPage = async ({params}: any)  => {

  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug
    }, 
    include: {
      products: true
    },
  })
  if(!category){
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-5 pt-[135px]">
      <Badge className="">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
      </Badge>
      <div className="grid grid-cols-2 gap-4 items-center">
        {category.products.map((product)=> (
          <ProductItem
            key={product.id}
            product={computerProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
