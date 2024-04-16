import { io as socketIO } from "socket.io-client";

export const connectToSocket = () => {
  const URL = `http://46.37.194.186:5001/`; // тут должен быть ip веб сокет
  const socket = socketIO(URL);
  return socket
};