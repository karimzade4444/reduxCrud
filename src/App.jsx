import { useDispatch, useSelector } from "react-redux";
import Screen from "./components/screen";
import {
  setViewModal,
  openEditModal,
} from "./library/redux/slices/counterSlice.js";
import CreatModal from "./components/CreatModal.jsx";
import EditModal from "./components/EditModal.jsx";

const App = () => {
  const { viewModal, selectedItem } = useSelector((e) => e.centralStore);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <Screen />
      <CreatModal />
      <EditModal/>
      {viewModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => dispatch(setViewModal(false))}
        >
          <div
            className="bg-gray-900 border border-gray-800 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-400 border-b border-gray-800 pb-2">
                  Просмотр карточки
                </h2>

                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-2xl font-bold mb-1">{selectedItem.name}</p>
                <h3>{selectedItem.title}</h3>
                <p>id:{selectedItem.id}</p>
                <button className="px-5 h-10 bg-white hover:bg-white/60 font-bold rounded-xl cursor-pointer transition-colors text-black ml-75" onClick={()=>{dispatch(openEditModal(selectedItem))}}>
                  Редактировать
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
