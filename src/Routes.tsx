import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/Home'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/completeorder' element={<CompleteOrderPage />} />
        <Route path='/orderconfirmed' element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}