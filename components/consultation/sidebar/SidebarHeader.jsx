import SearchForm from "./SearchForm";
import styles from "../../../styles/Consultation.module.scss";

export default function SidebarHeader(props) {
  const { handlerSubmit } = props;

  return (
    <section className={styles.sidebarHeader}>
      <div className={styles.logo}>Logo here</div>
      <SearchForm handlerSubmit={handlerSubmit} />
    </section>
  );
}
