import "../../App.css";
import AuthenticatedApp from "../entrypoint/AuthenticatedApp";

function App() {
  const isUserAuth = true;
  return isUserAuth ? <AuthenticatedApp /> : <div>Login</div>;
}

export default App;
