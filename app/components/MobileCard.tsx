"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/MobileCard.module.css";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const MobileCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardContent = (
    <div className={styles.cardContent}>
      <h1 className={styles.cardTitle}>
        <span className={styles.titleGradient}>Pupil Sync</span>
      </h1>
      <p className={styles.cardSubtitle}>
        Reimagining Learning for a <strong>Connected World</strong>
      </p>
      <button className={styles.cardButton}>Learn More</button>
    </div>
  );

  return (
    <div className={styles.cardContainer}>
      {isMounted ? (
        <MotionDiv
          className={styles.cardWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.cardBackground}></div>
          {cardContent}
        </MotionDiv>
      ) : (
        <div className={styles.cardWrapper}>
          <div className={styles.cardBackground}></div>
          {cardContent}
        </div>
      )}
    </div>
  );
};

export default MobileCard;
