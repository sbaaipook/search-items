import "./Screen.css"
import Item from"./Item"

const Screen =({children})=>{
	return(
			<div className="screen">
				<Item>
					{children}
				<Item/>
			</div>
		)
}
export default Screen;