import LogoCoffeeShop from "../../assets/LogoCoffeeShop.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { HeaderContainer, IconsContainer } from "./StylesHeader";
export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoCoffeeShop} alt="" />
      </Link>
      <IconsContainer>
        <span>
          <MapPin size={22} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          <h3>3</h3>
        </button>
      </IconsContainer>
    </HeaderContainer>
  );
}
