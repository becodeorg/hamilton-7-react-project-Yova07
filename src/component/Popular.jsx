import axios from "axios";
import { useEffect, useState } from "react";

const Popular = () => {

    const [getData, setGetData] = useState([]);
    console.log(getData);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('https://api.rawg.io/api/games?key=bb65dd58f7bb4405b5196d2c42fdb801&page_size=8&')
                setGetData(response.data.results);
            }
            catch(error) { 
                console.log(error);
            }
        }
        fetch();
    }, []);


    return (
        <div className="popular">
            <div className="card__content">
                {getData.map((data, index) => {
                    return <div key={index} className="card">
                        <img className="img" src={data.background_image}></img>
                        <h1 className="card__title">{data.name}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Popular;