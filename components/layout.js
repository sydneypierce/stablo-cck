"use client";

import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import Footer from "@/components/footer";
import { cx } from "@/utils/all";

export default function Layout(props) {
  const { children } = props;

  // Use the provided image URL directly
  const ogimage = props?.openGraphImage || "";

  return (
    <>
      <Head>
        {/* ✅ You can remove Sanity preconnects */}
      </Head>

      {/* SEO Meta Tags */}
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
        twitter={{
          handle: "@yourhandle",
          site: "@yourhandle",
          cardType: "summary_large_image"
        }}
      />

      <div
        className={cx(
          props?.fontStyle,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}
      >
        {/* Conditional navbar choice */}
        {props.alternate ? <NavbarAlt {...props} /> : <Navbar {...props} />}

        <main>{children}</main>

        <Footer {...props} />
      </div>
    </>
  );
}

