import React from "react";
import styles from "../styles/LandingCompanies.module.css";

const LandingCompanies: React.FC = () => {
  return (
    <div className={styles.landingCompaniesContainer}>
      <div className={styles.landingCompaniesLogos}>
        <span>TheVerge</span>
        <span>COMPUTERWORLD</span>
        <span>TechCrunch</span>
        <span>VentureBeat</span>
      </div>

      <div className={styles.landingCompaniesQuoteContainer}>
        <p className={styles.landingCompaniesQuote}>
          <span className={styles.landingCompaniesQuoteMarkLeft}>"</span>
          The best software ever created for leveraging AI in building
          interactive experiences for the Web.
          <span className={styles.landingCompaniesQuoteMarkRight}>"</span>
        </p>
        <p className={styles.landingCompaniesAuthor}>
          Tiago Forte, author of Building A Second Brain
        </p>
      </div>
    </div>
  );
};

export default LandingCompanies;
