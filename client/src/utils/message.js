import { message as _message } from "antd";

const message = (toDisplay) => {
  _message.success(toDisplay);
};

export default message;
