import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";
import { Products } from "./components/Products";
import Styles from "./global.module.css";

export function App() {
  return (
    <div>
      <Header />
      <HomeContent />
      <div className={Styles.productsContainer}>
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}
