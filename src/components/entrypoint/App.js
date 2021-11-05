import "../../App.css";
import Login from "../auth/Login";
import AuthenticatedApp from "../entrypoint/AuthenticatedApp";

function App() {
  const isUserAuth = false;
  return isUserAuth ? <AuthenticatedApp /> : <Login />;
}

export default App;
