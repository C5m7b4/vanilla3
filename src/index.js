console.log("you are ready to start coding");
import { data } from "./data";
import { isValid } from "./utils";
import "./styles.css";

let filteredData;

const state = {
  items: data,
  currentItem: {
    name: "",
    size: "",
    price: "",
    category: "",
  },
};
