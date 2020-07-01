import React, {Component, useEffect, useState} from "react";
import FetchService from "../services/fetchServices";

export const UseEffectApp = () => {
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
        {/*<ClassCounter value={value} />*/}
        <HookCounter value={value}/>
        <PlanetInfo id={value}/>
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
  ;
};

const HookCounter = ({value}) => {

  useEffect(() => console.log('mount'), []);

  useEffect(() => console.log('update'));

  //для удаления чаще используется комбинация
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);


//применятся крайне редко на подобие componentWillUnmount()
  useEffect(() => () => console.log('unmount'), []);

  useEffect(() => {
    console.log('useEffect()');
    return () => console.log('clear');
  }, [value]);

  return <p>{value} Hook counter</p>;
}

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

const PlanetInfo = ({id}) => {
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

  return (
    <>
      <p>{id} {planetName}</p>
    </>
  )
}


class ClassCounter extends Component {

  componentDidMount() {
    console.log('class: mount');
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('class: update');
  };

  componentWillUnmount() {
    console.log('class: unmount');
  };

  render() {
    return <p>{this.props.value}</p>
  };

}