import { useContext } from "react";
import { ChatContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleLeaveRoom, setShowSidebar }) => {
  const { userInfo } = useContext(ChatContext);
  return (
    <header className="grid lg:grid-cols-2 grid-cols-3 items-center bg-black p-4 mb-4 rounded-lg">
      <button
        className="text-white text-2xl lg:hidden justify-self-start"
        onClick={() => setShowSidebar(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1 className="lg:text-4xl justify-self-center lg:justify-self-end md:text-2xl text-xl text-white">
        {userInfo.room}
      </h1>

      <button
        onClick={handleLeaveRoom}
        className="bg-white text-center text-black rounded-lg p-1 px-2 md:p-2 lg:p-3 md:text-lg justify-self-end"
      >
        Leave Chat
      </button>
    </header>
  );
};

export default Header;
