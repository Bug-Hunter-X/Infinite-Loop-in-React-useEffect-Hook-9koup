```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count updated:', count);
    // Return a cleanup function if needed
    return () => {
      console.log('Component unmounting');
    };
  }, []); // Empty dependency array: effect runs only once after mount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```