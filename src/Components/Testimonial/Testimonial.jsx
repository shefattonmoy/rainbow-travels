import Slider from 'react-slick';
import ava1 from '../../assets/images/ava-1.jpg';
import ava2 from '../../assets/images/ava-2.jpg';
import ava3 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>I've traveled with various agencies, but none compare to Rainbow Travels. Their personalized experiences truly set them apart. Our adventure was not just a vacation; it was an immersion into the culture and beauty of our destination. I can't wait to book my next trip with them!</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Mark Andreas</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Wow! What an incredible journey with Rainbow Travels. The attention to detail in planning our trip was outstanding. Every moment felt like a unique experience, from savoring local delicacies to exploring hidden gems. Thank you for creating memories that will last a lifetime!</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Sarah Jessie</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Exceptional service from start to finish. Rainbow Travels made our dream vacation a reality. Their knowledge and expertise ensured we made the most of our time abroad. The experiences they curated were extraordinary. Highly recommend!</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava3} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Robert Quest</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our family had an amazing time with [Your Travel Company Name]. The trip was well-organized, and we felt safe and comfortable throughout. The only reason for not giving five stars was a minor hiccup with airport transfers. However, the overall experience was fantastic.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Jason Paige</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our honeymoon with Rainbow Travels was beyond our wildest dreams. The romantic getaways, surprise treats, and impeccable service made it truly special. We're forever grateful for the memories they helped us create. Highly recommended for all lovebirds</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Emily Parker</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>I can't express how grateful I am to Rainbow Travels for an unforgettable adventure. Their commitment to creating unique experiences truly shines. From sunrise hikes to private cultural tours, every day was a new delight. I've found my go-to travel partner!</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava3} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Peter Jensen</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
};

export default Testimonial;