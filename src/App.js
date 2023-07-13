import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import './styles/fonts/Roboto-Regular.ttf';
import TopNavigation from './components/layout/TopNavigation';
import Navigation from './components/layout/Navigation';
import Logo from './components/layout/Logo';
import HomePage from './pages/HomePage';
import Footer from './components/layout/Footer';
import ViewCart from './pages/ViewCart';
import ProductDetails from './pages/ProductDetails';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './state/actions/productActions';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      <TopNavigation />
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/viewCart" element={<ViewCart />} exact />
        <Route path="/wishlist" element={<Wishlist />} exact />
        <Route path="/search/:query" element={<Search />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/productDetails/:id" element={<ProductDetails />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
      <Footer />
    </>
  )
}

export default App;