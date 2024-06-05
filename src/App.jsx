import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "./user_post_picture.jpg",
      name: "Albert Allan",
      role: "Estudante Rocketseat One",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "./user_post_picture.jpg",
      name: "Lucas Santos",
      role: "Estagiario Rocketseat One",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 2 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-19 19:40:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </>
  );
}
