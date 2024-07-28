"use client";
import Link from "next/link";

import { useEffect, useMemo } from "react";

import styles from "@/styles/app.module.css";

import TableComponent from "@/components/Table";

export default function Home() {
   useEffect(() => {
      (async function fetchData() {
         const res = await fetch("http://localhost:8000/blogs");

         const data = await res.json();
         console.log(data);
      })();
   }, []);

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
