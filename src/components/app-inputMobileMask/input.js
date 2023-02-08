import { useState, useRef } from "react"

export const setCursorPosition = (pos, element) => {
    element?.current.focus();

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



const InputMobileMaskComponent = ({ data }) => {
    const [mobilePhone, setMobilePhone] = useState("");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        let value = e.target.value;
        let pos = e.target.selectionStart;
        if (pos < 2) { e.preventDefault(); }
        let matrix = "+7 (xxx) xxx xx xx",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = value.replace(/\D/g, "");
        // new_value = matrix.replace(/[x\d]/g, function (b) {
        //     return i < val.length ? val.charAt(i++) || def.charAt(i) : b;
        // });

        // console.log(inputRef.current.selectionStart);
        if (def.length >= val.length) {
            val = def;
        }

        value = matrix.replace(/./g, function (a) {
            return /[x\d]/.test(a) && i < val.length
                ? val.charAt(i++) : i >= val.length
                    ? ""
                    : a;
        });

        if (e.type === "blur") {
            if (value.length === 2) {
                value = "";
            }
        } else {
            setCursorPosition(value.length, inputRef);
        }


        setMobilePhone(value);
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
                    type="tel"
                    ref={inputRef}
                    value={mobilePhone}
                    onChange={handleChange}
                    onFocus={handleChange}
                    onBlur={handleChange}
                    onKeyDown={handleChange}
                    className={`form-input ${data.price ? "form-priceInput" : ""}`}
                    name={"mobile phone number"}
                    placeholder={data?.placeholder} />
            </div>
        </div>
    );
}


export default InputMobileMaskComponent;