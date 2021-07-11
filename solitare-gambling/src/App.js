import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClockSolitare from "./Components/clock-solitare.component";

const App = () => {

    return (
        <Router>  
                   
        {/* Here instead of using the component, we use the render and then the component
            * we do this because the component cannot take in anything without using render
            * if you just want to route to a componet without passing anyting to it
            * <Route path="/" exact component={<component>} /> works*/}
        
        
        <Route path="/clock" exact render={(props) => (
            <>
                {<ClockSolitare />}
            </>
        )}
        />
        
        
        
        </Router>
    );
}

export default App;