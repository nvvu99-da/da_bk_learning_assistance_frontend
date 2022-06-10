import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";
import autosize from "autosize";
import styles from "../../../styles/Consultation.module.scss";

export default function MessageForm(props) {
  const { handlerSubmit } = props;
  const messageInputRef = useRef();

  useEffect(() => {
    autosize(messageInputRef.current);
  }, []);

  return (
    <form className={styles.messageForm} onSubmit={handlerSubmit}>
      <Icon icon="ic:baseline-photo" />
      <Icon icon="fluent:attach-12-filled" />
      <Icon icon="fluent:emoji-20-filled" />

      <textarea
        name="content"
        rows="1"
        className={styles.messageInput}
        ref={messageInputRef}
      />
    </form>
  );
}
