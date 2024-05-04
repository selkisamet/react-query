import { useQuery } from "react-query";
import "./App.css";

function App() {

  // https://jsonplaceholder.typicode.com/posts
  const fetchData = useQuery(["posts"], () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
  }
  );

  const { data, isLoading } = fetchData;

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {
        data.map((value, index) => (
          <div key={index}>{value.title}</div>
        ))
      }
    </div>
  )
}

export default App;
