import ConsultationItem from "./ConsultationItem";
import styles from "../../../styles/Consultation.module.scss";

export default function ConsultationsList(props) {
  const { consultations, consultationsHeader } = props;

  return (
    <section>
      <header className={styles.consultationsListHeader}>
        <span>{consultationsHeader}</span>
      </header>
      <ul className={styles.consultationsList}>
        {consultations.map((consultation, index) => (
          <ConsultationItem key={index} {...consultation} />
        ))}
      </ul>
    </section>
  );
}
