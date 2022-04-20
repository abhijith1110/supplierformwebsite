import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import {Navbar} from "./components/Navbar";
import {Search} from "./components/Search";
import {Form} from "./components/Form";
import {Footer} from "./components//Footer";
function App() {
  return(
    <><Header /> <Search/> <Navbar/> <Menu/> <Form/> <Footer/></>
  );
}

export default App;
