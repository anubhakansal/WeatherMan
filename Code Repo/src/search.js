import React from 'react';
import './App.css'
class Search extends  React.Component {
    handleOnInputChange = (event) => {
        const query = event.target.value;
                this.setState({ query, loading: true, message: ''  } );
    };
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
		};
    }
    render(){
        return(
            <form className="example">
            <input id="txtsearch" type="text" placeholder="Search..." value="" onChange={this.handleOnInputChange}/>
            <button id="btnSearch" ><i className="fa fa-search"></i></button>
        </form>

        )
    }
}

export default Search;