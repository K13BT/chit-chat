import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ChatContext } from "../App";

const Profile = () => {
  const { userInfo } = useContext(ChatContext);
  return (
    <div className="absolute bottom-4">
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="bg-black text-white p-2 rounded-full"
        />
        <p>{userInfo.username}</p>
      </div>

      <p className="text-end">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default Profile;
