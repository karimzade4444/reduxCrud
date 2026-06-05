import React from 'react'

const Top = () => {
  return (
    <div>
      <div className=" flex p-5 justify-between items-end">
        <div>
          <h1 className=' text-3xl font-bold'>Мини-CRUD (классная работа)</h1>
          <p className='text-gray-500'>Поиск • Модальные окна • Карточки</p>
        </div>
        <button className='w-40 h-12 bg-black text-white rounded-2xl cursor-pointer'>+ Добавить</button> 
      </div>
    </div>
  );
}

export default Top