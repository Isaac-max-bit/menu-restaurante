import { useState } from "react";
import { MENU, RESTAURANTE } from "../data/menu.js";

const cop = (n) => "$" + n.toLocaleString("es-CO");

export default function MenuScreen({ onVolver }) {
  const categorias = Object.keys(MENU);
  const [activa, setActiva] = useState(categorias[0]);

  return (
    <main className="menu">
      <header className="menu-cabecera">
        <h1 className="marca">{RESTAURANTE.nombre}</h1>
        <p className="lema">{RESTAURANTE.lema}</p>
      </header>

      <nav className="tabs" aria-label="Categorías">
        {categorias.map((c) => (
          <button
  key={c}
  className={"tab" + (c === activa ? " activa" : "")}
  aria-current={c === activa}
  onClick={(e) => {
    setActiva(c);
    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    e.currentTarget.scrollIntoView({
      behavior: suave ? "smooth" : "auto",
      inline: "center",
      block: "nearest",
    });
  }}
>
  {c}
</button>
        ))}
      </nav>

      <section aria-label={activa}>
        {MENU[activa].map((p) => (
          <article className="plato" key={p.nombre}>
            <div className="plato-fila">
              <h2>{p.nombre}</h2>
              <span className="punteado" aria-hidden="true" />
              <span className="precio">{p.precio ? cop(p.precio) : "Consultar"}</span>
            </div>
            {p.desc && <p className="desc">{p.desc}</p>}
          </article>
        ))}
      </section>

      <button className="enlace" onClick={onVolver}>
        Volver al código QR
      </button>
    </main>
  );
}