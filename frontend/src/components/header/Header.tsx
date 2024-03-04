import { MdAddShoppingCart } from "react-icons/md";
import { Link} from "react-router-dom";
 
const Header = () => {
  return (
    <header>
      <div className="w-full h-20 flex items-center justify-around shadow-lg">
        <Link to={"/"}>
          <div className="flex text-3xl">
            <p>Flip</p>
            <span className="text-pink-500">Zone</span>
          </div>
        </Link>
        <div>
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Product"
              className="text-black p-3 rounded border border-gray-700 "
            />
          </form>
        </div>

        <div className="flex gap-4">
          <Link
            to={"/signin"}
            className="text-xl hover:border-gray-400 hover:border hover:bg-gray-200  px-3  py-2 rounded-sm"
          >
            Signin
          </Link>
          <Link
            to={"/signin"}
            className="text-xl hover:border-gray-400 hover:border  hover:bg-gray-200 px-3  py-2 rounded-sm"
          >
            my order
          </Link>
          <Link to={'/cart'}>
            <MdAddShoppingCart className="mt-3 text-2xl cursor-pointer mx-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
