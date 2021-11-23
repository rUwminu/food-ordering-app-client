// Restaurant Img
import MainRo from "../food/r1/mainr1.png";
import MainRt from "../food/r2/mainr2.png";
import MainRr from "../food/r3/mainr3.png";

// Restaurant one recipes
import BeefPC from "../food/r1/beefpancakes.jpg";
import BeefS from "../food/r1/beefschnitzel.jpg";
import Noodles from "../food/r1/noodles.jpg";
import Pasta from "../food/r1/pasta.jpg";
import Taco from "../food/r1/taco.jpg";

// Restaurant three recipes
import Bullet from "../food/r3/bullets.jpeg";
import Pie from "../food/r3/chocolatepie.jpeg";
import Crumble from "../food/r3/crumble.jpeg";
import Malteser from "../food/r3/malteser.jpeg";
import Tart from "../food/r3/tart.jpeg";

export const restaurantData = [
  {
    id: 1,
    image: MainRo,
    name: "YummyChef",
    typeQuisine: ["Chinese", "Non-Halal"],
    state: "Johor",
    location: "Jameta Qualia Street",
    phoneNum: "+607885566",
    openTime: "12:00",
    closeTime: "23:30",
    deliveryTime: 1,
    avgCost: 10,
  },
  {
    id: 2,
    image: MainRt,
    name: "The Beach House",
    typeQuisine: ["Europe", "Non-Halal"],
    state: "Johor",
    location: "Semata Street",
    phoneNum: "+607432555",
    openTime: "11:00",
    closeTime: "22:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 3,
    image: MainRr,
    name: "Salute",
    typeQuisine: ["Desert", "Halal"],
    state: "King Geoger",
    location: "Aglinal Park",
    phoneNum: "+6043225655",
    openTime: "11:00",
    closeTime: "20:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 4,
    image: MainRo,
    name: "Mr Smitch Kitchen",
    typeQuisine: ["Europe", "Halal"],
    state: "Johor",
    location: "Jameta Qualia Street",
    phoneNum: "+607885566",
    openTime: "12:00",
    closeTime: "23:30",
    deliveryTime: 1,
    avgCost: 10,
  },
  {
    id: 5,
    image: MainRt,
    name: "HotShot House",
    typeQuisine: ["Chinese", "Non-Halal"],
    state: "Johor",
    location: "Semata Street",
    phoneNum: "+607432555",
    openTime: "11:00",
    closeTime: "22:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 6,
    image: MainRr,
    name: "Neny Bake",
    typeQuisine: ["Desert", "Non-Halal"],
    state: "King Geoger",
    location: "Aglinal Park",
    phoneNum: "+6043225655",
    openTime: "11:00",
    closeTime: "20:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 7,
    image: MainRo,
    name: "Yoda Secret",
    typeQuisine: ["Europe", "Non-Halal"],
    state: "Johor",
    location: "Jameta Qualia Street",
    phoneNum: "+607885566",
    openTime: "12:00",
    closeTime: "23:30",
    deliveryTime: 1,
    avgCost: 10,
  },
  {
    id: 8,
    image: MainRt,
    name: "Noodle Kitchen",
    typeQuisine: ["Chinese", "Non-Halal"],
    state: "Johor",
    location: "Semata Street",
    phoneNum: "+607432555",
    openTime: "11:00",
    closeTime: "22:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 9,
    image: MainRr,
    name: "Delight Sweet",
    typeQuisine: ["Desert", "Halal"],
    state: "King Geoger",
    location: "Aglinal Park",
    phoneNum: "+6043225655",
    openTime: "11:00",
    closeTime: "20:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 10,
    image: MainRo,
    name: "Uncle Roge Rice House",
    typeQuisine: ["Chinese", "Non-Halal"],
    state: "Johor",
    location: "Jameta Qualia Street",
    phoneNum: "+607885566",
    openTime: "12:00",
    closeTime: "23:30",
    deliveryTime: 1,
    avgCost: 10,
  },
  {
    id: 11,
    image: MainRt,
    name: "Snack Fuel",
    typeQuisine: ["Europe", "Halal"],
    state: "Johor",
    location: "Semata Street",
    phoneNum: "+607432555",
    openTime: "11:00",
    closeTime: "22:30",
    deliveryTime: 1,
    avgCost: 14,
  },
  {
    id: 12,
    image: MainRr,
    name: "Pizza house",
    typeQuisine: ["Europe", "Halal"],
    state: "King Geoger",
    location: "Aglinal Park",
    phoneNum: "+6043225655",
    openTime: "11:00",
    closeTime: "20:30",
    deliveryTime: 1,
    avgCost: 14,
  },
];

export const recipesData = [
  {
    id: 1,
    restaurantID: 1,
    image: BeefS,
    name: "Beef schnitzel",
    bio: "Tangy lemon, bitter greens and crunchy schnitzel make for an all-rounded, easy dinner in this Italian-inspired meal. For a healthier option, prepare the schnitzel in an air fryer!",
    type: "food",
    availability: "Lunch",
    price: 18.49,
  },
  {
    id: 2,
    restaurantID: 1,
    image: BeefPC,
    name: "Crispy beef coconut pancakes",
    bio: "Use the leftover beef brisket from our Slow cooker honey soy beef brisket recipe (see recipe notes) in this crispy Vietnamese-style pancakes",
    type: "food",
    availability: "Supper",
    price: 26.49,
  },
  {
    id: 3,
    restaurantID: 1,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 9.99,
  },
  {
    id: 4,
    restaurantID: 1,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 12.99,
  },
  {
    id: 5,
    restaurantID: 1,
    image: Noodles,
    name: "Sticky pork stir-fry with noodles",
    bio: "Low on prep and quick to cook, the pork mince perfectly takes on all of that sticky Asian-style sauce.",
    type: "food",
    availability: "Dinner",
    price: 8.99,
  },
  {
    id: 6,
    restaurantID: 2,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 18.99,
  },
  {
    id: 7,
    restaurantID: 2,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 17.99,
  },
  {
    id: 8,
    restaurantID: 2,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 10.99,
  },
  {
    id: 9,
    restaurantID: 2,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 10,
    restaurantID: 3,
    image: Malteser,
    name: "Maltesers tiramisu",
    bio: "For a twist on the classic Italian dessert, try our Maltesers tiramisu.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 11,
    restaurantID: 3,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 12,
    restaurantID: 3,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 13,
    restaurantID: 3,
    image: Tart,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Plate up an fancy dessert for your guests with this decadent amaretto dessert.",
    type: "food",
    availability: "Party",
    price: 16.49,
  },
  {
    id: 14,
    restaurantID: 3,
    image: Bullet,
    name: "Chocolate bullets",
    bio: "These chocolate liqueur drinks will disappear faster than a speeding bullet.",
    type: "food",
    availability: "Couple",
    price: 19.99,
  },
  {
    id: 15,
    restaurantID: 4,
    image: BeefS,
    name: "Beef schnitzel",
    bio: "Tangy lemon, bitter greens and crunchy schnitzel make for an all-rounded, easy dinner in this Italian-inspired meal. For a healthier option, prepare the schnitzel in an air fryer!",
    type: "food",
    availability: "Lunch",
    price: 18.49,
  },
  {
    id: 16,
    restaurantID: 6,
    image: BeefPC,
    name: "Crispy beef coconut pancakes",
    bio: "Use the leftover beef brisket from our Slow cooker honey soy beef brisket recipe (see recipe notes) in this crispy Vietnamese-style pancakes",
    type: "food",
    availability: "Supper",
    price: 26.49,
  },
  {
    id: 17,
    restaurantID: 5,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 9.99,
  },
  {
    id: 18,
    restaurantID: 7,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 12.99,
  },
  {
    id: 19,
    restaurantID: 6,
    image: Noodles,
    name: "Sticky pork stir-fry with noodles",
    bio: "Low on prep and quick to cook, the pork mince perfectly takes on all of that sticky Asian-style sauce.",
    type: "food",
    availability: "Dinner",
    price: 8.99,
  },
  {
    id: 20,
    restaurantID: 8,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 18.99,
  },
  {
    id: 21,
    restaurantID: 5,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 17.99,
  },
  {
    id: 22,
    restaurantID: 4,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 10.99,
  },
  {
    id: 23,
    restaurantID: 7,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 24,
    restaurantID: 9,
    image: Malteser,
    name: "Maltesers tiramisu",
    bio: "For a twist on the classic Italian dessert, try our Maltesers tiramisu.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 25,
    restaurantID: 5,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 26,
    restaurantID: 8,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 27,
    restaurantID: 7,
    image: Tart,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Plate up an fancy dessert for your guests with this decadent amaretto dessert.",
    type: "food",
    availability: "Party",
    price: 16.49,
  },
  {
    id: 28,
    restaurantID: 5,
    image: Bullet,
    name: "Chocolate bullets",
    bio: "These chocolate liqueur drinks will disappear faster than a speeding bullet.",
    type: "food",
    availability: "Couple",
    price: 19.99,
  },
  {
    id: 29,
    restaurantID: 4,
    image: BeefS,
    name: "Beef schnitzel",
    bio: "Tangy lemon, bitter greens and crunchy schnitzel make for an all-rounded, easy dinner in this Italian-inspired meal. For a healthier option, prepare the schnitzel in an air fryer!",
    type: "food",
    availability: "Lunch",
    price: 18.49,
  },
  {
    id: 30,
    restaurantID: 9,
    image: BeefPC,
    name: "Crispy beef coconut pancakes",
    bio: "Use the leftover beef brisket from our Slow cooker honey soy beef brisket recipe (see recipe notes) in this crispy Vietnamese-style pancakes",
    type: "food",
    availability: "Supper",
    price: 26.49,
  },
  {
    id: 31,
    restaurantID: 11,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 9.99,
  },
  {
    id: 32,
    restaurantID: 12,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 12.99,
  },
  {
    id: 33,
    restaurantID: 6,
    image: Noodles,
    name: "Sticky pork stir-fry with noodles",
    bio: "Low on prep and quick to cook, the pork mince perfectly takes on all of that sticky Asian-style sauce.",
    type: "food",
    availability: "Dinner",
    price: 8.99,
  },
  {
    id: 34,
    restaurantID: 10,
    image: Taco,
    name: "Cheesy taco pasta bake",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.",
    type: "food",
    availability: "Dinner",
    price: 18.99,
  },
  {
    id: 35,
    restaurantID: 10,
    image: Pasta,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Mexican meets Italian in this super easy macaroni tray bake made with beef mince, spicy taco seasoning and dollops of sour cream.Only $3.70 per serve, this one-pan pasta bake will be a hit at dinner-time and mean means less washing up!",
    type: "food",
    availability: "Lunch",
    price: 17.99,
  },
  {
    id: 36,
    restaurantID: 11,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 10.99,
  },
  {
    id: 37,
    restaurantID: 7,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 38,
    restaurantID: 12,
    image: Malteser,
    name: "Maltesers tiramisu",
    bio: "For a twist on the classic Italian dessert, try our Maltesers tiramisu.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 39,
    restaurantID: 10,
    image: Crumble,
    name: "Apple berry crumble",
    bio: "Ditch fancy and finicky desserts for this delicious and fast crumble.",
    type: "food",
    availability: "All Time",
    price: 14.49,
  },
  {
    id: 40,
    restaurantID: 12,
    image: Pie,
    name: "Chocolate banoffee pie",
    bio: "Add a new level of deliciousness to the banoffee pie, with a layer of chunky chocolate pieces.",
    type: "food",
    availability: "Party",
    price: 32.49,
  },
  {
    id: 41,
    restaurantID: 11,
    image: Tart,
    name: "One-pan chorizo, tomato and basil pasta",
    bio: "Plate up an fancy dessert for your guests with this decadent amaretto dessert.",
    type: "food",
    availability: "Party",
    price: 16.49,
  },
  {
    id: 42,
    restaurantID: 11,
    image: Bullet,
    name: "Chocolate bullets",
    bio: "These chocolate liqueur drinks will disappear faster than a speeding bullet.",
    type: "food",
    availability: "Couple",
    price: 19.99,
  },
];
