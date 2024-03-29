import Image from "next/image";
import background from "/public/background.png";
import house from "/public/secondHouse.png";
import tabBar from "/public/tabBar.svg";
import LocationIcon from "@/svg/location";
import PlusIcon from "@/svg/plus";
import styles from "@/app/page.module.css";
import Menu from "@/svg/menu";
import Shape from "@/svg/shape";

export default function Home() {
  return (
    <main style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
      <Image
        src={background}
        alt="Background Image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <h1 style={{ fontSize: "34px", fontWeight: "normal" }}>Montreal</h1>
      <h1 style={{ fontSize: "96px", fontWeight: "normal" }}>19°</h1>
      <h4 style={{ fontSize: "20px", fontWeight: "500" }}>Mostly Clear</h4>
      <h3 style={{ fontSize: "20px", fontWeight: "500" }}>H:24° L:18°</h3>
      <Image
        src={house}
        alt="House"
        quality={100}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          border: "1px solid red",
          boxSizing: 'border-box'
        }}
      />
      <div className={styles.menu}>
        <div className={styles.curve}></div>
        <div
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LocationIcon />
          <Menu />
        </div>
        <div>
          <Shape />
          <PlusIcon />
        </div>
      </div>
    </main>
  );
}
