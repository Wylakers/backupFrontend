import axios from "axios";

const getAll = async () => {
  return await axios.get("http://localhost:8000/anp");
};

const getOne = async (id) => {
  return await axios.get(`http://localhost:8000/anp/${id}`);
};

const Anp = { getAll, getOne };

export default Anp;
