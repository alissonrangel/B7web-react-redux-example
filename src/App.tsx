import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/* Usando sem hook personalizado
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
*/

//hook personalizado para não ter que importar o type RootState
import {useAppSelector} from './redux/hooks/useAppSelector';


import {useDispatch} from 'react-redux';
import { setName, setAge} from './redux/reducers/userReducer';
import {setThemeStatus, setSecondaryColor, setPrimaryColor} from './redux/reducers/themeReducer';


import styled from 'styled-components';


const Container = styled.div<{primary: string, secondary: string}>`
  background-color: ${props=>props.primary};
  color: ${props=>props.secondary};
  height: 100vh;
  input{
    background-color: ${props=>props.primary};
    color: ${props=>props.secondary};
    border: 1px solid ${props=>props.secondary};
    padding: 10px;;
  }
  button{
    background-color: ${props=>props.primary};
    color: ${props=>props.secondary};
    border: 1px solid ${props=>props.secondary};
  }
`

function App() {

  /*
  Usando sem hook personalizado
  const user = useSelector((state: RootState) => state.user)
  */
  const user = useAppSelector( state => state.user);

  const theme = useAppSelector( state => state.theme);

  const dispatch = useDispatch();


  //opcionais
  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setAge(newAge));

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    //dispatch(setName(e.target.value)); 
    //or
    changeName(e.target.value);

  }

  const handleAgeInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    //dispatch(setAge(e.target.value)); 
    //or
    changeAge(parseInt(e.target.value));
  }

  const handleSwitchTheme = () => {
    dispatch(setThemeStatus(theme.status === "light" ? "dark":"light"));
    let themeBack = theme.primary;
    dispatch(setPrimaryColor(theme.secondary));
    dispatch(setSecondaryColor(themeBack));
  }

  return (
    <Container className="App" primary={theme.primary} secondary={theme.secondary} >
      Meu nome é: {user.name} e tenho {user.age} anos.<br/>
      Tema: {theme.status}
      <hr/>
      <input type="text" value={user.name} onChange={handleNameInputChange} />
      <hr/>
      <input type="number" value={user.age} onChange={handleAgeInputChange} />

      <hr/>
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </Container>
  );
}

export default App;
