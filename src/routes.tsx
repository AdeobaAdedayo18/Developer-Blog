import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <HomePage></HomePage>
      </ProtectedRoutes>
    ),
  },

  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);

export default router;
