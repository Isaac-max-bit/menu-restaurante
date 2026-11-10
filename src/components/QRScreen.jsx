import { useMemo } from "react";
import qrcode from "qrcode-generator";
import { RESTAURANTE } from "../data/menu.js";

export default function QRScreen({ onIngresar }) {
  const svg = useMemo(() => {
    const url = window.location.href.split("#")[0] + "#menu";
    const qr = qrcode(0, "M");
    qr.addData(url);
    qr.make();
    return qr.createSvgTag({ cellSize: 6, margin: 0, scalable: true });
  }, []);

  return (
    <main className="qr-screen">
      <h1 className="marca">{RESTAURANTE.nombre}</h1>
      <p className="lema">Escanea el código con la cámara de tu celular para ver la carta.</p>
      <div
        className="qr"
        role="img"
        aria-label="Código QR que abre el menú"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <button className="boton" onClick={onIngresar}>
        Ver el menú
      </button>
    </main>
  );
}
