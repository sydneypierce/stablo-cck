import PostPage from "./default";
import { db } from "@/lib/firebase/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

// 🔁 Replace getAllPostsSlugs with Firebase version
export async function generateStaticParams() {
  const snapshot = await getDocs(collection(db, "Recipes"));

  const slugs = snapshot.docs.map(doc => ({
    slug: doc.data().slug, // assuming slug is a string
  }));

  return slugs.map(slug => ({ slug: slug.slug }));
}

// 🔁 Replace getPostBySlug with Firebase version
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const q = query(
    collection(db, "Recipes"),
    where("slug", "==", slug)
  );
  const snapshot = await getDocs(q);

  const post = snapshot.docs[0]?.data();
  return { title: post?.title || "Recipe" };
}

// 🔁 Replace main page function
export default async function PostDefault({ params }) {
  const slug = params.slug;

  const q = query(
    collection(db, "Recipes"),
    where("slug", "==", slug)
  );
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return {
      notFound: true,
    };
  }

  const post = {
    _id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  };

  return <PostPage post={post} />;
}



/*import PostPage from "./default";

import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}*/

// export const revalidate = 60;
