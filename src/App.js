import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppNavigation from "./appNavigation/AppNavigation";
import { getProductList } from "./redux/productReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProductList())
  },[])

  return (
    <div className="App">
      <AppNavigation />
    </div>
  );
}

export default App;
