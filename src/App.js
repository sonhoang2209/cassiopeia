import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppNavigation from "./appNavigation/AppNavigation";
import { getProductList } from "./redux/productReducer";
import { getBannerList } from "./redux/bannerReducer"

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProductList())
    dispatch(getBannerList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <AppNavigation />
    </div>
  );
}

export default App;
