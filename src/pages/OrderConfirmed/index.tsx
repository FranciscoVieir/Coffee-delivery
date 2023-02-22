import { RegularText, TitleText } from "../../Components/Typegraphy";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import motorcycleDeliveryImg from '../../assets/motorcycleDelivery.png'
import { InfoWithIcon } from "../../Components/infoWithIcon";
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmadoS</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={motorcycleDeliveryImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}