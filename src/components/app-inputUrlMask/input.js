import { useState, useRef } from "react"

import { setCursorPosition } from "../app-inputMobileMask/input";

const InputUrlMaskComponent = ({ data }) => {
    const [urlSite, setUrlSite] = useState("");
    const inputRef = useRef(null);


    const handleChange = (e) => {
        let value = e.target.value;
        let matrix = 'https://alatau.cc/';

        if (e.type === "blur") {
            if (value.length === matrix.length) {
                value = "";
            }
        } else {
            setCursorPosition(value.length, inputRef);
        }

        setUrlSite(value);
    }

    return (
        <div className="form-info">
            {data.title
                ?
                <p className="text-formTitle">
                    {data.title}
                </p>
                : null
            }

            <div className="form-input__block">
                <div className={`iconform ${data.price ? "priceIcon" : ""}`} style={{ bottom: 6 }}>
                    {data.iconComponent}
                </div>
                <input
                    type={urlSite}
                    ref={inputRef}
                    onChange={handleChange}
                    onFocus={handleChange}
                    onBlur={handleChange}
                    className={`form-input ${data.price ? "form-priceInput" : ""}`}
                    name={data.inputName}
                    placeholder={data?.placeholder} />

                {data.helperPl
                    ? <div className="helperPlaceholder">{data.helperPl}<span className="stylePl">{urlSite}</span></div>
                    : null
                }
            </div>
        </div >
    );
}

export default InputUrlMaskComponent;