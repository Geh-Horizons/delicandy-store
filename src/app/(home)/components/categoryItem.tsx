import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { CakeIcon, Dessert, KeyboardIcon, PopcornIcon } from "lucide-react";
import Link from "next/link";
import { GiCupcake } from 'react-icons/gi'

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {

  const CATEGORY_ICON = {
    cupcake: <GiCupcake size={22} />,
    bolo: <CakeIcon size={22} />,
    trufas: <PopcornIcon size={22} />
  }


  return (
    <Link href={`/categoria/${category.slug}`} >
      <Button className="flex items-center justify-center sm:w-[400px] w-[200px] gap-2 cursor-pointer outline">
        <div className="flex min-w-[18%] items-center">
          <div className="pr-3">
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          </div>

          <div className="flex items-start uppercase">
            <span className="text-lg font-bold">{category.name}</span>
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default CategoryItem;
