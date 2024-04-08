import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="absolute bottom-4">
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="bg-black text-white p-2 rounded-full"
        />
        <p>John Doe</p>
      </div>

      <p className="text-end">5:33:33 pm</p>
    </div>
  );
};

export default Profile;
