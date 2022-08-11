import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

import { useAppSelector } from "./redux/hooks/useAppSelector";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);

  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setAge(newAge));
  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    changeName(e.target.value);
  }
  function handleAgeInput(e: React.ChangeEvent<HTMLInputElement>) {
    changeAge(parseInt(e.target.value));
  }
  function handleSwitchTheme() {
    switchTheme(theme.status === "light" ? "dark" : "light");
  }

  // Funções gerais reduzidas
  // function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   dispatch(setName(e.target.value));
  // }
  // function handleAgeInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   dispatch(setAge(parseInt(e.target.value)));
  // }
  // function handleSwitchTheme() {
  //   dispatch(setThemeStatus(theme.status === "light" ? "dark" : "light"));
  // }

  return (
    <div
      style={{
        backgroundColor: theme.status === "light" ? "#FFF" : "#000",
        color: theme.status === "light" ? "#000" : "#FFF",
      }}
    >
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <hr />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
