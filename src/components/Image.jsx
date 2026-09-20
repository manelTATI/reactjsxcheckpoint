import product from "./Product.jsx";

function Image() {
    return (
        <img
        src={product.image}
        alt={product.name}
        style={{
            width: "100%",
            height: "250px",
            objectFit: "cover"
        }}
        />
    );
    }

export default Image;