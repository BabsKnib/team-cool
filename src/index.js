import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";

import App from "./App";
import NavBar from "./components/NavBar";

import Home from "./components/pages/Home";
import ScreenRepair from "./components/pages/ScreenRepair";

const { Header, Footer, Content } = Layout;

ReactDOM.render(
  <Layout>
    <BrowserRouter>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <Route path="/reparatie-aanvragen" component={ScreenRepair}></Route>
        <Route path="/" exact component={Home}></Route>
      </Content>
      <Footer>
        <p>Gemaakt door Bas Abbink</p>
        <p>Opzoeken: de iphone modellen, wat ik ga repareren, welke kleuren scherm er zijn</p>
      </Footer>
    </BrowserRouter>
  </Layout>,
  document.getElementById("root")
);
