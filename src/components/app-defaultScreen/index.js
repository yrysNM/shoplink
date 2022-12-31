import defaultIcon from "../../resources/img/DefaultImg.svg";
import "./index.scss";

const DefaultScreenComponent = ({ titleDefault, btn, descr, color = '#252728' }) => {
    return (
        <div className="default">
            <img src={defaultIcon} alt="default icon" />
            <div className="warningtext">

                <h3 className="defaultTitle" style={{ color: color }}>{titleDefault}</h3>
                <p className="descr">{descr}</p>

                <div className="btn">
                    {btn ? <button className="addGds" style={{ marginTop: 40 }}>{btn}</button> : null}
                </div>
            </div>
        </div>
    );
}

export default DefaultScreenComponent;