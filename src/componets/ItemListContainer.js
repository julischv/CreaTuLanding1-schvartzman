// src/components/ItemListContainer.js

const ItemListContainer = ({ welcomeMessage }) => {
    return (
        <div className="container my-5">
            <h1>{welcomeMessage}</h1>
            <p>Descubre nuestra amplia selección de productos de tecnología con los mejores precios del mercado.</p>
        </div>
    );
};

export default ItemListContainer;

