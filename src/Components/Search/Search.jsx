import "./Search.css"

const Search =_=>{
	return(
		<>
			<div className="search">
				<input type="text" placeholder="search for name"/>
				<button>search</button>
			</div>
			<div className="disp">
				<label htmlFor="dis">Only disponible</label>
	  		<input type="checkbox" id="dis" />
	  	</div>	
	  </>
		)
}
export default Search;