const App = () => {
  const name = "Thomas";
  const x = 10;
  const y = 20;
  const frutes = ["apple", "banana", "orange"];

  const loggedIn = true;
  const styles = {
    color: "red",
    fontSize: "150px",
  };
  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles} className="text-5xl">
        Hello {name}
      </p>
      <p className="text-5xl">
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {frutes.map((fruit, i) => (
          <li key={i}>
            {i} {fruit}
          </li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  );
};

export default App;
