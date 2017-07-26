import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyDxmnzEB5Xsn_Em4pz2EUxgpoPvQy3Yb_c'
import SearchBar from './components/search_bar'
// Create new Component. This component should produce some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
            </div>
    );
}
//Take the component generated HTML an put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));