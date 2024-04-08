import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      {loggedIn ? (
        <ChatRoom setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
