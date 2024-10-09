// pages/page.tsx

import LandingCompanies from "./components/LandingCompanies";
import StatisticsSection from "./components/StatisticsSection";
import MobileCard from "./components/MobileCard";
const Home: React.FC = () => {
  return (
    <div>
      <MobileCard />

      <LandingCompanies />
      <StatisticsSection />
    </div>
  );
};

export default Home;
