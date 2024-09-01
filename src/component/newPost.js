import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        address: "",
        city: "",
        bedroom: "",
        bathroom: "",
        latitude: "",
        longitude: "",
        type: "rent", // Assuming default value is "rent"
        property: "apartment", // Assuming default value is "apartment"
        utilities: "owner", // Assuming default value is "owner"
        pet: "allowed", // Assuming default value is "allowed"
        income: "",
        size: "",
        school: "",
        bus: "",
        restaurant: "",
        // Add more form fields as needed
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send form data to backend API
        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // Redirect to property page after successful submission
            if (response.ok) {
                navigate("/property/apartment");
            } else {
                // Handle error
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bedroom">Bedroom Number</label>
                    <input
                        type="number"
                        id="bedroom"
                        name="bedroom"
                        value={formData.bedroom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bathroom">Bathroom Number</label>
                    <input
                        type="number"
                        id="bathroom"
                        name="bathroom"
                        value={formData.bathroom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="rent">Rent</option>
                        <option value="buy">Buy</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property">Property</label>
                    <select
                        id="property"
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        required
                    >
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="utilities">Utilities Policy</label>
                    <select
                        id="utilities"
                        name="utilities"
                        value={formData.utilities}
                        onChange={handleChange}
                        required
                    >
                        <option value="owner">Owner is responsible</option>
                        <option value="tenant">Tenant is responsible</option>
                        <option value="shared">Shared</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pet">Pet Policy</label>
                    <select
                        id="pet"
                        name="pet"
                        value={formData.pet}
                        onChange={handleChange}
                        required
                    >
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="income">Income Policy</label>
                    <input
                        type="text"
                        id="income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="size">Total Size (sqft)</label>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="school">School</label>
                    <input
                        type="number"
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bus">Bus</label>
                    <input
                        type="number"
                        id="bus"
                        name="bus"
                        value={formData.bus}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant</label>
                    <input
                        type="number"
                        id="restaurant"
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewPostPage;
