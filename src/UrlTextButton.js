import React, { Component } from "react";
import { Button } from "reactstrap";

export default class UrlTextButton extends Component {
  render() {
    return (
      <div>
        <Button href="/url" className="bckgrnd-clr" color="link">
          URL
        </Button>
        <Button href="/text" className="btn2 bckgrnd-clr" color="link">
          Text
        </Button>
      </div>
    );
  }
}
