import { useDispatch, useSelector } from "react-redux";
import {
  setEditImg,
  setEditModal,
  setEditName,
  setEditTitle,
  editBlock
} from "../library/redux/slices/counterSlice";

const EditModal = () => {
  const { editModal, editName, editImg, editTitle, id } = useSelector(
    (slice) => slice.centralStore,
  );
  const dispatch = useDispatch();
  return(
  <div>
    {editModal && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 border border-gray-800 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2 text-gray-400">
            Изменение материала
          </h2>

          <div className="flex flex-col gap-4 text-black">
            <input
              type="text"
              placeholder="Ссылка на картинку URL"
              value={editImg}
              onChange={(e) => dispatch(setEditImg(e.target.value))}
              className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 "
            />

            <input
              type="text"
              placeholder="Категория (например: React Basic)"
              value={editName}
              onChange={(e) => dispatch(setEditName(e.target.value))}
              className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 "
            />

            <input
              type="text"
              placeholder="Короткое описание..."
              value={editTitle}
              onChange={(e) => dispatch(setEditTitle(e.target.value))}
              className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 "
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-5 h-10 border-2 border-gray-600 rounded-xl cursor-pointer text-gray-400 hover:text-white transition-colors"
              onClick={() => dispatch(setEditModal(false))}
            >
              Отмена
            </button>
            <button className="px-5 h-10 bg-white hover:bg-white/60 font-bold rounded-xl cursor-pointer transition-colors text-black" onClick={()=>{dispatch(editBlock({
                id,
                img: editImg,
                name: editName,
                title: editTitle,
            }))}}>
              Изменить
            </button>
          </div>
        </div>
      </div>
    )}
  </div>)
};

export default EditModal;
