import './App.css';
import React, { useState } from 'react';

function App() {

    const [page, setPage] = useState('1');
    const [listOfCat, setListOfCat] = useState([]);

    fetch(`https://catfact.ninja/breeds?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            data.data.map(cat => cat.breed);
            console.log(data.data[0]);
        });



    function handleButton(event) {
        setPage(event.target.value);
    }


    return ( <
        div className = "App" >
        <
        h1 > Liste des races de chats < /h1> <
        div > { listOfCat } <
        /div> <
        button onClick = { handleButton }
        value = "1" > 1 < /button> <
        button onClick = { handleButton }
        value = "2" > 2 < /button> <
        button onClick = { handleButton }
        value = "3" > 3 < /button> <
        button onClick = { handleButton }
        value = "4" > 4 < /button> <
        /div>
    );
}

export default App;