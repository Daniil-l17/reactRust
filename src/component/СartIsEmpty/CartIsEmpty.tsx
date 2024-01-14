import { Link } from 'react-router-dom';

const CartIsEmpty = () => {
  return (
    <div className=" mt-[60px] flex-col flex justify-center items-center">
      <img src="/11329060.png" alt="" />
        <Link className=" text-[white]" to="/servers">
      <button className=" bg-[#4160c0bf] hover:bg-[#394c85bf] transition duration-150 text-lg px-3 py-2 rounded-lg">
      Добавить в Избранное
      </button>
        </Link>
    </div>
  );
};

export default CartIsEmpty;
