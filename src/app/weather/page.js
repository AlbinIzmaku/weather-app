import Hourly from "@/components/hourly";
import airQuality from "/public/airQuality.svg";
import Image from "next/image";
import styles from "@/style/weather.module.css";
import rectangle from "/public/rectangle.svg";

export default function Weather() {
  return (
    <main className={styles.main}>
      <div className={styles.ellipse3} />
      <div className={styles.ellipse2} />
      <div className={styles.ellipse1} />
      <div className={styles.rectangle} />
      <div className={styles.forecastContainer}>
        <div className={styles.forecastRectangle}>
          <Image src={rectangle} alt="Rectangle" />
        </div>
        <div className={styles.forecastText}>
          <button>Hourly Forecast</button>
          <button>Weekly Forecast</button>
        </div>
      </div>
      <section className={styles.hourlyContainer}>
        <Hourly />
        <Hourly />
        <Hourly />
        <Hourly />
        <Hourly />
        <Hourly />
      </section>
    </main>
  );
}
