import ChickenSupremePizza from "../../assets/Chicken Supreme Pizza.jpg";
import VeggieDelightBurger from "../../assets/Veggie Delight Burger.jpg";
import ChickenCaesarSalad from "../../assets/Chicken Caesar Salad.jpg";
import VegetarianSpaghetti from "../../assets/Vegetarian Spaghetti.jpg";
import PaneerSpaghetti from "../../assets/Paneer Spaghetti.jpg";
import SpinachandCheesePasta from "../../assets/Spinach and Cheese Pasta.jpg";
import BBQChickenSpaghetti from "../../assets/BBQ Chicken Spaghetti.jpg";
import TomatoBasilSpaghetti from "../../assets/Tomato Basil Spaghetti.jpg";
import GrilledChickenSandwich from "../../assets/Grilled Chicken Sandwich.jpg";
import VegetableStirFry from "../../assets/Vegetable Stir-Fry.jpg";
import PepperoniPizza from "../../assets/Pepperoni Pizza.jpg";
import MushroomRisotto from "../../assets/Mushroom Risotto.jpg";
import TandooriChickenWrap from "../../assets/Tandoori Chicken Wrap.jpg";
import FalafelWrap from "../../assets/Falafel Wrap.jpg";
import SeafoodPasta from "../../assets/Seafood Pasta.jpg";

const products = [
  {
    id: 1,
    name: 'Chicken Supreme Pizza', // Non-Veg
    description: 'Classic chicken pizza with fresh basil and mozzarella cheese.',
    price: 265.18,
    image: ChickenSupremePizza,
    category: 'Non-Veg',
  },
  {
    id: 2,
    name: 'Veggie Delight Burger', // Veg
    description: 'Juicy veggie burger with cheddar cheese, lettuce, and tomato.',
    price: 101.18,
    image: VeggieDelightBurger,
    category: 'Veg',
  },
  {
    id: 3,
    name: 'Chicken Caesar Salad', // Non-Veg
    description: 'Crisp romaine lettuce with Caesar dressing, croutons, and chicken.',
    price: 237.18,
    image: ChickenCaesarSalad,
    category: 'Non-Veg',
  },
  {
    id: 4,
    name: 'Vegetarian Spaghetti', // Veg
    description: 'Traditional Italian pasta with a rich vegetarian sauce.',
    price: 229.18,
    image: VegetarianSpaghetti,
    category: 'Veg',
  },
  {
    id: 5,
    name: 'Paneer Spaghetti', // Veg
    description: 'Traditional Italian pasta with a paneer-rich tomato sauce.',
    price: 229.18,
    image: PaneerSpaghetti,
    category: 'Veg',
  },
  {
    id: 6,
    name: 'Spinach and Cheese Pasta', // Veg
    description: 'Creamy spinach and cheese pasta for a delightful vegetarian experience.',
    price: 219.18,
    image: SpinachandCheesePasta,
    category: 'Veg',
  },
  {
    id: 7,
    name: 'BBQ Chicken Spaghetti', // Non-Veg
    description: 'Spaghetti with a smoky BBQ chicken meat sauce.',
    price: 122,
    image: BBQChickenSpaghetti,
    category: 'Non-Veg',
  },
  {
    id: 8,
    name: 'Tomato Basil Spaghetti', // Veg
    description: 'Classic tomato and basil spaghetti for a fresh vegetarian taste.',
    price: 156.60,
    image: TomatoBasilSpaghetti,
    category: 'Veg',
  },
  {
    id: 9,
    name: 'Grilled Chicken Sandwich', // Non-Veg
    description: 'Tender grilled chicken breast, fresh lettuce, and creamy mayo.',
    price: 119.18,
    image: GrilledChickenSandwich,
    category: 'Non-Veg',
  },
  {
    id: 10,
    name: 'Vegetable Stir-Fry', // Veg
    description: 'Fresh vegetables sautéed in a tangy Asian sauce.',
    price: 383.18,
    image: VegetableStirFry,
    category: 'Veg',
  },
  {
    id: 11,
    name: 'Pepperoni Pizza', // Non-Veg
    description: 'Loaded with spicy pepperoni and melted cheese.',
    price: 247.18,
    image: PepperoniPizza,
    category: 'Non-Veg',
  },
  {
    id: 12,
    name: 'Mushroom Risotto', // Veg
    description: 'Creamy risotto with sautéed mushrooms and Parmesan cheese.',
    price: 105.18,
    image: MushroomRisotto,
    category: 'Veg',
  },
  {
    id: 13,
    name: 'Tandoori Chicken Wrap', // Non-Veg
    description: 'Spicy tandoori chicken wrapped in a soft tortilla.',
    price: 137.18,
    image: TandooriChickenWrap,
    category: 'Non-Veg',
  },
  {
    id: 14,
    name: 'Falafel Wrap', // Veg
    description: 'Crispy falafel, fresh veggies, and tahini sauce in a tortilla.',
    price: 125.18,
    image: FalafelWrap,
    category: 'Veg',
  },
  {
    id: 15,
    name: 'Seafood Pasta', // Non-Veg
    description: 'Pasta with shrimp, mussels, and a creamy garlic sauce.',
    price: 193.18,
    image: SeafoodPasta,
    category: 'Non-Veg',
  },
];

export default products;
