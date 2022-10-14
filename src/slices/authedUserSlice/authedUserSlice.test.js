import authedUserReducer, {
  setAuthedUser,
  logoutUser,
} from "./authedUserSlice";

describe("AuthedUser Slice", () => {
  const initialState = { authedUser: "" };

  it("handles initial data", () => {
    expect(authedUserReducer(undefined, { type: "unknown" })).toEqual({
      authedUser: "",
    });
  });

  it("sets authedUser", () => {
    const actual = authedUserReducer(initialState, setAuthedUser("testuser"));
    expect(actual.authedUser).toEqual("testuser");
  });

  it("logs out authedUser", () => {
    const actual = authedUserReducer({ authedUser: "testuser" }, logoutUser());
    expect(actual.authedUser).toEqual("");
  });
});
