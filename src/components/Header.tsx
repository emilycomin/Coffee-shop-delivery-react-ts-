import Styles from "./Header.module.css";
import LogoCoffeeShop from "../assets/LogoCoffeeShop.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Header() {
  return (
    <div className={Styles.headerContainer}>
      <img src={LogoCoffeeShop} alt="" />
      <div className={Styles.iconsContainer}>
        <span>
          <MapPin
            size={32}
            color="#8047F8"
            weight="fill"
            className={Styles.mapPinSvg}
          />
          Porto Alegre, RS
        </span>
        <ShoppingCart
          size={32}
          color="#C47F17"
          weight="fill"
          className={Styles.cartSvg}
        />
      </div>
    </div>
  );
}
