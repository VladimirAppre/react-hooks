import React, {useContext} from "react";

export const MyContext = React.createContext();


const Child = () => { //
  const value = useContext(MyContext);

  return (
    <>
      <h3>Use context</h3>
      <p>{value}</p>
    </>
  )
}

//старый вариант через .Consumer
/*const Child = () => {
  return (
    <MyContext.Consumer>
      {
        (value)=> {
          return (
            <p>{value}</p>
          )
        }
      }
    </MyContext.Consumer>
  )
}*/

export default Child