const ListCatalogComponent = ({ data, plusIcon }) => {
    return (
        <div className="catalogList">
            {data ??
                <>
                    <div className="catalogList-block">
                        <img src={plusIcon} alt="plus icon" />
                        <span className="text-add">Добавить</span>
                    </div>

                    <div className="catalogList-block" />

                    <div className="catalogList-block" />
                </>
            }
        </div >
    );
}

export default ListCatalogComponent;