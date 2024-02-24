import { Badge } from "@/components/ui/badge";
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
    <div className="flex items-center justify-center w-[100px]">
      <Link href={`/categoria/${category.slug}`} >
        <Badge className="flex items-center justify-center sm:w-[400px] w-[200px] gap-2 cursor-pointer outline">
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-lg font-bold">{category.name}</span>
        </Badge>
      </Link>

    </div>
  );
};

export default CategoryItem;
