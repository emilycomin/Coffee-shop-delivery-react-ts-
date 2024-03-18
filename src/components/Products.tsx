import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import Styles from "./Products.module.css";
import ExpressoAmericano from "../assets/expressoAmericano.png";
export function Products() {
  return (
    <div className={Styles.productContainer}>
      <img src={ExpressoAmericano} alt="" />
      <div className={Styles.productInfo}>
        <span className={Styles.spanCategoria}>Tradicional</span>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e gãios moídos</p>
        <div className={Styles.footerCard}>
          <span className={Styles.spanPreco}>R$ 9,90 </span>
          <div className={Styles.itemCountProduct}>
            <input type="text" />
            <div className={Styles.buttonItemCount}>
              <button>
                <Minus weight="bold" />
              </button>
              <button>
                <Plus weight="bold" />
              </button>
            </div>
            <button>
              <ShoppingCart weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
