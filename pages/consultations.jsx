import MainContainer from "../containers/consultation/MainContainer";
import SidebarContainer from "../containers/consultation/SidebarContainer";
import styles from "../styles/Consultation.module.scss";

export default function Consultations() {
  return (
    <div className={styles.page}>
      <SidebarContainer />
      <MainContainer />
    </div>
  );
}
