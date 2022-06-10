import { useEffect, useState } from "react";
import ConsultationContent from "../../components/consultation/main/ConsultationContent";
import ConsultationHeader from "../../components/consultation/main/ConsultationHeader";
import MessageForm from "../../components/consultation/main/MessageForm";
import styles from "../../styles/Consultation.module.scss";

export default function MainContainer() {
  const consultation = {
    avatar: "https://ui-avatars.com/api/?name=Room+1",
    title: "Room 1",
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    Promise.resolve([
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+1",
        content: "A test message",
        time: "13:18",
      },
    ]).then(setMessages);
  }, []);

  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className={styles.main}>
      <ConsultationHeader {...consultation} />
      <ConsultationContent messages={messages} />
      <MessageForm handlerSubmit={handlerSubmit} />
    </main>
  );
}
