import "../../App.css";
import AuthenticatedApp from "../entrypoint/AuthenticatedApp";
import UnAuthenticatedApp from "../entrypoint/UnAuthenticatedApp";

// Hooks
import { useUser } from "../../hooks/useUser";

export default function App() {
  const user = useUser();
  return user.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}
