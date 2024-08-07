import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Fruits & Vegetables",
    quantity: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("quantity", data.quantity);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
        quantity: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category flex-col">
          <p>Product category</p>
          <select onChange={onChangeHandler} name="category">
            <option value="Fruits & Vegetables">Fruits & Vegetables</option>
            <option value="Dairy & Breakfast">Dairy & Breakfast</option>
            <option value="Munchies">Munchies</option>
            <option value="Cool Drinks & Juices">Cool Drinks & Juices</option>
            <option value="Instant & Frozen Food">Instant & Frozen Food</option>
            <option value="Tea, Coffee & Health Drinks">
              Tea, Coffee & Health Drinks
            </option>
            <option value="Bakery & Biscuits">Bakery & Biscuits</option>
            <option value="Sweet Tooth">Sweet Tooth</option>
            <option value="Atta, Rice & Dal">Atta, Rice & Dal</option>
            <option value="Dry Fruits, Masala and Oil">
              Dry Fruits, Masala and Oil
            </option>
            <option value="Sauces & Spreads">Sauces & Spreads</option>
            <option value="Chicken, Meat & Fish">Chicken, Meat & Fish</option>
            <option value="Paan Corner">Paan Corner</option>
            <option value="Organic & Premium">Organic & Premium</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Pharma & Wellness">Pharma & Wellness</option>
            <option value="Cleaning Essentials">Cleaning Essentials</option>
            <option value="Home & Office">Home & Office</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Pet Care">Pet Care</option>
          </select>
        </div>
        <div className="add-category-price">
          {/* <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Fruits & Vegetables">Fruits & Vegetables</option>
              <option value="Dairy & Breakfast">Dairy & Breakfast</option>
              <option value="Munchies">Munchies</option>
              <option value="Cool Drinks & Juices">Cool Drinks & Juices</option>
              <option value="Instant & Frozen Food">
                Instant & Frozen Food
              </option>
              <option value="Tea, Coffee & Health Drinks">
                Tea, Coffee & Health Drinks
              </option>
              <option value="Bakery & Biscuits">Bakery & Biscuits</option>
              <option value="Sweet Tooth">Sweet Tooth</option>
              <option value="Atta, Rice & Dal">Atta, Rice & Dal</option>
              <option value="Dry Fruits, Masala and Oil">
                Dry Fruits, Masala and Oil
              </option>
              <option value="Sauces & Spreads">Sauces & Spreads</option>
              <option value="Chicken, Meat & Fish">Chicken, Meat & Fish</option>
              <option value="Paan Corner">Paan Corner</option>
              <option value="Organic & Premium">Organic & Premium</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Pharma & Wellness">Pharma & Wellness</option>
              <option value="Cleaning Essentials">Cleaning Essentials</option>
              <option value="Home & Office">Home & Office</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Pet Care">Pet Care</option>
            </select>
          </div> */}
          <div className="add-price flex-col">
            <p>Product Quantity</p>
            <input
              onChange={onChangeHandler}
              value={data.quantity}
              type="Number"
              name="quantity"
              placeholder="1"
            />
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹50"
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
