import React, { Component } from "react";

export default class App extends Component {
  state = {
    fullName: "walid zouari",
    bio: "test",
    imgSrc:
      "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
    profession: "pro",
    isShown: true,
    count:0
  };
  handleShow = () => {
    this.setState({ isShown: !this.state.isShown, count:0 });
  
  };
  componentDidMount(){
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.isShown? 
        <div>
          <img src={this.state.imgSrc} alt="" width ="250px" />
        <h1>
          {this.state.fullName}, {this.state.bio},
          {this.state.profession}{" "}
        </h1>
        <h2> {this.state.count}</h2>
        </div>
        :<h1>Click on the button to show</h1>}
        <button onClick={this.handleShow}> Is Shown</button>
      </div>
    );
  }
}
