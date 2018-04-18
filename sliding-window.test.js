const minWindow = require("./sliding-window");
test("get the shortest substring that contains all characters of an alphabet", () => {
  /*
  Input: "aabbcb"
  Alphabet: {'a', 'b', 'c'}
  Output: "abbc"
  */
  expect(minWindow("aabbcb", ["a", "b", "c"])).toBe("abbc");

  /*
  Input: "aaaaaaaaaabbbbbbbbccccccccsbabbbccc"
  Alphabet: {'a', 'b', 'c'}
  Output: "csba"
  */
  expect(
    minWindow("aaaaaaaaaabbbbbbbbccccccccsbabbbccc", ["a", "b", "c"])
  ).toBe("csba");
  /*

  Input: "aaaaaaaaaabbbbbbbbccccccccsbabbbccc"
  Alphabet: {'a', 'b', 'c', 'f'}
  Output: ""
  */
  expect(
    minWindow("aaaaaaaaaabbbbbbbbccccccccsbabbbccc", ["a", "b", "c", "f"])
  ).toBe("");

  expect(minWindow("ADOBECODEBANC", ["A", "B", "C"])).toBe("BANC");

  expect(minWindow("aa", ["a", "a"])).toBe("aa");
});
