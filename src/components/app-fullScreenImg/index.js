import "./index.scss";

const FullScreenImgComponent = ({ imgUrl }) => {
    return (
        <div className="fullScreenImg">
            <img src={imgUrl} alt="full screen" />
        </div>
    );
}


export default FullScreenImgComponent;