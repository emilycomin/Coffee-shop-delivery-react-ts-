import Styles from "./HomeContent.module.css";
import coffeeCup from "../assets/coffeeCup.png";
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
} from "@phosphor-icons/react/dist/ssr";

export function HomeContent() {
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.homeText}>
        <div className={Styles.contentHome}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className={Styles.textColums}>
            <div className={Styles.homeTextColm1}>
              <span>
                <ShoppingCart
                  size={32}
                  color="#fafafa"
                  weight="fill"
                  style={{
                    backgroundColor: "#C47F17",
                    borderRadius: "9999px",
                    padding: "8px",
                  }}
                />
                <p>Compra simples e segura</p>
              </span>
              <span>
                <Timer
                  style={{
                    backgroundColor: "#DBAC2C",
                    borderRadius: "9999px",
                    padding: "8px",
                  }}
                  size={32}
                  color="#fafafa"
                  weight="fill"
                />{" "}
                <p>Entrega rápida e rastreada</p>
              </span>
            </div>
            <div className={Styles.homeTextColm2}>
              <span>
                {" "}
                <Package
                  style={{
                    backgroundColor: "#574F4D",
                    borderRadius: "9999px",
                    padding: "8px",
                  }}
                  size={32}
                  color="#fafafa"
                  weight="fill"
                />{" "}
                <p>Embalagem mantém o café intacto</p>
              </span>
              <span>
                {" "}
                <Coffee
                  style={{
                    backgroundColor: "#8047F8",
                    borderRadius: "9999px",
                    padding: "8px",
                  }}
                  size={32}
                  color="#fafafa"
                  weight="fill"
                />{" "}
                <p>O café chega fresquinho até você</p>
              </span>
            </div>
          </div>
        </div>
        <img src={coffeeCup} alt="" />
      </div>
    </div>
  );
}
