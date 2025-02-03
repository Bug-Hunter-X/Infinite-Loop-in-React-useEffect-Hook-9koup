# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop. The bug arises when the `useEffect`'s dependency array is incorrect, causing the effect to run repeatedly and trigger unwanted re-renders.

## Bug Description:

The `MyComponent` function uses `useEffect` to log the current `count` value to the console. However, incrementing `count` inside the `useEffect` creates a loop. Every change to `count` triggers a re-render, causing `useEffect` to execute again, further incrementing `count`. 

## Solution:

The solution involves correctly managing the dependency array in the `useEffect` hook.  The dependency array should only include state variables or props that, when changed, require the effect to run. In this case, the effect should only run once after the component mounts.