import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setCreateModal } from '../library/redux/slices/counterSlice';

const Top = () => {

  const dispatch = useDispatch();
  return (
    <div>
      <div className=" flex p-10 justify-between items-end">
        <div>
          <h1 className=" text-3xl font-bold">Мини-CRUD (классная работа)</h1>
          <p className="text-gray-500">Поиск • Модальные окна • Карточки</p>
        </div>
        <button className="w-40 h-12 bg-black text-white rounded-2xl cursor-pointer" onClick={()=>dispatch(setCreateModal(true))}>
          + Добавить
        </button>
      </div>
      <div className='p-10'>
        <input
          type="search"
          name=""
          placeholder="Поиск"
          id=""
          className="w-100 h-12 border-black border-2 rounded-2xl pl-5"
        />
      </div>
    </div>
  );
}

export default Top