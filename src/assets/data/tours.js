import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "London, SW1A 2JR, United Kingdom",
    price: 99,
    maxGroupSize: 10,
    description: "Westminster Bridge is an iconic structure in central London, spanning the River Thames with its elegant, cast-iron arches adorned with ornate balustrades and decorative lamps. Its distinctive green color is instantly recognizable. The bridge connects Westminster on the west side with Lambeth on the east, providing breathtaking views of some of London's most famous landmarks.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "John Doe",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: "Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    description: "Bali, Indonesia, is a paradise island renowned for its natural beauty, cultural richness, and vibrant tourism. Located in Southeast Asia, Bali boasts stunning beaches with crystal-clear waters, lush rice terraces, and dense tropical forests. The island is steeped in Balinese Hindu culture, with intricate temples and colorful ceremonies that add to its charm.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Australia",
    city: "Australia",
    distance: 500,
    address: "Southeastern Australia",
    price: 99,
    maxGroupSize: 8,
    description: "The Snowy Mountains are also famous for the Snowy Mountains Scheme, a massive hydroelectricity and irrigation project, one of the engineering marvels of Australia. This scheme involves a network of dams, tunnels, and power stations built to harness the region's water resources. Beyond its engineering feats, the Snowy Mountains offer a captivating blend of natural beauty and outdoor adventure, making it a popular attraction for both Australians and international travelers.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "City Center, Surat Thani, Thailand",
    price: 99,
    maxGroupSize: 8,
    description: "Thailand boasts some of the world's most stunning sunrises, painting its diverse landscapes with breathtaking colors. On the eastern coast, the Gulf of Thailand reveals captivating sunrise vistas in places like Hua Hin and Pattaya, where the sun emerges from the horizon over the calm waters, creating a serene and reflective ambiance. As the sun's first rays break through the misty valleys, they illuminate the lush forests and temple pagodas, creating a mystical atmosphere.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Penida Island, Indonesia",
    price: 99,
    maxGroupSize: 8,
    description: "Nusa Penida is a captivating island paradise located just a short boat ride from Bali, Indonesia. Known for its rugged cliffs, crystal-clear waters, and unspoiled natural beauty, it's a popular destination for travelers seeking a more tranquil and authentic experience. The island offers mesmerizing viewpoints like Kelingking Beach and Angel's Billabong, showcasing dramatic coastal landscapes and vibrant marine life for snorkeling and diving enthusiasts.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "China",
    distance: 500,
    address: "Shanghai",
    price: 99,
    maxGroupSize: 8,
    description: "Cherry blossoms in springtime are a delightful sight in Shanghai, China. These beautiful, delicate pink and white blossoms typically bloom in various parks and gardens throughout the city, heralding the arrival of spring and symbolizing renewal and new beginnings. Visitors can enjoy leisurely strolls under the flowering trees, take photographs, and immerse themselves in the serene and picturesque atmosphere.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "Norway",
    distance: 500,
    address: "Flathaugen 36, 8392 Sørvågen, Norway",
    price: 99,
    maxGroupSize: 8,
    description: "Holmen Lofoten is a picturesque island resort situated in the stunning Lofoten archipelago of Norway. This extraordinary destination is known for its breathtaking natural beauty and provides a unique blend of luxury and wilderness. Holmen Lofoten immerses visitors in the natural wonders of the Arctic Circle, with opportunities for activities like fishing, kayaking, hiking, and wildlife watching. The midnight sun in summer and the Northern Lights in winter make it a year-round attraction.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Australia",
    city: "Australia",
    distance: 500,
    address: "Southeastern Australia",
    price: 99,
    maxGroupSize: 8,
    description: "The Snowy Mountains are also famous for the Snowy Mountains Scheme, a massive hydroelectricity and irrigation project, one of the engineering marvels of Australia. This scheme involves a network of dams, tunnels, and power stations built to harness the region's water resources. Beyond its engineering feats, the Snowy Mountains offer a captivating blend of natural beauty and outdoor adventure, making it a popular attraction for both Australians and international travelers.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
