function CardItem({ image, name, price, description }) {
  return (
    <div>
      <div className="gameImage" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="otstup">
        <h1 className="cardText">{name}</h1>
        <p className="disc">{description}</p>
        <p className="price">{`${price}$`}</p>
      </div>
    </div>
  );
}
export default CardItem;
