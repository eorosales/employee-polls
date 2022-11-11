import usersReducer, { saveNewQuestion, fetchUsers } from "./usersSlice";

describe("Users Slice", () => {
  const initialState = {
    users: [],
    usersStatus: "idle",
  };

  it("handles initial data correctly", () => {
    expect(usersReducer(undefined, { type: "unknown" })).toEqual({
      users: [],
      usersStatus: "idle",
    });
  });

  it("sets usersStatus to 'loading' when fetchUsers is pending", async () => {
    const actual = usersReducer(initialState, {
      type: fetchUsers.pending.type,
    });
    expect(actual).toEqual({ users: [], usersStatus: "loading" });
  });

  it("sets usersStatus to 'success' when fetchUsers is fulfilled", async () => {
    const actual = usersReducer(initialState, {
      type: fetchUsers.fulfilled.type,
      payload: { users: { id: 1, name: "testuser" } },
    });
    expect(actual).toEqual({
      users: { users: { id: 1, name: "testuser" } },
      usersStatus: "success",
    });
  });
});
