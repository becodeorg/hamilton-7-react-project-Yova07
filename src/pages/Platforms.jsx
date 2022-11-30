import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Platforms = ({ getPlatforms, getResponse }) => {


    if (getResponse === false) {
        return <div className="loading"></div>
    }
    else {
        return (
            <div>
                <div className="platforms">
                    {getPlatforms.map((data) => {
                        return <div key={data.id} className="platforms--Card">
                            <div>
                                <img src={`${data.image_background}`} />
                                <Link id={data.id} className="platforms__title" to={`/games/${data.id}`}>{data.name}</Link>
                            </div>
                            <div className="bottom--card">
                                <h3 className="popular--games--platform">Popular Games</h3>
                                <Link key={data.games[0].id} className='games--link' to={`/games/${data.games[0].id}`}>{data.games[0].name}</Link>
                                <Link key={data.games[1].id} className='games--link' to={`/games/${data.games[1].id}`}>{data.games[1].name}</Link>
                                <Link key={data.games[2].id} className='games--link' to={`/games/${data.games[2].id}`}>{data.games[2].name}</Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        )
    }

}

export default Platforms;