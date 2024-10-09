// pages/page.tsx
import { Em, Strong, Text } from "@radix-ui/themes";
import styles from "./styles/LandingPage.module.css";
import LandingCompanies from "./components/LandingCompanies";
import StatisticsSection from "./components/StatisticsSection";
const Home: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Text className={styles.textContent} size="9">
              <Em> Pupil Sync:</Em> Reimagining Learning for a{" "}
              <Strong>Connected World</Strong>.
            </Text>
          </div>
        </div>
      </div>
      <LandingCompanies />
      <StatisticsSection />
    </div>
  );
};

export default Home;
