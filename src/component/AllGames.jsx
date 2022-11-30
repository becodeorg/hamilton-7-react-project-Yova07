import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AllGames = () => {

    const [getGames, setGetGames] = useState([]);
    const [getResponse, setGetResponse] = useState(false);
    const [count, setCount] = useState(1);
    console.log(getGames);

    const params = useParams();
    console.log(params);


    //Buttons
    const getNextPage = () => {
        setCount(count + 1);
    }

    const getPreviousPage = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=bb65dd58f7bb4405b5196d2c42fdb801&pages=${count}&page=${count}`)
                setGetGames(response.data.results);
                setGetResponse(true);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [count]);

    if (getResponse === false) {
        return <div className="loading">
            <div className="loadingState"></div>
        </div>
    }
    else {
        return (
            <div className="card__content">
                {getGames.map((data, index) => {
                    return <div key={index} className="card">
                        <div>
                            <img className="img" src={data.background_image}></img>
                            <h1 className="card__title">{data.name}</h1>
                        </div>
                        <div className="added">
                            <i className="fa-solid fa-plus"></i>
                            <p>{data.added}</p>
                        </div>
                    </div>
                })}
                <div className="content__btn">
                    <button className="btnPrev" onClick={getPreviousPage}>Previous</button>
                    <button className="btnNext" onClick={getNextPage}>Next</button>
                </div>
            </div>
        )
    }
}

export default AllGames;