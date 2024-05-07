import { useState, useEffect } from "react";
import Page from "./assets/sections/page";
import Footer from "./assets/components/footer";
import Navbar from "./assets/components/navbar";

import "./index.css";

function App() {
  // render state to control, if site should be rendered or not:
  const [render, setRender] = useState(false);

  // [] keeps sure that effect is applied only once
  useEffect(() => {
    setRender(true);
  }, []);

  // if render is true, Component will be rendered
  return render ? (
    <div className="bg-zinc-900 bg-norepeat bg-[url('./src/assets/images/bg.svg')] text-zinc-300">
      <Navbar />
      <Page/>
      <Footer />
    </div>
  ) : null;
}

export default App;
