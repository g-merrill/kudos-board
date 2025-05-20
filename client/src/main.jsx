// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import BoardPage from './BoardPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="boards">
        <Route index element={<App />} />
        <Route path=":id" element={<BoardPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
