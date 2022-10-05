import { isValid } from "../src/utils";

describe("isValid", () => {
  test("should return false if given an undefined value", () => {
    expect(isValid(undefined)).toEqual(false);
  });
  test("should return false if given a null value", () => {
    expect(isValid(null)).toEqual(false);
  });
  test("should return true if given a number", () => {
    expect(isValid(1)).toEqual(true);
  });
  test("should return true if given a string", () => {
    expect(isValid("hello")).toEqual(true);
  });
  test("should return true if given an array", () => {
    expect(isValid([1, 2, 3])).toEqual(true);
  });
  test("should return true if given a valid object", () => {
    expect(isValid({ name: "mike" })).toEqual(true);
  });
  test("should return true if given a empty object", () => {
    expect(isValid({})).toEqual(true);
  });
});
