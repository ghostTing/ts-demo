import objectTool from "../src/index";

describe("objectTool", () => {
  it("deeply copy {a: 0}", () => {
    expect(objectTool.deepCopy({a: 0})).toEqual({a: 0});
  });
  it("should deepCopy({a: 0})返回的对象内存地址不同", () => {
    expect(objectTool.deepCopy({a: 0})).not.toBe({a: 0});
  });
});
