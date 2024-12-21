# Unhandled Promise Rejections in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Asynchronous operations within request handlers often don't have comprehensive error handling, causing the server to silently fail. This example shows how to correctly handle such rejections to prevent unexpected behavior and ensure application stability.

## Bug Description:

The `bug.js` file contains an Express.js server with an asynchronous operation (`someAsyncOperation()`) inside a route handler.  This operation *could* throw an error, but the code lacks a `catch` block to handle potential rejections.  This results in the error being silently swallowed, leading to a malfunctioning server and potentially misleading logs.

## Solution:

The `bugSolution.js` file provides a corrected version with proper error handling.  It uses a `catch` block to handle potential rejections gracefully, providing better diagnostics and application robustness.

## How to reproduce the bug:

1.  Run `node bug.js`.
2.  Simulate an error in `someAsyncOperation()` (e.g., by making it throw an exception).
3.  Observe the lack of error messages and server malfunction.

## How to test the solution:

1.  Run `node bugSolution.js`.
2.  Simulate an error in `someAsyncOperation()`.
3.  Observe how the error is handled and reported (e.g., to the console).

This example highlights the importance of robust error handling in asynchronous Express.js applications.  Always ensure that promises are handled properly, preventing silent failures and improving application reliability.