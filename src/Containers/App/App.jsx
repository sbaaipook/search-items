import {useState} from "react"
import Home from "../Home"
import Search from "../../Components/Search"
import Screen from "../../Components/Screen"
import "./App.css"

const App =_=> {
	let [count,setCount] = useState(0);
	const handleKeyup =_=>{
		
	}
 	return (
 		<Home>
 			<Search onkeyup={handleKeyup}/>
 			<Screen>
 				
 			<Screen/>
 		</Home>
 		)
 }
 export default App;