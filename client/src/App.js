import React from "react";
import BrewContainer from "./components/BrewContainer"
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);

function App() {
    return (
        <BrewContainer />
    );
}

export default App;
