import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./LoginForm";

const Login = ({ setLoggedIn }) => {
  return (
    <main className="p-10 absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 shadow-xl flex flex-col justify-center align-middle gap-5 md:w-[700px] sm:w-[500px] w-[300px]">
      <div className="flex justify-center gap-8 items-center text-4xl">
        <FontAwesomeIcon icon={faMessage} />
        <h1 className="">Chit-Chat</h1>
      </div>

      <LoginForm setLoggedIn={setLoggedIn} />
    </main>
  );
};

export default Login;
