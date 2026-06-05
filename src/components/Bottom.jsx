import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlock } from "../library/redux/slices/counterSlice";
const Bottom = () => {
  const { data } = useSelector((e) => e.centralStore);
  const dispatch = useDispatch();
  return (
    <div className=" grid grid-cols-3 items-center place-items-center">
      {data?.map((el) => {
        return (
          <div key={el.id} className=" w-100 h-80 bg-black/80 rounded-xl">
            <img src={el.img} alt="" className="w-full h-50 rounded-xl" />
            <h1 className="pl-5 pt-2 text-white font-bold text-2xl">
              {el.name}
            </h1>
            <p className=" text-gray-300 pl-5">{el.title}</p>
            <div className=" flex justify-between items-center pl-5 pr-5 pt-2">
              <button className="text-white w-25 h-8 border-2 border-gray-400 rounded-xl cursor-pointer">
                Просмотр
              </button>
              <button className="text-white w-25 h-8 bg-red-800  rounded-xl cursor-pointer" onClick={()=>{dispatch(deleteBlock(el.id))}} >
                Удалить
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bottom;
