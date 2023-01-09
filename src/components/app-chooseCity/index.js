import "./index.scss";

export const objTextCity = [
    { text1: "Almaty" },
    { text1: "Astana" },
    { text1: "Taraz", },
];

const ChooseCityComponent = () => {
    return (
        <div className="choose-city">
            {objTextCity.map(item => (
                <p key={item.text1} className="choose-city__text">
                    {item.text1}
                </p>
            ))}
        </div>
    );
}

export default ChooseCityComponent;