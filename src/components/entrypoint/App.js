import "../../App.css";
import AuthenticatedApp from "../entrypoint/AuthenticatedApp";
import UnAuthenticatedApp from "../entrypoint/UnAuthenticatedApp";

function App() {
  const isUserAuth = true;
  return isUserAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App;
