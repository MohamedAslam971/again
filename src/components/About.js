import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";



class About extends Component{

    constructor(props){
        super(props);

        // console.log("parent constructor");
    }


    componentDidMount(){
        // console.log("parent component Did mount");
      }
     

    render(){
        // console.log("parent render"); 
        return(
            <div>
                <h1>About</h1>
                <div>
                    loggedin User
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>this is about page</h2>
                <UserClass name={"Mohamed Aslam"} location={"Pondicherry"}/>
            </div>
        );
    }

}

export default About;