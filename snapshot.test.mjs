import { expect, it } from "vitest";

it("should use custom serializer correctly", () => {
  expect.addSnapshotSerializer({
    serialize(val) {
      return "hi";
    },
    test(val) {
      return true;
    },
  });
  expect("hello").toMatchInlineSnapshot(`hi`);
  expect("hello").toMatchFileSnapshot("snapshot.txt");
});
