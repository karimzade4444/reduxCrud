import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const {data} = useSelector((e)=>e.centralStore)
  return (
    <div>App</div>
  )
}

export default App