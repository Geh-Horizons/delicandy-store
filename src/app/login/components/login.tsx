import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-[100vw] pt-[150px]">
      <h1>
        Login{" "}
        <Button>
          <Link href={`/`}>HOME</Link>
        </Button>
      </h1>
    </div>
  );
}
