import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
            name : "Dummy",
            login : "Default"
        }
    };
    // console.log("child constructor");
  }

  async componentDidMount(){
    // console.log("child component Did mount");
    const data = await fetch("https://api.github.com/users/MohamedAslam971");
    const json = await data.json();

   this.setState({
    userInfo : json,
   });

   this.inter=setInterval(()=>{
    // console.log("hello")
  },1000);

   
  }
  componentDidUpdate(){
    // console.log("component did update ");
  }

  componentWillUnmount(){
    // console.log("component will unmount");
    clearInterval(this.inter)
  }

  render() {
    // console.log("child render");

    // console.log(this.state);
    // const { name, location } = this.props;
    const {name, login, avatar_url } = this.state.userInfo;
    // debugger;
   
    return (
      <div className="user-card">
        <img className="aslam" src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>User_Name : {login}</h3>
        <h4>Contact- 9489446690</h4>
      </div>
    );
  }
}

export default UserClass;
