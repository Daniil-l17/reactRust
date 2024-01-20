import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import DetailServer from '../pages/Detail/DetailServer';
import Server from '../pages/Servers/Server';
import {OfficialSkins} from '../pages/OfficialSkins/OfficialSkins';
import FavoritesServer from '../pages/favoritesServer/FavoritesServer';





const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DetailServer />} path="/servers/rust/:id" />
        <Route element={<Server/>} path="/servers/*" />
        <Route element={<OfficialSkins/>} path="/skins" />
        <Route element={<FavoritesServer/>} path="/servers/rust/favorites" />
        <Route element={<Navigate to="/" replace />} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
