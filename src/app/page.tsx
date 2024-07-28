"use client";
import Link from "next/link";

import styles from "@/styles/app.module.css";
import { useEffect } from "react";
import TableComponent from "@/components/Table";

export default function Home() {
   useEffect(() => {
      console.log(styles);
   });
   // console.log(styles);

   return (
      <div>
         <ul>
            <li>
               <Link className={styles["red"]} href={"/facebook"}>
                  <span className="red">Face book</span>
               </Link>
            </li>
            <li>
               <Link className="green" href={"/youtube"}>
                  Youtube
               </Link>
            </li>
            <li>
               <Link href={"/instagram"}>Instagram</Link>
            </li>
         </ul>
         <TableComponent />
      </div>
   );
}
