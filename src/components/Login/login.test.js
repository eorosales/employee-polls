import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Login from "./Login";

describe("Login component", () => {
  test("exists in the document", () => {
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

  test("shows user select dropdown", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const userSelectEl = screen.getByRole("combobox");
    expect(userSelectEl).toBeInTheDocument();
  });

  test("user select dropdown changes on user select", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const userSelectEl = screen.getByRole("option");
    const testValue = "mtsamis";

    fireEvent.click(userSelectEl);
    fireEvent.change(userSelectEl, { target: { value: testValue } });

    expect(userSelectEl).toBeInTheDocument();
    expect(userSelectEl.value).toBe(testValue);
  });
});
