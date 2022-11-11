import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Login from "./Login";

describe("Login component", () => {
  it("matches snapshot", () => {
    expect(
      render(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      )
    ).toMatchSnapshot();
  });
  it("exists in the docaument", () => {
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

  it("shows user select dropdown", () => {
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

  it("user select dropdown changes on user select", () => {
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
