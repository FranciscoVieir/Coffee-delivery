import { IntroMenu } from './components/IntroMenu'
import { OurCoffees } from './components/OurCoffees';
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <IntroMenu />
      <OurCoffees />
    </HomeContainer>
  )
}