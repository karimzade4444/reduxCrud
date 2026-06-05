import { useDispatch, useSelector } from "react-redux";
import Screen from "./components/screen";

const App = () => {
  const { data } = useSelector((e) => e.centralStore);
  const dispatch = useDispatch();
  return (
    <div className=" relative">
      <Screen />
      <div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1></h1>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
