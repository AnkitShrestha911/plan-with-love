import React, { useState } from "react";
import Tours from './Components/Tours'
import data from './data'
import RefreshPage from "./Components/RefreshPage";

const App = () => {

    const [tours, setTours] = useState(data);

    function removeCard(id) {
        const newData = tours.filter((ele) => {
            return ele.id !== id;
        })

        setTours(newData);
    }

    function resetTours() {

        setTours(data);
    }


    return (
        <div>

            {
                (tours.length === 0) ? <RefreshPage resetTours={resetTours}></RefreshPage> : <Tours tours={tours} removeCard={removeCard}></Tours>
            }
        </div>

    )
};

export default App;
