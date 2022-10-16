import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Login from "./Login";

test("Show Login component", () => {
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  const userInputEl = screen.getByRole("heading");
  expect(userInputEl).toBeInTheDocument();
});
