import "./Item.css"

const Item =({children})=>{
	
	return(
		<div className="item">
			<table border="1">
				<tr><th>Nom</th><th>Prenom</th><th>Age</th><th>Disponible</th></tr>
				{children}
			</table>
		</div>	
	)
}
export default Item;