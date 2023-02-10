import "./index.scss";

export const objTextStatus = [
    { text1: "Не обработан" },
    { text1: "Обработан" },
    { text1: "Завршен", }
];

const ChooseOrderComponent = ({ bgColor = "#F4F6FC", status }) => {

    return (
        <div className="choose-order" style={{ backgroundColor: bgColor }}>
            {objTextStatus.map(item => (
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