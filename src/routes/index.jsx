import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import HomePage from '../pages/HomePage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
