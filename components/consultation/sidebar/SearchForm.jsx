import { Icon } from "@iconify/react";
import styles from "../../../styles/Consultation.module.scss";

export default function SearchForm(props) {
  const { handlerSubmit } = props;

  return (
    <form className={styles.searchForm} onSubmit={handlerSubmit}>
      <input type="search" name="query" className={styles.searchInput} />
      <button type="submit" className={styles.searchSubmitButton}>
        <Icon icon="fa:search" />
      </button>
    </form>
  );
}
