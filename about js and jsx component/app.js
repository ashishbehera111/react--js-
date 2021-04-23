import React,{Component} from "react";
import LOGIN from "./login";
import REG from "./reg";

class cls1 extends Component{
    tmp = <LOGIN/>
    funlog=()=>{
        this.tmp=<LOGIN/>
        this.setState({})
    }
    funreg=()=>{
        this.tmp=<REG/>
        this.setState({})
    }
    render(){
        return (
           <div className="container from-control">
               
<button type="button" className="btn btn-success" onClick={this.funlog}> <span className="fas fa-address-card fa-2x mr-3"></span>Login</button>
&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-primary" onClick={this.funreg}><span className="fab fa-acquisitions-incorporated fa-2x"></span>Reg</button>
{this.tmp}
           </div>
            )
    }
}

export default cls1;