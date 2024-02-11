import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const AuthAguard = ({children}: any) => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(()=>{
    if(status === "authenticated" || !data) {
        router.push("/")
    }
  }, [status, data, router])

  return <div>{status === "authenticated" && data ? <>{children}</> : null}</div> 
};
