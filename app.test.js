import { test, expect } from "vitest";

import { isPalindrome, isPalindromeFast, isPalindromeMoreNormal } from "./app";

//function from vitest
test("check if string is palindrome", function () {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("racetrack")).toBe(false);
  expect(isPalindrome("lurkrul")).toBe(true);
  expect(isPalindrome("civic")).toBe(true);
});

test("check if string is palindrome fast method", function () {
  expect(isPalindromeFast("racecar")).toBe(true);
  expect(isPalindromeFast("racetrack")).toBe(false);
  expect(isPalindromeFast("lurkrul")).toBe(true);
  expect(isPalindromeFast("civic")).toBe(true);
});

test("check if string is palindrome alt method", function () {
  expect(isPalindromeMoreNormal("racecar")).toBe(true);
  expect(isPalindromeMoreNormal("racetrack")).toBe(false);
  expect(isPalindromeMoreNormal("lurkrul")).toBe(true);
  expect(isPalindromeMoreNormal("civic")).toBe(true);
});
