import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function FoodItemAdd() {
    const restaurant = useSelector((state) => state.restaurant);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const accessToken = localStorage.getItem("accessToken");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [cuisines, setCuisines] = useState("");
    const [stock, setStock] = useState(0);
    const [type, setType] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit() {
        let errors = "";

        if (name.trim().length < 1) {
            errors += ` Name is required.`;
        }

        if (description.trim().length < 1) {
            errors += ` Description is required.`;
        }

        if (price.length < 1) {
            errors += ` Price is required.`;
        }

        if (!isNumberValid(price)) {
            errors += ` Price should be non negative number.`;
        }

        if (cuisines.trim().length < 1) {
            errors += ` Cuisines is required.`;
        }

        if (type.length < 1) {
            errors += ` Type is required.`;
        }

        if (stock.length < 1) {
            errors += ` Stock is required.`;
        }

        if (!isNumberValidInteger(stock)) {
            errors += ` Stock should be non negative integer.`;
        }

        if (!image) {
            errors += ` Image is required.`;
        }

        if (
            image &&
            !["image/jpeg", "image/jpg", "image/png"].includes(image.type)
        ) {
            errors += ` Only .png, .jgp, .jpeg images allowed.`;
        }

        if (errors.trim().length > 0) {
            setError(errors);
            setIsError(true);
            return false;
        }

        addFoodItem();
    }

    function isNumberValidInteger(_number) {
        const number = Number(_number);

        return isNaN(number) || number < 0 || !Number.isInteger(number)
            ? false
            : true;
    }

    function isNumberValid(_number) {
        const number = Number(_number);

        return isNaN(number) || number < 0 ? false : true;
    }

    async function addFoodItem() {
        const postData = {
            name,
            description,
            price,
            cuisines,
            stock,
            type,
            image,
        };

        try {
            const { data } = await axios.post(
                `http://localhost:3001/restaurants/foodItems/${restaurant.id}`,
                postData,
                {
                    headers: {
                        accessToken: accessToken,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (data && data.success) {
                window.location.href = "http://localhost:3000/admin/restaurant";
            }

            setError(null);
            setIsError(false);
        } catch (error) {
            setError(
                error.response?.data?.error || "Error: Internal Server Error."
            );
            setIsError(true);
        }
    }

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.response.status === 401 ||
                error.response.status === 403
            ) {
                window.location.href = "http://localhost:3000/admin/restaurant";
            }
        }
    );

    return (
        <div className="container text-center mt-5 w-50">
            <div className="card text-start">
                <div className="card-body">
                    <p className="card-title fs-5 mb-4 text-center">
                        Add new food item
                    </p>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name<span className="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter food item name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description<span className="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Enter food item description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Price<span className="mandatory">*</span>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Enter food item price"
                            value={price}
                            onChange={(event) =>
                                setPrice(event.target.value.trim())
                            }
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cuisines" className="form-label">
                            Cuisines<span className="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cuisines"
                            placeholder="Enter food item cuisines"
                            value={cuisines}
                            onChange={(event) =>
                                setCuisines(event.target.value)
                            }
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">
                            Stock<span className="mandatory">*</span>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="stock"
                            placeholder="Enter food item stock"
                            value={stock}
                            onChange={(event) =>
                                setStock(event.target.value.trim())
                            }
                            autoComplete="off"
                        />
                    </div>

                    <label className="form-label" htmlFor="type">
                        Type<span className="mandatory">*</span>
                    </label>
                    <div className="input-group mb-3">
                        <select
                            className="form-select"
                            id="type"
                            onChange={(event) =>
                                setType(event.target.value.trim())
                            }
                        >
                            <option defaultValue="">Select Food Type</option>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                            <option value="vegan">Vegan</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Image<span className="mandatory">*</span>
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="image"
                            placeholder="Enter food item image"
                            onChange={(event) =>
                                setImage(event.target.files[0])
                            }
                        />
                        <span className="form-text">
                            Only .png, .jgp, .jpeg images allowed
                        </span>
                    </div>

                    {isError && (
                        <p className="text-danger text-center">{error}</p>
                    )}

                    <p className="text-center">
                        <Button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </p>
                </div>
            </div>
            <p className="text-center mt-4">
                <Link
                    className="btn btn-secondary btn-sm"
                    to={`/admin/restaurant`}
                >
                    Go Back
                </Link>
            </p>
        </div>
    );
}

export default FoodItemAdd;
