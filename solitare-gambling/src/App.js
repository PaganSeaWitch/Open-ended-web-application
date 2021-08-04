import "./wdyr"
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClockSolitare from "./Components/Solitare Components/clock-solitare.component";
import Agnes from "./Components/Solitare Components/agnes.component";
import Bar from "./Components/Bar Components/bar.component";
const App = () => {

    return (
        <Router>  
                   
        {/* Here instead of using the component, we use the render and then the component
            * we do this because the component cannot take in anything without using render
            * if you just want to route to a componet without passing anyting to it
            * <Route path="/" exact component={<component>} /> works*/}
        
        
        <Route path="/clock" exact render={(props) => (
            <>
                {<ClockSolitare/>}
            </>
        )}
        />
        
        <Route path="/agnes" exact render={(props) => (
            <>
                {<Agnes/>}
            </>
        )}
        />

    <Route path="/" exact render={(props) => (
            <>
                {<Bar/>}
            </>
        )}
        />
        
        </Router>
    );
}

export default App;