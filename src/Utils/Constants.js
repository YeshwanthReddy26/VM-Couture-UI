import pg120 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG120.jpeg";
import pg121 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG121.jpeg";
import pg122 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PG122.jpeg";

import sg100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-SG100.jpeg";

import pk100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK100.jpeg";
import pk101 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK101.jpeg";
import pk102 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK102.jpeg";
import pk103 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PK103.jpeg";

import br100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR100.jpeg";
import br101 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR101.jpeg";
import br102 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR102.jpeg";
import br103 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR103.jpeg";
import br104 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR104.jpeg";
import br105 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-BR105.jpeg";

import pp100 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PP100.jpeg";
import pp101 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/SareePics/VM-PP101.jpeg";

const homePageItemsData = [
  {
    displayImage: pg120,
    collectionImages: [pg120, pg121, pg122],
    title: 'image',
    text: 'Aqua Blue Mashru Silk Silver Zari Brocade Weaved Banarasi Saree',
    price: '₹ 14,999',
    productId: '9a1ee426-535a-44a5-b591-a25404a20594',
    returnAvailableDays: 0,
    deliveryCharges: 0,
    seller: 'VM Couture',
  },
  {
    displayImage: sg100,
    collectionImages: [sg100],
    title: 'image',
    text: 'Sea Green Colored, Pure Handwoven Banaras Silk Saree',
    price: '₹ 9,999',
    productId: '34a4bc99-9c06-4003-861c-165cda796a15',
    returnAvailableDays: 15,
    deliveryCharges: 50,
    seller: 'Kalamandir',
  },
  {
    displayImage: pk100,
    collectionImages: [pk100, pk101, pk102, pk103],
    title: 'image',
    text: 'Lilac Mashru Silk Silver Zari Brocade Weaved Banarasi Saree',
    price: '₹ 14,999',
    productId: '2d2819b9-c985-4489-a807-f87cc4533535',
    returnAvailableDays: 10,
    deliveryCharges: 200,
    seller: 'VM Couture',
  },
  {
    displayImage: br100,
    collectionImages: [br100, br101, br102, br103, br104, br105],
    title: 'image',
    text: 'Red and Blue Silk Combo Sarees',
    price: '₹ 29,999',
    productId: 'a0661eeb-957b-4964-8775-3d7609bb1193',
    returnAvailableDays: 10,
    deliveryCharges: 200,
    seller: 'Kalamandir',
  },
  {
    displayImage: pp101,
    collectionImages: [pp101, pp100],
    title: 'image',
    text: 'Purple Striped Zari Weaved Banarasi Saree',
    price: '₹ 14,999',
    productId: 'a505a52b-c064-431f-9e41-5127393759e5',
    returnAvailableDays: 10,
    deliveryCharges: 200,
    seller: 'VM Couture',
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

const sellerDetails = [
  {
    name: 'VM Couture',
    description: 'We at VM Couture exude unparalleled quality, evident in its fine craftsmanship and luxurious fabric. Each intricate detail reflects the commitment to excellence, ensuring a garment that epitomizes elegance and sophistication.',
  },
  {
    name: 'Kalamandir',
    description: 'We at Kalamandir ensure top-notch in quality, made with great care and using the finest materials. It looks stunning and feels amazing when worn, adding a touch of class to any event.',
  },
];

const userDetails = {
  "id": "1234",
  "email": "buntyyeshwanth123@gmail.com",
  "mobileNumber": "8688026814",
  "password": "8688026814",
  "address": [
    {
      "locality": "SAS Towers",
      "street": "Hastinapuram",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500079",
      "country": "India"
    },
    {
      "locality": "Lavanya residency",
      "street": "Sai ram nagar colony",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500060",
      "country": "India"
    }
  ],
  "cartProducts": [
    {
      "id": "123",
      "name": "Aqua Blue Mashru Silk Silver Zari Brocade Weaved Banarasi Saree",
      "quantity": "1",
      "imageUrl": pg120,
      "price": "14999"
    },
    {
      "id": "234",
      "name": "Sea Green Colored, Pure Handwoven Banaras Silk Saree",
      "quantity": "1",
      "imageUrl": sg100,
      "price": "9999"
    },
    {
      "id": "345",
      "name": "Lilac Mashru Silk Silver Zari Brocade Weaved Banarasi Saree",
      "quantity": "1",
      "imageUrl": pk100,
      "price": "14999"
    }
  ]
}

export { homePageItemsData, customerReviews, sellerDetails, userDetails };