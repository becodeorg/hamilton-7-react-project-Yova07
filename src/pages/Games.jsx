import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Games = ({ getPlatforms, getResponse }) => {


    const navigate = useNavigate();
    const params = useParams();
    console.log(params.platform)
    const [gameName, setGameName] = useState('');
    console.log(gameName);

    const navHandler = (e) => {
        navigate(e.target.value);
        console.log(e.target.textContent);
    }


    if (getResponse === false) {
        return <div className="loading"></div>
    }
    else {
        return (
            <div className="games">
                <h1 className="platform-title">Games</h1>
                <select className="game--filter" onChange={navHandler}>
                    {getPlatforms.map((el, index) => {
                        return <option key={el.id} value={el.id} >{el.name}</option>
                    })}
                </select>
                <Outlet />
            </div>
        )
    }

}

export default Games;