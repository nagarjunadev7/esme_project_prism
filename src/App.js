import { Behindesme, Products, Bigwhy, Footer, Header, Ingrediantsgrid, Media, Ourblog } from './containers';
import './App.css';
import "@fontsource/plus-jakarta-sans";
import { Giftcard, Stayintouch } from './components';

export default function App() {
  return (
    <div>
    <Header /> 
    <Bigwhy />
    <Products />
    <Ingrediantsgrid />
    <Behindesme />
    <Ourblog />
    <Media />
    <Stayintouch />
    <Giftcard />
    <Footer /> 
    </div>
  )
}
