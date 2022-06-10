import { useState, useEffect } from "react";
import ConsultationsList from "../../components/consultation/sidebar/ConsultationsList";
import SidebarHeader from "../../components/consultation/sidebar/SidebarHeader";
import styles from "../../styles/Consultation.module.scss";

export default function SidebarContainer() {
  const [currentConsultation, setCurrentConsultation] = useState(null);
  const [upComingConsultations, setUpComingConsultations] = useState([]);
  const [consultationsHistory, setConsultationsHistory] = useState([]);

  useEffect(() => {
    Promise.resolve({
      avatar: "https://ui-avatars.com/api/?name=Room+1",
      title: "Room 1",
      date: "10/06/2022",
    }).then(setCurrentConsultation);

    Promise.resolve([
      {
        avatar: "https://ui-avatars.com/api/?name=Room+2",
        title: "Room 2",
        date: "09/06/2022",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+3",
        title: "Room 3",
        date: "06/06/2022",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+4",
        title: "Room 4",
        date: "01/06/2022",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+5",
        title: "Room 5",
        date: "09/05/2022",
      },
    ]).then(setUpComingConsultations);

    Promise.resolve([
      {
        avatar: "https://ui-avatars.com/api/?name=Room+6",
        title: "Room 6",
        date: "09/04/2022",
      },
      {
        avatar: "https://ui-avatars.com/api/?name=Room+7",
        title: "Room 7",
        date: "06/04/2022",
      },
    ]).then(setConsultationsHistory);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />
      {currentConsultation && (
        <ConsultationsList
          consultations={[currentConsultation]}
          consultationsHeader={"Now"}
        />
      )}
      <ConsultationsList
        consultations={upComingConsultations}
        consultationsHeader={"Up coming"}
      />
      <ConsultationsList
        consultations={consultationsHistory}
        consultationsHeader={"History"}
      />
    </aside>
  );
}
