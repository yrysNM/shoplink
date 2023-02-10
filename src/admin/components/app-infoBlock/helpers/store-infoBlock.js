const LayoutStoreInfoBlockComponent = ({ data }) => {
    return (
        <div className="data-block">
            <div className="profileIcon" style={JSON.parse(data.borderColor)}>
                <img src={data.icon} alt="icon store" />
            </div>
            <div className="infoData">
                <span className="text text-infoCount">
                    {data.information}
                </span>

                <span className="text text-subInfoCount">
                    {data.text}
                </span>
            </div>

        </div >
    );
}

export default LayoutStoreInfoBlockComponent;