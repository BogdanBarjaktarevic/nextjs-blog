export const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
