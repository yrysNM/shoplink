import { Link } from "react-router-dom";
import defaultIcon from "../../resources/img/DefaultImg.svg";
import "./index.scss";

const DefaultScreenComponent = ({ titleDefault = "", btn, descr, color = '#252728' }) => {
    return (
        <div className="default">
            <img src={defaultIcon} alt="default icon" />
            <div className="warningtext">
                {titleDefault.length > 1 &&
                    <h3 className="defaultTitle" style={{ color: color }}>{titleDefault}</h3>
                }
                <p className="descr">{descr}</p>

                <div className="btn" style={{ marginTop: 40 }}>
                    {btn ? <Link to={"/catalog/add"}>
                        <button className="addGds" >{btn}</button>
                    </Link>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default DefaultScreenComponent;