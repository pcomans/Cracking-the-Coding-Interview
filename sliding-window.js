// Solution to https://leetcode.com/problems/minimum-window-substring/description/hangouts.google.com/call/_GrasNrxTenqFzCP-M9iAAEE
// s: String, t: Array of String
var minWindow = function(s, t) {
  let startIdx = 0;
  let endIdx = 0;

  let bestLength = Number.MAX_VALUE;
  let bestStart = 0;
  let bestEnd = 0;

  let lookingCount = t.length;
  let looking = {};

  // Indicate how many times we are looking for each char in t
  t.forEach(c => {
    if (looking[c]) {
      looking[c]++;
    } else {
      looking[c] = 1;
    }
  });

  while (endIdx < s.length) {
    if (looking[s[endIdx]] > 0) {
      // We found a char that we were looking for
      lookingCount--;
    }
    //Decrement to indicate that we found that char
    looking[s[endIdx]]--;
    endIdx++;
    while (lookingCount == 0) {
      // We found one possible solution.
      // Narrow the window to look for a shorter substring
      if (endIdx - startIdx < bestLength) {
        bestLength = endIdx - startIdx;
        bestStart = startIdx;
        bestEnd = endIdx;
      }
      looking[s[startIdx]]++;
      if (looking[s[startIdx]] > 0) {
        // We no longer have a valid substring
        lookingCount++;
      }
      startIdx++;
    }
  }
  if (bestLength < Number.MAX_VALUE) {
    return s.slice(bestStart, bestEnd);
  } else {
    return "";
  }
};

module.exports = minWindow;