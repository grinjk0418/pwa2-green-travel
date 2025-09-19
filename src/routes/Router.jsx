import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../components/Main.jsx";
import FestivalList from "../components/festivals/FestivalList.jsx";
import FestivalShow from "../components/festivals/FestivalShow.jsx";
import StayList from "../components/stay/StayList.jsx";
import StayDetail from "../components/stay/StayDetail.jsx";

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
      {
        path: '/stays',
        element: <StayList />
      },
      {
        path: '/stays/:id',
        element: <StayDetail />
      },

    ]
  }
]);

function Router() {
  return <RouterProvider router={router} /> //프롭스로 라우터 객체 넘겨주기
}

export default Router;