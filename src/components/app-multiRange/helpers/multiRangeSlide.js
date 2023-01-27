import { useState, useRef, useCallback, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "../index.scss";

const MultiRangeSlideComponent = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // convert to percentage
    const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // set width of the range to descrese from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;

            }
        }
    }, [minVal, getPercent]);

    //set width oft he range descrese from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);


    return (
        <div className="price-range">
            <input type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(e) => {
                    const v = Math.min(+e.target.value, maxVal - 1);
                    setMinVal(v);
                    e.target.value = v.toString();
                }}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": minVal > max - 100
                })} />

            <input type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(e) => {
                    const v = Math.max(+e.target.value, minVal + 1);
                    setMaxVal(v);
                    e.target.value = v.toString();
                }}
                className="thumb thumb--zindex-4" />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value">от {minVal} ₸</div>
                <div className="slider__right-value">до {maxVal} ₸</div>
            </div>
        </div>
    );
}

MultiRangeSlideComponent.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MultiRangeSlideComponent;