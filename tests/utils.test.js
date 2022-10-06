import { isValid } from "../src/utils";

test("should return false for undefined", () => {
  expect(isValid(undefined)).toEqual(false);
});
