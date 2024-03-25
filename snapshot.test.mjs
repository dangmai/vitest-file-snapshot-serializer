import { it } from "vitest";

it("should use custom serializer correctly", async ({ expect }) => {
  expect.addSnapshotSerializer({
    serialize(val) {
      return "hi";
    },
    test(val) {
      return true;
    },
  });
  expect("hello").toMatchInlineSnapshot(`hi`);
  await expect("hello").toMatchFileSnapshot("snapshot.txt");
});
