import { useEffect, useState } from "react";
import QRScreen from "./components/QRScreen.jsx";
import MenuScreen from "./components/MenuScreen.jsx";

const enMenu = () => window.location.hash === "#menu";

export default function App() {
  const [verMenu, setVerMenu] = useState(enMenu());

  // El QR apunta a la URL + "#menu". Al abrirla, se muestra la carta.
  useEffect(() => {
    const onHash = () => setVerMenu(enMenu());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return verMenu ? (
    <MenuScreen onVolver={() => (window.location.hash = "qr")} />
  ) : (
    <QRScreen onIngresar={() => (window.location.hash = "menu")} />
  );
}
