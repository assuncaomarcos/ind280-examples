import styles from "./page.module.css";
import {TodoList} from "@/components/TodoList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <TodoList/>
      </main>
    </div>
  );
}