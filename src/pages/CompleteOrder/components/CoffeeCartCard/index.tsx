import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffeeImg from '../../../../assets/Coffee.png'
import { RegularText } from "../../../../Components/Typegraphy";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardItem {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardItem) {
  const { changeCartItemQuantity, removerCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removerCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>

    </CoffeeCartCardContainer>
  )
}