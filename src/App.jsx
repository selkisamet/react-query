import { useQuery } from "react-query";
import "./App.css";

function App() {
  const fetchData = useQuery(["posts"], () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
  }, {
    enabled: false
  });

  const { data, isLoading, refetch } = fetchData;

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data, isLoading);

  return (
    <div>
      <button onClick={() => refetch()}>Veri Çek</button>
      <div>
        {
          data && data.map((value, index) => (
            <div key={index}>{value.title}</div>
          ))
        }
      </div>
    </div>
  )
}

export default App;
