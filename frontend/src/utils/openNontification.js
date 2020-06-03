import { notification } from "antd";

export default (message, description) => {
  notification[type]({
    message,
    description,
    duration: 2,
  });
};
