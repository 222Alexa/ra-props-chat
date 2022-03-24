import Message from "./MessagesTypes/Message";
import Response from "./MessagesTypes/Response";
import Typing from "./MessagesTypes/Typing";

export default function AssistiveMessages(props) {
  console.log(props);
  if (!props.length) {
    return null;
  }

  console.log(props.type);

  if (props.type === "message") {
    return <Message msg={props} />;
  } else if (props.type === "response") {
    return <Response msg={props} />;
  } else {
    return <Typing msg={props} />;
  }
}
