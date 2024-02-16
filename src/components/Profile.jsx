import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex border-r-2 flex-col items-center min-h-screen w-90 pl-10 pr-10 bg-white mt-10 ml-10 mb-10">
      <img
        className="w-40 h-40 rounded-full mt-10 mb-5"
        src="https://placehold.co/100x100"
        alt=""
      />
      <h1 className="text-3xl">Rustam Musin</h1>
      <p className="text-xl pt-5 pb-8">Frontend Developer at @MediaDiva</p>
      <p className="text-xl">Member Since 2024</p>
      <button onClick={() => console.log("add data")} className="w-60 h-14 mt-10 hover:bg-green-700 transition-colors transition-300 bg-green-500">Добавить данные в бд</button>
      <div className="flex items-center gap-10 mt-10">
        <FaFacebookF
          className="icon hover:text-blue-500 text-gray-500 transition-colors duration-300  cursor-pointer"
          size={20}
        />
        <FaTwitter
          className="text-gray-500 cursor-pointer hover:text-blue-500 transition-colors duration-300"
          size={20}
        />
        <FaGooglePlusG
          className="text-gray-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 "
          size={20}
        />
      </div>
    </div>
  );
};

export default Profile;
