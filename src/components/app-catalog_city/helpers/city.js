const TopCityComponent = ({ data }) => {
    return (
        <div className="city-top">
            <p className="text text-cityName">{data.cityName}</p>

            <div className="presentationInfo">
                <div className="filler">
                    <div className="progressInfo" style={{ width: `${data.progressInfo}%` }} />
                </div>
                <p className="procentInfo">{data.progressInfo}%</p>
            </div>
        </div>
    );
}

export default TopCityComponent;