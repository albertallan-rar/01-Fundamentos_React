import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
