import axios from "axios";

const PeopleAPI = {
  get: () =>
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
    }),
};
export default PeopleAPI;
