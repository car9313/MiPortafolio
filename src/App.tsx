import { useEffect } from "react";
import Header from "./Layout/Header";
import MyMain from "./Layout/MyMain";
import Footer from "./Layout/Footer";
function App() {
  {
    /**bg-gray-300 text-gray-900 dark:bg-bgPrimary dark:text-text */
  }

  useEffect(() => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }
    });
  }, []);
  return (
    <div className="font-bodyFont w-full h-auto min-w-[320px] max-w-[1280]">
      <Header />
      <MyMain />
      <Footer />
    </div>
  );
}

export default App;
