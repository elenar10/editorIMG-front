import React from 'react';
import { useEffect, useState } from "react";

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const getCards = async () => {
            const res = await fetch('http://localhost:4015/favorites/all');
            const data = await res.json();
            return setCards(data);
           
        }
        getCards()
    }, []);
    return (
        <section>
            <p>aquí estarán las cards</p>
        </section>
    );

}
export default Home;