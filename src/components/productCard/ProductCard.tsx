import headphones from "../../assets/image 2.jpg";
import "./productCard.scss";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card_body">
        <div className="card_body_img">
          <img src={headphones} alt="headphones" />
        </div> 
        <div className="card_body_content">
          <p className="card_body_content_price">$100</p>
          <h1 className="card_body_content_title">Zebronics head phone</h1>
          <p className="card_body_content_description">
            A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.
          </p>
          <p className="card_body_content_color-selection">Choose your colour</p>
          <div className="card_body_content_color-selection-button">
            <div className="card_body_content_color-selection-button_item button-color-red button-color-active">
              <button ></button>
            </div>
            <div className="card_body_content_color-selection-button_item button-color-blue">
              <button></button>
            </div>
            <div className="card_body_content_color-selection-button_item button-color-black">
              <button></button>
            </div>
          </div>
          <button className="card_body_content_add-to-cart">Add to cart</button>
          <button className="card_body_content_buy-now">Buy now</button>
          <a href="#" className="card_body_content_read-reviews">Read reviews</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;