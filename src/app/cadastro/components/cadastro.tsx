import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageCadastro() {
  return (
    <div className="p-5 pt-[150px]">
      <div className="flex items-center justify-center gap-2">
        Registrar
        <Link href={`/`}>
          <Button className="">HOME</Button>
        </Link>
      </div>
    </div>
  );
}
