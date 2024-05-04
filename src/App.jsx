import { useMutation, useQuery } from "react-query";
import "./App.css";

function App() {
  // https://jsonplaceholder.typicode.com/users

  const { data, reset, mutate, isLoading } = useMutation(["users"], (newPost) => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json());
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log("mutation data: ", data);

  return (
    <div>
      <button onClick={() => mutate({ userId: 1, title: "Test", body: "Merhaba Test" })}>Veri Ekle</button>
      <button onClick={() => reset()}>Veri Sil</button>
    </div>
  )
}

export default App;
