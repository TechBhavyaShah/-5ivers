function PastOrderItem({ data }) {
  return (
    <div className="d-flex text-muted pt-4">
      <img
        src={data.image}
        className="cart-item-image mb-3"
        alt={data.name}
        onError={(event) => (event.target.src = "/no-food-item.png")}
      />

      <div className="pb-3 mb-0 small lh-sm border-bottom w-100 ps-3">
        <div className="d-flex justify-content-center">
          <strong className="text-gray-dark d-block">{data.name}</strong>
        </div>
        <span className="d-block">Restaurant: {data.restaurant}</span>
        <span className="d-block text-capitalize">Type: {data.type}</span>
        <span className="d-block pt-2">
          Price: {data.price}
          <br />
          Quantity: {data.quantity}
        </span>
      </div>
    </div>
  );
}

export default PastOrderItem;
