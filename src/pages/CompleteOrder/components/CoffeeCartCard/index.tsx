import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffeeImg from '../../../../assets/Coffee.png'
import { RegularText } from "../../../../Components/Typegraphy";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffeeImg} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>

    </CoffeeCartCardContainer>
  )
}