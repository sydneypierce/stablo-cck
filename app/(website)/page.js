import HomePage from "./home";
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function IndexPage() {
  const snapshot = await getDocs(collection(db, "Recipes"));

  const posts = snapshot.docs.map(doc => ({
    _id: doc.id,
    ...doc.data()
  }));

  return <HomePage posts={posts} />;
}

/*
import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
*/