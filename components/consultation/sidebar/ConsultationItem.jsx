import Image from "next/image";
import styles from "../../../styles/Consultation.module.scss";

export default function ConsultationItem(props) {
  const { avatar, title, date } = props;

  return (
    <li className={styles.consultationItem}>
      <Image
        src={avatar}
        alt="Avatar"
        width={styles.consultationAvatarWidth}
        height={styles.consultationAvatarHeight}
        className={styles.consultationAvatar}
      />
      <h3 className={styles.consultationTitle}>{title}</h3>
      <p className={styles.consultationDate}>{date}</p>
    </li>
  );
}
