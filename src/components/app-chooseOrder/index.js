import "./index.scss";

const objText = [
    { text1: "Не обработан" },
    { text1: "Обработан" },
    { text1: "Завршен", }
];

const ChooseOrderComponent = ({ bgColor = "#F4F6FC", status }) => {
    return (
        <div className="choose-order" style={{ backgroundColor: bgColor }}>
            {objText.map(item => (
                status !== item.text1 ?
                    <p key={item.text1} className="choose-order__text">
                        {item.text1}
                    </p>
                    : null
            ))}
        </div>
    );
}

export default ChooseOrderComponent;