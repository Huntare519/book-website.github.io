import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "antd";
import "antd/dist/antd.css";
import TitleName from "./components/TitleName.jsx";
import MaterialAuto from "./components/MaterialAuto";
import FooterText from "./components/Footer.jsx";
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Layout className="layout">
      <Sider></Sider>
      <Layout>
        <Header className="Header">
          <TitleName />
        </Header>
        <Content>
          <MaterialAuto />
        </Content>
        <Footer>
          <FooterText />
        </Footer>
      </Layout>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
