import styles from "../../../styles/Consultation.module.scss";
import Message from "./Message";

export default function ConsultationContent(props) {
  const { messages } = props;

  return (
    <div className={styles.consultationContent}>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
}
