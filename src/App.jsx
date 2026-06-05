import {useDispatch, useSelector} from "react-redux";
import Screen from "./components/screen";

const App = () => {
  const {data} = useSelector((e)=>e.centralStore);
  const dispatch = useDispatch();
  return (
    <div>
      <Screen/>
    </div>
  )
}

export default App