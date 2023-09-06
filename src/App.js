import Cart from "./components/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
