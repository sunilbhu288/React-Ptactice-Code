
// import './App.css';
// import User from "./components/User"
// function App() {
//   let data = "Rahul Patel";
//   function Apple(){
//     alert("Welcome");
//   }
 
//   return (
//     <div className="App">
//       {/* <h1>Welcome</h1> */}
//       <h3>{data}</h3>
//       <button onClick = {Apple}>Click Me </button>
//       <User/>
//     </div>
//   );
// }

// export default App;

//--------------------------------------------------------
// //use of useState..
// import User from "./components/User";
// import {useState} from 'react';
// function App(){
//   const[data,setData] = useState(0);
//   function Update(){
//     setData(data+1);
//   }
//   return(
//     <>
//     <h1>{data}</h1>
//     <button onClick={Update}>Click Here</button>
//     </>
//   )
// }
// export default App;
//----------------------------------------------------------------
//use of state
//we can use super() only class..

// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data : 0,
//     }
//   }
//    apple(){
//     this.setState({
//       data : this.state.data+1,
//     })
//   }
//   render(){
//     return(
//       <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>Click Here</button>
//       </div>
//     )
//   }
// }
// export default App;

//---------------------------------------------------

// import React from 'react';
// import {useState} from 'react'
// function App(){
//   const[data,setData] = useState(0);
//   function showData(){
//     setData(data+1)
//   }
// return(
//   <>
//    <h1>{data}</h1>
//    <button onClick={showData}>Click Here</button>
//   </>
//   )
// }
// export default App;
//----------------------------------------------------------------
// import React from 'react';
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       message : "Hello Word"
//     }
//   }
//    changeMessage(){
//     this.setState ({
//       message : "Thank You For Subsciption....."
//     })
//   }
//   render(){
//     return(
//       <>
//       <h1>{this.state.message}</h1>
//       <button onClick = {()=>this.changeMessage()}>Subscription</button>
//       </>
//     )
//   }
// }
// export default App;


//------------------------------------------------------------------
// import React from 'react'
//   class App extends React.Component{
//     constructor(){
//       super();
//       this.state = {
//         count : 0
//       }
//     }
//     increasedata(){
//       this.setState ({
//         count : this.state.count+1
//       })
//     }
//     decrement(){
//       this.setState({
//         count : this.state.count-1
//       })
//     }
//     render(){
//       return(
//         <>
//         <h1>{this.state.count}</h1>
//         <button onClick = {()=> this.increasedata()}>Increament</button>
//         <button onClick = {()=> this.decrement()}>Decrement</button>
//         </>
//       )
//     }
//   }

// export default App;

//-----------------------------------------------------------------
// import React from 'react';
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       clothes : ["Kurta","Pant","T-Shirt","Jeans"]
//     }
//   }
//   render(){
//     return(
//       <>
//       <ul>
//       {this.state.clothes.map(product=>{
//         return <li>{product}</li>
//       })}
//       </ul>
//       </>
//     )
//   }
// }
// export default App;
//--------------------------------------------------------------------
// import React from 'react';
// import {useState} from 'react'
// function App(){
//   const[data,setData] = useState(null);
//   const[print,printData] = useState(false)
//   function changeData(e){
//     setData(e.target.value);
//   }
//   return(
//     <>
//     {print ? <h1>{data}</h1> : null}
//     <input type= 'text' onChange={changeData}/>
//     <button onClick = {()=>printData(true)}>PrintData</button>
//     </>
//   )
// }
// export default App;

//---------------------------------------------------------------------------------
//Hide and Show Element are use in react
// import React from 'react';
// import {useState} from 'react';
// function App(){
//   const[data,setData] = useState(true)

// return(
//   <div className="App">
//   {data?<h1>Hello World.</h1> : null}
//   {/* <button onClick = {()=>setData(false)}>Hide</button>
//   <button onClick = {()=>setData(true)}>Show</button> */}

//   <button onClick = {()=>setData(!data)}>Click</button>
//   </div>

// )
// }
// export default App;


//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------
// list are used in function....
// import React from 'react';
// function App(){
//   const number = [1,2,3,4,5,6]
//   return(
//     <>
//     <ul>
//     {number.map(result =>{
//       return <li>{result}</li>
//     })}
//     </ul>
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------------------
// 
// import React from 'react'
// import {useState} from 'react'
// function App(){
//   const [color, setColor] = useState("green")
//   return(
//     <>
//     <h1>My favorite Color is : {color}</h1>
//     <button onClick = {()=>setColor("red")}>Red</button>
//     <button onClick = {()=>setColor("white")}>White</button>
//     <button onClick = {()=>setColor("black")}>Black</button>
//     </>
//   )
// }
// export default App

//------------------------------------------------------------------------
//change the background color according to the clicking button..
// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       changeColor : " yellow"
//     }
//   }
//   greenColor(){
//     this.setState({
//       changeColor : "green"
//     })
//   }
//   redColor(){
//     this.setState({
//       changeColor : "red"
//     })
//   }
//   blackColor(){
// this.setState({
//   changeColor : "black"
// })
//   }
//   render(){
//     return(
//       <div style = {{height : '100vh', backgroundColor : this.state.changeColor}}>
//         <button onClick = {()=>this.greenColor()}>Green</button>
//         <button onClick = {()=>this.redColor()}>Red</button>
//         <button onClick = {()=>this.blackColor()}>Black</button>
//       </div>
//     )
//   }
// }
// export default App;


//----------------------------------------------------------------------------------

// import React from 'react'
// import {useState} from 'react'
// function App(){
//     const[data,setData] = useState(null)
//     return(
//       <>
//       {data ? <h1>Hello Word</h1> : null}
//       <button onClick = {()=>setData("Welcome")}>Click Here</button>
//       </>
//     )
// }
// export default App;

//----------------------------------------------------------------------------
// //use Of useRef
// import React from 'react'
// import {useRef} from 'react'
// function App(){
//   const inputRef = useRef(null)
//   function updateInput(){
//     inputRef.current.value = "1000"
//   }
//   return(
//     <>
//     <input type ="text" ref = {inputRef}/>
//     <button onClick = {updateInput} >Click</button>
//     </>
//   )
// }
// export default App;
//-------------------------------------------------------------
// import React from 'react'
// import User from './components/User'
// function App(){
//   return (
//     <>
//     <h1>App Component</h1>
//     <User name = "Ajay Singh"/>
//     </>
//   )
// }
// export default App;

// import React from 'react'
// import {useEffect,useState} from 'react'
// function App(){
//   const[count , setCount] = useState(0)
//   const[data, setData] = useState(5)

//   useState(() =>{
//     console.log("useEffect")
//   })
//   return(
//     <>
//     <h1>{count}</h1>
//     </>
//   )
// }
// export default App;

//--------------------------------------------------------------------------
// import React from 'react'
// import {useEffect,useState} from 'react'
// function App(){
//   const[count,setCount] = useState(0)
//   const[data,setData] = useState(5)
  
//     useEffect(()=>{
//       function updateData(){
//       setCount(count+1)
//       setData(data*5)
//       }
//     })
  
//   return(
//     <>
//     <h2>Count : {count}</h2>
//     <h2>Data : {data}</h2>
//     <button onClick = {updateData}>Click Here</button>
//     </>
//   )
// }
// export default App;

//----------------------------------------------------------------------------------------
//High Order Function (HOC) used in react
// import React from 'react'
// import {useState} from 'react'
// function App(){
//   return(
//     <>
//      <HOCred hoc = {Counter}/>
//      <HOCblue hoc = {Counter}/>
//     </>
//   );
// }
// function HOCred(props){
//   return(
//     <>
//     <h2 style ={{background : "red",height : "100px",width : "100px"}}><props.hoc/></h2> 
//     </>
//   );
// }
// function HOCblue(props){
//   return(
//     <>
//     <h2 style ={{background : "blue",height : "100px",width : "100px"}}><props.hoc/></h2> 
//     </>
//   );
// }
// function Counter(){
//   const[count,setCount] = useState(0)
//   return(
//     <>
//     <h3>{count}</h3>
//     <button onClick = {()=>setCount(count+1)}>Click Here</button>
//     </>
//   );
// }
// export default App;
//-------------------------------------------------------------------------------------------------

// import React from 'react'
// import {useState} from 'react'
// function App(){
//   return(
//     <>
//     {/* <h1>App Component</h1> */}
//     <HOCred colorPrint = {User}/>
    
//     </>
//   )
// }
// function HOCred(props){
//   return(
//     <h2 style={{background : "red", height : "100px", width : "100px"}}><props.colorPrint/></h2>
//   )
// }
// function User(){
//   const[count,setCount] = useState(0)
//   return(
//     <>
//     {/* <h2>User Component</h2> */}
//     <h2>{count}</h2>
//     <button onClick = {()=>setCount(count+1)}>Click</button>
//     </>
//   )
// }
// export default App;

//------------------------------------------------------------------------------------

// import React from 'react'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// function App(){
//   return(
//     <div>
//     <Router>
//       <Link to ="/home">Home</Link>
//       <Link to ="/about">About</Link>
//       <Route path = "/home"><Home/></Route>
//       <Route path = "/about"><About/></Route>
//     </Router>
//     </div>
//   )
// }
// function Home(){
//   return(
//     <>
//     <h2>Home Page</h2>
//     <p>This is Home Page</p>
//     </>
//   )
// }
// function About(){
//   return(
//     <>
//     <h2>About Page</h2>
//     <p>This is About Page</p>
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------------------------
// fetch API in react ---> Get API

// import React from 'react'
// import {useEffect,useState} from 'react'
// function App(){
//   const[data,setData] = useState([])

//     fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then((result)=> {
//       result.json().then((resp)=>{
//        setData(resp)
//       })
//     },[])
//     console.log(data)
//     return(
//       <>
//       <h1>Get API Data</h1>
//       <tbody>
//       <table border = '1'>
//         <tr>
//           <td>Name</td>
//           <td>City</td>
//         </tr>
//         {
//           data.map((item)=>
//           <tr>
//             <td>{item.name}</td>
//             <td>{item.city}</td>
//           </tr>
//           )
//         }
//       </table>
//       </tbody>
//       </>
//     )
// }
// export default App;
//-------------------------------------------------------------------------
//POST API Call
// import './App.css';
// import React, {  useState } from 'react'
// function App() {
//  const [name,setName]=useState("");
//  const [city,setCity]=useState("");
// //  const [mobile,setMobile]=useState("");
// function saveData()
// {
//   let data={name,city}
// console.warn(data);
//   fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     // console.warn("resp",resp);;
//     resp.json().then((result)=>{
//       console.warn("result",result)
//     })
//   })
// }
//   return (
//     <div className="App">
//       <h1>POST API Example </h1>  
      
//       <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
//       <input type="text" name="city"  value={city} onChange={(e)=>{setCity(e.target.value)}} /> <br /> <br />
//       {/* <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br /> */}
      
//       <button type="button" onClick={saveData} >Save New User</button>
     
//     </div>
//   );
// }
// export default App;

//--------------------------------------------------------------------
// import React from 'react'
// import User from './components/User'
// function App(){
//   return(
//     <>
//     <h3>App Components</h3>
//     <User/>
//     </>
//   )
// }
// export default App;
import React from 'react'
// import User from './components/User'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
function App(){
  return(
    <>
    <Router>
      <Link to = '/home'>Home</Link>
      <link to ='/user'>User</link>
      <Route path = '/home'><Home/></Route>
      <Route path = '/user'><User/></Route>
      </Router>
    
    </>
  )
}
function Home(){
  return(
    <>
    <h2>Home Page</h2>
    <p>This is home page</p>
    </>
  )
}
function User(){
  return(
    <>
     <h2>User Page</h2>
     <p>This is User page</p>
    </>
  )
}
export default App;