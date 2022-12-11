import axios from "axios";

const post = async (request) => {
  return await axios.post("http://localhost:8000/pago", request);
};

const sendEmail = async (request) => {
  return await axios.post("http://localhost:8000/send-email", request);
};

const Pago = { post, sendEmail };

export default Pago;
