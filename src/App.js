import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navi from "./Navi";
import NotFound from "./NotFound";
import Text from "./Text";
import {Route, Routes} from "react-router-dom";
import Url from "./Url";
import UrlTextButton from "./UrlTextButton";
import About from "./About";


export default class App extends Component {    
  render() {
    return (
      <div>
        <Navi></Navi>
        <UrlTextButton></UrlTextButton>

        <Routes>
          <Route path="/" element={<Url />} />
          <Route path="/url" element={<Url />}></Route>
          <Route path="/text" element={<Text />}></Route>
          <Route path="/" element={<About />} />
          {/* <Route path="/" element={<ChromeApp />}></Route> */}
          {/* <Route path="/" element={<QrcodeApı />}></Route> */}

          <Route path = "*" element={<NotFound/>} />
        </Routes>
      </div>
    );
  }
}
