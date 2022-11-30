import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Content = () => {


    const [getData, setGetData] = useState([]);
    const [getGameResponse, setGetGameResponse] = useState(false);
    const [count, setCount] = useState(1);

    const params = useParams();
    console.log(params.platform);

    //Buttons
    const getNextPage = () => {
        setCount(count + 1);
    }

    const getPreviousPage = () => {
        setCount(count - 1);
    }

    //Get Data
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios(`https://api.rawg.io/api/games?key=bb65dd58f7bb4405b5196d2c42fdb801&platforms=${params.platform}&page=${count}`);
                setGetData(response.data.results);
                if (response) {
                    setGetGameResponse(true);
                }
            }
            catch (error) {
                console.log(error);
            }

        }
        fetch();
    }, [params]);


    if (getGameResponse === false) {
        return <div className="loading">
            <div className="loadingState"></div>
        </div>
    }
    else {
        return (
            <div className="Content">
                <div className="card__content">
                    {getData.map((data, index) => {
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
                </div>
                <div className="content__btn">
                    <button className="btnPrev" onClick={getPreviousPage}>Previous</button>
                    <button className="btnNext" onClick={getNextPage}>Next</button>
                </div>
            </div>
        )
    }

}


export default Content;