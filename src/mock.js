import {
  faUtensils,
  faDumbbell,
  faGasPump,
  faFirstAid,
  faTooth,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const Categories = [
  {
    name: "Restaurante",
    discount: 10,
    icon: faUtensils,
    class: "restaurante",
    min: 0,
    max: 1000,
    default: 150,
  },
  {
    name: "Academia",
    discount: 15,
    icon: faDumbbell,
    class: "academia",
    min: 0,
    max: 1000,
    default: 120,
  },
  {
    name: "Combustível",
    discount: 5,
    icon: faGasPump,
    class: "combustivel",
    min: 0,
    max: 1000,
    default: 250,
  },
  {
    name: "Medicamentos",
    discount: 30,
    icon: faFirstAid,
    class: "medicamentos",
    min: 0,
    max: 2000,
    default: 70,
  },
  {
    name: "Odontologia",
    discount: 40,
    icon: faTooth,
    class: "odontologia",
    min: 0,
    max: 1000,
    default: 150,
  },
  {
    name: "Cinema",
    discount: 50,
    icon: faTicketAlt,
    class: "cinema",
    min: 0,
    max: 50,
    default: 20,
  },
];

export default Categories;
