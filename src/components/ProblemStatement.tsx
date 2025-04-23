import React from 'react';

const ProblemStatement: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold">Longest Substring Without Repeating Characters</h2>
    <p className="mt-2">Given a string, find the length of the longest substring without repeating characters.</p>
    <h3 className="mt-4 font-semibold">Input Format</h3>
    <p>A string consisting of printable ASCII characters.</p>
    <h3 className="mt-2 font-semibold">Output Format</h3>
    <p>An integer representing the length of the longest substring without repeating characters.</p>
    <h3 className="mt-2 font-semibold">Constraints</h3>
    <p>0 ≤ string.length ≤ 50,000</p>
    <h3 className="mt-2 font-semibold">Sample Input 1</h3>
    <pre>abcabcbb</pre>
    <h3 className="mt-2 font-semibold">Sample Output 1</h3>
    <pre>3</pre>
    <p className="mt-1">Explanation: The longest substring without repeating characters is "abc" with length 3.</p>
    <h3 className="mt-2 font-semibold">Sample Input 2</h3>
    <pre>bbbbb</pre>
    <h3 className="mt-2 font-semibold">Sample Output 2</h3>
    <pre>1</pre>
    <p className="mt-1">Explanation: The longest substring without repeating characters is "b" with length 1.</p>
    <h3 className="mt-2 font-semibold">Sample Input 3</h3>
    <pre>pwwkew</pre>
    <h3 className="mt-2 font-semibold">Sample Output 3</h3>
    <pre>3</pre>
    <p className="mt-1">Explanation: The longest substring without repeating characters is "wke" or "kew" with length 3.</p>
  </div>
);

export default ProblemStatement;