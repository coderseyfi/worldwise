import Sidebar from "../components/components/Sidebar";
import styles from "./Applayout.module.css";
import Map from "../components/components/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
