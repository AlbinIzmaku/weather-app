'use client'
import Hourly from "@/components/hourly";
import Image from "next/image";
import styles from "@/style/weather.module.css";
import rectangle from "/public/rectangle.svg";
import { useEffect, useState } from "react";

export default function Weather() {
  const hours = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [time, setTime] = useState(new Date());
  const [a, setA] = useState(0);
  const [b, setB] = useState(6);
  const [startX, setStartX] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const midDay = time.getHours() > 11 ? "PM" : "AM";
  const currentTime = time.getHours() % 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
    setScrolling(true);
  }

  function handleTouchMove(e) {
    if (!scrolling) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    if (deltaX > 0) {
      setA(a - 2);
      setB(b - 2);
    } else {
      setA(a + 2);
      setB(b + 2);
    }
    setStartX(currentX);
  }

  function handleTouchEnd() {
    setScrolling(false);
  }

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
      <section
        className={styles.hourlyContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {hours.slice(a, b).map((hour, index) => {
          return (
            <Hourly key={index} time={currentTime + hour} midDay={midDay} />
          );
        })}
      </section>
    </main>
  );
}
