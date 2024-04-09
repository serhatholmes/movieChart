import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import AppLayout from "./components/layout";

import { MovieDetail } from "./components/MovieDetail";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path="/movieDetail/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
