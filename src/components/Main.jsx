import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/people/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main;