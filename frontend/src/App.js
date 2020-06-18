import React from 'react';
import ProduktStammdatenList from "./components/ProduktStammdatenList";
import './App.css';


class App extends React.Component {

    render() {

        return(
            <div className="App">
                <ProduktStammdatenList />
            </div>
        );
    }

}

export default App;