import { useState, useRef } from "react"


const setCursorPosition = (pos, element) => {
    element?.current.focus();
    element.current.style = "color: #252728";

    if (element.setSelectionRage) {
        element.setSelectionRage(pos, pos);
    } else if (element.createTextRange) {
        let range = element.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

const InputUrlMaskComponent = ({ data }) => {
    const [urlSite, setUrlSite] = useState("");
    const inputRef = useRef(null);


    const handleChange = (e) => {
        let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?\balatau.cc\b/g;
        const regex = new RegExp(expression);
        let pos = e.target.setSelectionStart;

        if (pos < 18) e.preventDefault();

        let value = e.target.value;
        let matrix = 'https://alatau.cc/',
            i = 0,
            def = matrix.replace(regex, ""),
            val = value.replace(regex, "");

        console.log(val, def);
        if (def.length >= val.length) {
            val = def;
        }
        // mask ыстегым келген но ошибка осы жерде 
        value = matrix.replace(/./g, (a) => {
            return i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });

        if (e.type === "blur") {
            inputRef.current.style = " color: rgba(0, 0, 0, 0);";
            if (value.length === 2) {
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
                <div className={`iconform ${data.price ? "priceIcon" : ""}`}>
                    {data.iconComponent}
                </div>
                <input
                    type={"text"}
                    value={urlSite}
                    ref={inputRef}
                    onChange={handleChange}
                    onFocus={handleChange}
                    onBlur={handleChange}
                    onKeyDown={handleChange}
                    className={`form-input ${data.price ? "form-priceInput" : ""}`}
                    name={data.inputName}
                    placeholder={data?.placeholder} />

                {/* {data.helperPl
                    ? <div className="helperPlaceholder">{data.helperPl}<span className="stylePl">{urlSite?.length ? urlSite : data.span}</span></div>
                    : null
                } */}
            </div>
        </div >
    );
}

export default InputUrlMaskComponent;