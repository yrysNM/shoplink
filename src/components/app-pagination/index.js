import "./index.scss";

const PaginationComponent = () => {
    return (
        <div className="pagination">
            <div className="paginationNumber paginationNumber__active">1</div>
            <div className="paginationNumber">2</div>
            <div className="paginationNumber">3</div>
            <div className="paginationNumber">4</div>
            <div className="paginationNumber">5</div>
            <div className="paginationNumber">6</div>
        </div>
    );
}

export default PaginationComponent;