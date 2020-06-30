import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
  console.log(response.data);
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The TODO : ${id}
  HAs finished: ${completed},
  the Title: ${title}`);
};
