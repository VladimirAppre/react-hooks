import React, {Component, useState} from "react";

/*export default class PersonUseState extends Component {
  state = {
    firstName: 'Vasia',
    lastName: 'Pupkin'
  };

  updateFirstName = () => {
    this.setState({firstName: 'Petya'});
  };

  render() {
    return <p>{this.state.firstName} {this.state.lastName}</p>
  };
};*/

const PersonUseState = () => {
  const [person, setPerson] = useState({
    firstName: '(пусто)',
    lastName: '(пусто)',
    errorMessage: null

  });

  const clearMessage = () => {
    setTimeout(() => {
      setPerson((peson) => {
        return {...person, errorMessage: null}
      })
    }, 3000);
  }

  const verifyValidation = (newFirstName, newLastName) => {
    console.log("newFirstName", newFirstName, 'newLastName', newLastName)
    if (newFirstName === person.firstName && newLastName === person.lastName) {
      clearMessage();
      setPerson((person) => {
        return {...person, errorMessage: 'Зачем жмякать если ничего не имзенил/а'}
      });
    }
    ;
    setPerson((person) => {
      return {...person, firstName: newFirstName, lastName: newLastName}
    })
  };

  const changeData = (event) => {
    event.preventDefault();
    const newFirstName = event.target.firstNameInput.value === '' ? person.firstName : event.target.firstNameInput.value;
    const newLastName = event.target.lastNameInput.value === '' ? person.lastName : event.target.lastNameInput.value;
    verifyValidation(newFirstName, newLastName);
  };

  return (
    <>
      <h3>Use state</h3>
      <p>Имя: {person.firstName}</p>
      <p>Фамилия: {person.lastName}</p>
      <form onSubmit={changeData}>
        <label>
          Имя: <input type="text" name='firstNameInput'/>
        </label>
        <label>
          Фамилия: <input type="text" name='lastNameInput'/>
        </label>
        <button type='submit'>Изменить</button>
      </form>
      {person.errorMessage}
    </>
  )
};

export default PersonUseState;