import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfolio" element={<Home />} />

        <Route path="*" element={<Navigate to="/portfolio" />} />
      </Switch>
    </BrowserRouter>
  );
};
