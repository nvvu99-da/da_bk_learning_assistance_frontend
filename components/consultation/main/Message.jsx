import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "../../../styles/Consultation.module.scss";

export default function Message(props) {
  const { avatar, content, time } = props;

  return (
    <article className={styles.message}>
      <Image src={avatar} alt={avatar} width="40" height="40" />
      <p className={styles.messageContent}>{content}</p>
      <div className={styles.messageTime}>
        <Icon icon="bytesize:clock" color="#495057" height="14" />
        <p>{time}</p>
      </div>
    </article>
  );
}
