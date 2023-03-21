import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="">
      <span>Hello!</span>
      <h1 className="bg-green-600 text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <button
          className="bg-blue-600 text-white"
          type="button"
          onClick={(e) => setCount(count + 1)}
        >
          count is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
