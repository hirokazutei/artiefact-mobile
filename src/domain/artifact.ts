// import env from "../env";

export const signIn = ({
  username,
  password
}: {
  username: string;
  password: string;
}): Promise<any> => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "post",
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
};
