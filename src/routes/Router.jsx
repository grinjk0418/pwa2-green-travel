import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../components/Main.jsx";
import FestivalList from "../components/festivals/FestivalList.jsx";
import FestivalShow from "../components/festivals/FestivalShow.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/festivals',
        element: <FestivalList />
      },
      {
        path: '/festivals/:id', // 세그먼트 파라미터(segment parameter), id는 아무렇게나 작성자 맘대로...
        element: <FestivalShow />
      },
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} /> //프롭스로 라우터 객체 넘겨주기
}

export default Router;