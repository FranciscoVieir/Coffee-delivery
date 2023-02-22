import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogoDelivery from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoDelivery} alt="coffee logo" />
        </NavLink>

        <HeaderButtonsContainer>

          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/completeorder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}