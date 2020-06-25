import { useState, useEffect } from "react";
import { getCities } from "../controllers/cities";

const useCities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    getCities().then((data) => {
      setCities(data);
      setCurrentCity(data[0]);
    });
    setIsLoading(false);
  }, []);

  return { isLoading, cities, currentCity, setCurrentCity };
};

export default useCities;
