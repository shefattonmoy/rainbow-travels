import '../../Styles/ServicesCard.css';

const ServicesCard = ({item}) => {
    const {imageURL, title, description} = item;
    return (
        <div className='services-item'>
            <div className="services-image">
                <img src={imageURL} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ServicesCard;