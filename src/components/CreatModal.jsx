import { useDispatch, useSelector } from "react-redux";
import {
  setCreateModal,
  setCreatImg,
  setCreatName,
  setCreatTitle,
  createBlock,
} from "../library/redux/slices/counterSlice"; // Проверь правильность пути к слайсу

const CreatModal = () => {
  const { createModal, createImg, createName, createTitle } = useSelector(
    (slice) => slice.centralStore,
  );
  const dispatch = useDispatch();

  // Функция для сборки новой карточки и отправки в Redux
  const handleSave = () => {
    // Валидация: не создаем пустую карточку
    if (!createName.trim() || !createTitle.trim()) {
      alert("Пожалуйста, заполните Название и Описание!");
      return;
    }

    const newBlock = {
      id: Date.now(), // Генерируем уникальный id
      img: createImg || "https://placehold.co/600x400", // Ставим заглушку, если картинку не передали
      name: createName,
      title: createTitle,
    };

    dispatch(createBlock(newBlock)); // Отправляем объект в массив data
    dispatch(setCreateModal(false)); // Закрываем модалку
  };

  return (
    <div>
      {createModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => dispatch(setCreateModal(false))} // Закрытие при клике на оверлей
        >
          <div
            className="bg-gray-900 border border-gray-800 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // Защита от всплытия клика
          >
            <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2 text-gray-400">
              Добавить новую карточку
            </h2>

            <div className="flex flex-col gap-4 text-black">
              <input
                type="text"
                placeholder="Ссылка на картинку URL"
                value={createImg}
                onChange={(e) => dispatch(setCreatImg(e.target.value))}
                className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 focus:outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Имя / Категория (например: React Basic)"
                value={createName}
                onChange={(e) => dispatch(setCreatName(e.target.value))}
                className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 focus:outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Короткое описание / Заголовок"
                value={createTitle}
                onChange={(e) => dispatch(setCreatTitle(e.target.value))}
                className="w-full h-11 border border-gray-700 bg-gray-800 text-white rounded-xl pl-3 focus:outline-none focus:border-green-500"
              />
            </div>

            {/* Кнопки управления внизу модалки */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-5 h-10 border-2 border-gray-600 rounded-xl cursor-pointer text-gray-400 hover:text-white transition-colors"
                onClick={() => dispatch(setCreateModal(false))}
              >
                Отмена
              </button>
              <button
                className="px-5 h-10 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl cursor-pointer transition-colors"
                onClick={handleSave}
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatModal;
