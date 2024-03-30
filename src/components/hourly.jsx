import Image from "next/image";
import fastWindSmallIcon from "/public/fastWindS.png";
import styles from "@/style/hourly.module.css";

export default function Hourly() {
  return (
    <div className={styles.hourly}>
      <h4>12 AM</h4>
      {/* image bone me svg */}
      <Image src={fastWindSmallIcon} alt="Fast Wind" width={44} height={38} />
      <h3>19°</h3>
    </div>
  );
}
