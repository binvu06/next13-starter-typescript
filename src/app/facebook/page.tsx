"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

import React from "react";

type Props = {};

const Facebook = (props: Props) => {
   const router = useRouter();
   function handleClick() {
      router.push("/");
   }

   return (
      <div>
         Facebook
         <div>
            <Button variant="success" onClick={handleClick}>
               Back home
            </Button>
         </div>
      </div>
   );
};

export default Facebook;
