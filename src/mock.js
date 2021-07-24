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
    id: "res",
    name: "Restaurante",
    discount: 10,
    icon: faUtensils,
    class: "restaurante",
    min: 0,
    max: 1000,
    amount: 150,
  },
  {
    id: "aca",
    name: "Academia",
    discount: 15,
    icon: faDumbbell,
    class: "academia",
    min: 0,
    max: 1000,
    amount: 120
  },
  {
    id: "com",
    name: "Combustível",
    discount: 5,
    icon: faGasPump,
    class: "combustivel",
    min: 0,
    max: 1000,
    amount: 250,
  },
  {
    id: "med",
    name: "Medicamentos",
    discount: 30,
    icon: faFirstAid,
    class: "medicamentos",
    min: 0,
    max: 2000,
    amount: 70,
  },
  {
    id: "odo",
    name: "Odontologia",
    discount: 40,
    icon: faTooth,
    class: "odontologia",
    min: 0,
    max: 1000,
    amount: 150,
  },
  {
    id: "cin",
    name: "Cinema",
    discount: 50,
    icon: faTicketAlt,
    class: "cinema",
    min: 0,
    max: 50,
    amount: 20,
  },
];

export default Categories;
