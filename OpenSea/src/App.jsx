import Catagories from "./Components/Catagories";
import Header from "./Components/Header";
import Trending from "./Components/Trending";
import Cart from "./Components/catagoriesCart"

const App = () => {
  return (
    <div>
      <Header />
      <Catagories/>
      <Cart/>
      <Trending/>
      <h2>Hellow Open Sea...!!</h2>
    </div>
  );
};

export default App;
