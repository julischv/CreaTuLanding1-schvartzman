// src/components/CartWidget.js

const CartWidget = () => {
    return (
        <button className="btn btn-outline-primary">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge bg-danger">0</span>
        </button>
    );
};

export default CartWidget;

