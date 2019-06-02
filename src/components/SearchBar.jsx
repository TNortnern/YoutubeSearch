import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''};

   onInputChange = event => {
       this.setState({term:event.target.value})
   }

   onFormSubmit = event => {
       event.preventDefault();
        this.props.onFormSubmit(this.state.term);
       //callback from parent

   }

   componentDidMount(){
       this.setState({term:"programming"})
   }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="video">Video Search</label>
                        <input name="video" type="text" value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    </div>
                 </form>
             </div >
        )
    }
}

export default SearchBar;