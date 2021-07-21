import React,{Component} from 'react';

import "./App.css"

import Cards from './Components/Cards';
import axios from 'axios';

 
  


class App extends Component{
constructor(props){
    super(props);
    this.state={
        Search:[]
    }
    
}
    componentDidMount(){
   axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then((res)=>{

        console.log(res.data)

    this.setState({ Search:res.data.Search })
         })

  }

    render(){
        return ( 
            <div className="container">

             <div className="topbar">Movie's</div>
           <div className="card-container" >
           {this.state.Search.map((item)=>  <Cards   {...item} />  )}

           </div>

         </div>

         );

    }
}
 
export default App
    

