import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Style/home.scss"

const Home = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get("/features.json");
      setFeatures(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };
  return (
    <div>
      <Hero />
      <div className="features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            text={feature.text}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
