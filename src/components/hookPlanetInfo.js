import React, {useEffect, useState} from "react";

import FetchService from "../services/fetchServices";

const usePlanetInfo = (id) => {
  const [planetName, setPlanetName] = useState('planetName');

  const fetchService = new FetchService();
  const {getPlanetName} = fetchService;

  const getName = async (condition) => {
    const resultName = await getPlanetName(id)
    !condition && setPlanetName(resultName);
  };

  useEffect(() => {
    let cancelled = false;
    getName(cancelled)
    return () => cancelled = true;
  }, [id]);
  return planetName;
}

const PlanetInfoMyHook = ({id}) =>{
  const name = usePlanetInfo(id);

  return(
    <div> {id} - {name} myHook</div>
  )
}

export default  PlanetInfoMyHook;