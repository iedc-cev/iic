"use client";

import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "";
      }, 550);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`${styles.preloader} ${fadingOut ? styles.fadeOut : ""}`}
      aria-hidden={!loading}
      role="status"
      aria-label="Loading Institution's Innovation Council"
    >
      <div className={styles.ambientGlow} />

      <div className={styles.contentWrapper}>
        {/* Brand Title */}
        <h2 className={styles.brandTitle}>
          Institution&apos;s <span className="text-gradient">Innovation</span> Council
        </h2>
      </div>
    </div>
  );
}
