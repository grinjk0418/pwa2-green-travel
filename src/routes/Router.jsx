import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../components/Main.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} /> //프롭스로 라우터 객체 넘겨주기
}

export default Router;