import pg120 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG120.jpeg";
import pg121 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG121.jpeg";
import pg122 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG122.jpeg";

import sg100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-SG100.jpeg";

import pk100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK100.jpeg";
import pk101 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK101.jpeg";
import pk102 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK102.jpeg";

const homePageItemsData = [
  {
    displayImage: pg120,
    collectionImages: [pg120, pg121, pg122],
    title: 'image',
    text: 'Aqua Blue Mashru Silk Silver Zari Brocade Weaved Banarasi Saree',
    price: '₹ 14,999',
    productId: 'PG-12',
    returnAvailableDays: 0,
    deliveryCharges: 0,
  },
  {
    displayImage: sg100,
    collectionImages: [sg100],
    title: 'image',
    text: 'Sea Green Colored, Pure Handwoven Banaras Silk Saree',
    price: '₹ 9,999',
    productId: 'VM-123',
    returnAvailableDays: 15,
    deliveryCharges: 50,
  },
  {
    displayImage: pk100,
    collectionImages: [pk100, pk101, pk102],
    title: 'image',
    text: 'Lilac Mashru Silk Silver Zari Brocade Weaved Banarasi Saree',
    price: '₹ 14,999',
    productId: 'VM-123',
    returnAvailableDays: 20,
    deliveryCharges: 100,
  },
];

const customerReviews = [
  {
    name: 'Chirra Divya Reddy',
    location: 'Hastinapuram, Hyderabad',
    review: 'The saree exudes unparalleled quality, evident in its fine craftsmanship and luxurious fabric. Each intricate detail reflects the commitment to excellence, ensuring a garment that epitomizes elegance and sophistication.',
  },
  {
    name: 'Vinitha Arra',
    location: 'Rocktown, Hyderabad',
    review: 'This saree is top-notch in quality, made with great care and using the finest materials. It looks stunning and feels amazing when worn, adding a touch of class to any event.',
  },
  {
    name: 'Vijaya Chirra',
    location: 'Amberpet, Hyderabad',
    review: 'Absolutely adore this saree! The craftsmanship is simply divine, making it an irresistible addition to my collection.',
  },
  {
    name: 'Sruthi Reddy',
    location: 'Amberpet, Hyderabad',
    review: 'This saree is an absolute gem! The lavish design at such a reasonable price makes it a must-have in any wardrobe.',
  },
];

export { homePageItemsData, customerReviews };