import "./ServiceCard.css"

const ServiceCard = ({room}) => {       
    return (
        <div className="card">
            <img className="card__image" src="/image/image-card.jpeg" alt="" />          
            <div className="card__body">
                <h3 className="card__body__title">{room.title}<sub></sub></h3>
                <h4 className="card__body__subTitle">Descripción de habitación</h4>
                <p className="card__body__description">{room.description}</p>
                <p className="card__body__addres"><i className="fas fa-map-marker-alt"></i> {`${room.address.street} - ${room.address.city} - ${room.address.province} - ${room.address.country}`}</p>
                <p className="card__body__price"><i className="fas fa-dollar-sign"></i> {room.price}</p>
                <div className="card__body__footer">
                    <button className="card__body__footer__button card__body__footer__button--booking">Lista de Deseos</button>
                    <a href="www.google.com"><button className="card__body__footer__button">Reservar</button></a>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;

