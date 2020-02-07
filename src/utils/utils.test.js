const { uniqueArrays } = require("./utils");

describe.only("unique Arrays", () => {
  it("should identify two unique arrays with two items", () => {
    expect(
      uniqueArrays([
        [0, 1, 2],
        [0, 1, 1]
      ])
    ).toBe(2);
  });
  it("should identify two unique arrays with multiple items", () => {
    expect(
      uniqueArrays([
        [0, 1, 2, 3, 4, 5],
        [0, 1, 1, 3, 4, 5]
      ])
    ).toBe(2);
  });
  it("should identify multiple unique arrays with multiple items", () => {
    expect(
      uniqueArrays([
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 1, 3, 4, 5],
        [0, 1, 1, 1, 2, 3, 3, 4, 5],
        [0, 1, 1, 3, 4, 4, 4, 4, 5]
      ])
    ).toBe(4);
  });
});
