import React from "react";
import styles from "../styles/StatisticsSection.module.css";

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      number: "15Million+",
      label: "Happy Students",
      colorClass: styles["statistics-section__stat--orange"],
    },
    {
      number: "24000+",
      label: "Mock Tests",
      colorClass: styles["statistics-section__stat--red"],
    },
    {
      number: "14000+",
      label: "Video Lectures",
      colorClass: styles["statistics-section__stat--blue"],
    },
    {
      number: "80000+",
      label: "Practice Papers",
      colorClass: styles["statistics-section__stat--purple"],
    },
  ];

  return (
    <div className={styles["statistics-section"]}>
      <h1 className={styles["statistics-section__title"]}>
        A Platform Trusted by Students Worldwide
      </h1>
      <p className={styles["statistics-section__subtitle"]}>
        Don't Just Take Our Word for It. Delve into the Numbers and Witness the
        Excellence for Yourself!
      </p>

      <div className={styles["statistics-section__grid"]}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles["statistics-section__stat"]} ${stat.colorClass}`}
          >
            <h2 className={styles["statistics-section__stat-number"]}>
              {stat.number}
            </h2>
            <p className={styles["statistics-section__stat-label"]}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <button className={styles["statistics-section__button"]}>
        Get Started
      </button>
    </div>
  );
};

export default StatisticsSection;
