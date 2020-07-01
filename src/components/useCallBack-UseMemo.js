import React, {Component, useEffect, useState, useCallback, useMemo} from "react";
import FetchService from "../services/fetchServices";

export const UseEffectApp2 = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <h3>UseEffect</h3>
        <Notification/>
        <button
          onClick={() => setValue((v) => v + 1)}>+
        </button>
        <button
          onClick={() => setVisible(() => setVisible(false))}>hide
        </button>
        <PlanetInfo id={value}/>
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
  ;
};


const Notification = () => {
  const [visible, seVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      seVisible(false)
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {visible && <p>Hello!!!</p>}
    </div>
  )
};

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res => res.json())
    .then(data => data);
}

const useRequest = (request) => {

  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }),[])

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);
    let cancelled = false;
    request()
      .then(
        (data) => !cancelled && setDataState({
          data,
          loading: false,
          error: null
        })
      )
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }))
    return () => cancelled = true;
  }, [request]);
  return dataState;
}

const usePlanetInfo2 = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);

  return useRequest(request);
}

const PlanetInfo = ({id}) => {
  const {data, loading, error} = usePlanetInfo2(id);
  if (error) {
    return <div>Sometghing is wrong</div>
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <p>{id} - {data.name}</p>
    </>
  )
}

