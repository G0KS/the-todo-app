import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";

function App() {
   return (
      <div className="App container">
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/*" Component={PageNotFound} />
         </Routes>
      </div>
   );
}

export default App;
