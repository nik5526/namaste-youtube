import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Provider} from "react-redux";
import Store from "./utilities/Store";
import {createBrowserRouter,RouterProvider,outlet} from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainBody from "./Components/MainBody";

function App() {
  return (
    <Provider store ={Store}>
      
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}
const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainBody/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}]);

export default App;
