import React from "react";
import { Helmet } from "react-helmet";

export const Metadata = (props) => {
  const defaultValues = {
    title: "Your Project's Name",
    description: "Add default description here",
    thumbnail: "Add default thumbnail here",
    keywords: "default, keywords, here",
    author: "Default Author",
  };

  const metadata = {
    title: props.title || defaultValues.title,
    description: props.description || defaultValues.description,
    thumbnail: props.thumbnail || defaultValues.thumbnail,
    keywords: props.keywords || defaultValues.keywords,
    author: props.author || defaultValues.author,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <meta property="og:url" content={props.url || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.thumbnail} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.thumbnail} />
    </Helmet>
  );
};
