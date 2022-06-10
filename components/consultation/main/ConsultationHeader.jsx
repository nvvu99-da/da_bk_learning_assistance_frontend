import Image from "next/image";
import styles from "../../../styles/Consultation.module.scss";

export default function ConsultationHeader(props) {
  const { avatar, title } = props;

  return (
    <div className={styles.consultationHeader}>
      <div className={styles.consultationHeaderAvatar}>
        <Image src={avatar} alt={"avatar"} width={64} height={64} />
      </div>
      <h3 className={styles.consultationHeaderTitle}>{title}</h3>
    </div>
  );
}
