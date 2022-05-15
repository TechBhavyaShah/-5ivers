import { Link } from "react-router-dom";

function FoodItemCard({ data }) {
    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={data.item_image}
                    className="card-img-top"
                    alt={data.name}
                    onError={(event) =>
                        (event.target.src = "/no-food-item.png")
                    }
                />
                <div className="card-body">
                    <p className="card-title fs-5">{data.name}</p>
                    <p className="card-text">{data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Cuisines: </strong>
                        {data.cuisines}
                    </li>
                    <li className="list-group-item text-capitalize">
                        <strong>Type: </strong>
                        {data.type}
                    </li>
                    <li className="list-group-item">
                        <strong>Price: </strong>${data.price}
                    </li>
                    <li className="list-group-item">
                        <strong>Stock: </strong>
                        {data.stock}
                    </li>
                    <li className="list-group-item text-center">
                        <Link
                            className="btn btn-primary"
                            to={`/admin/restaurant/foodItem/Edit/${data.item_id}`}
                        >
                            Edit
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FoodItemCard;
