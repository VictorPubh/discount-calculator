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
  },
  {
    name: "Academia",
    discount: 15,
    icon: faDumbbell,
    class: "academia",
  },
  {
    name: "Combustível",
    discount: 5,
    icon: faGasPump,
    class: "combustivel",
  },
  {
    name: "Medicamentos",
    discount: 30,
    icon: faFirstAid,
    class: "medicamentos",
  },
  {
    name: "Odontologia",
    discount: 40,
    icon: faTooth,
    class: "odontologia",
  },
  {
    name: "Cinema",
    discount: 50,
    icon: faTicketAlt,
    class: "cinema",
  },
];

export default Categories;
