import addTwo from "./adder";

describe("adder", function(){
  it("should return 4", function(){
    expect(addTwo(2)).toBe(4);
  });
})
