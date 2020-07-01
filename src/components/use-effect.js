import React, {Component, useEffect, useState} from "react";

export const UseEffectApp = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <h3>UseEffect</h3>
        <button
          onClick={() => setValue((v) => v + 1)}>+
        </button>
        <button
          onClick={() => setVisible(() => setVisible(false))}>hide
        </button>
        {/*<ClassCounter value={value} />*/}
        <HookCounter value={value}/>
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
  },[]);


//применятся крайне редко на подобие componentWillUnmount()
  useEffect(() => () => console.log('unmount'),[]);

  useEffect(() => {
    console.log('useEffect()');
    return () => console.log('clear');
  }, [value]);

  return <p>{value}</p>;
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