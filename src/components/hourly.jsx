"use client";
import Image from "next/image";
import fastWindSmallIcon from "/public/fastWindS.png";
import styles from "@/style/hourly.module.css";
import { useEffect, useState } from "react";

export default function Hourly({time, midDay}) {
  

  return (
    <div className={styles.hourly}>
      <h4 suppressHydrationWarning>{time} {midDay}</h4>
      {/* image bone me svg */}
      <Image src={fastWindSmallIcon} alt="Fast Wind" width={44} height={38} />
      <h3>19°</h3>
    </div>
  );
}
