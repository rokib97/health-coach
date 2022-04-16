import { useEffect, useState } from "react";

const useData = () => {
  const [requirements, setRequirements] = useState([]);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("requiremnts.json")
      .then((res) => res.json())
      .then((data) => setRequirements(data));
  }, []);
  return [requirements, services];
};

export default useData;
