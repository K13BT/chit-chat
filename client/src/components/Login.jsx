import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./LoginForm";

const Login = ({ setLoggedIn }) => {
  return (
    <main className="p-10 mx-auto shadow-lg">
      <div className="flex justify-center gap-8 items-center text-4xl">
        <FontAwesomeIcon icon={faMessage} />
        <h1 className="">Chit-Chat</h1>
      </div>

      <LoginForm setLoggedIn={setLoggedIn} />
    </main>
  );
};

export default Login;
