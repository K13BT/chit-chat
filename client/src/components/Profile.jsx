import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ChatContext } from "../App";

const Profile = () => {
  const { userInfo } = useContext(ChatContext);
  return (
    <div className="bg-white fixed bottom-0 left-0 lg:w-3/12 w-1/2 p-4">
      <div className="flex gap-4 items-center justify-start px-4">
        <FontAwesomeIcon
          icon={faUser}
          className="bg-black text-white p-2 rounded-full"
        />
        <p className="text-xl font-semibold">{userInfo.username}</p>
      </div>
    </div>
  );
};

export default Profile;
