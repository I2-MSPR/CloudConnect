import "./App.css";
import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: string;
  title: string;
};

const fetchGroups = (): Promise<Todo[]> =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchGroups,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <ul>
      {data?.map((todo: Todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
export default App;
