import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { CakeIcon, Dessert, KeyboardIcon, PopcornIcon } from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {

    const categoryICON = {
        cupcake: <Dessert size={22}/>,
        bolo: <CakeIcon size={22}/>,
        trufas: <PopcornIcon size={22}/>
    }


  return (
    <div className="flex items-center justify-center  w-[100px]">
      <Badge className="flex items-center justify-center sm:w-[400px] w-[200px] gap-2 cursor-pointer outline">
        {categoryICON[category.slug as keyof typeof categoryICON]}
        <span className="text-lg font-bold">{category.name}</span>
      </Badge>
    </div>
  );
};

export default CategoryItem;
