import React from "react";
import { Helmet } from "react-helmet";

export const Metadata = (props) => {
  // Define default values
  const defaultValues = {
    title: "Your Project's Name",
    description: "Add default description here",
    author: "Default Author",
    keywords: "Add default keywords here",
    thumbnail: "Add default thumbnail here",
  };

  // Merge props with default values
  const metadata = {
    title: props.title || defaultValues.title,
    description: props.description || defaultValues.description,
    author: props.author || defaultValues.author,
    keywords: props.keywords || defaultValues.keywords,
    thumbnail: props.thumbnail || defaultValues.thumbnail,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={props.url || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.thumbnail} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={props.url ? new URL(props.url).hostname : window.location.hostname} />
      <meta name="twitter:url" content={props.url || window.location.href} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.thumbnail} />
    </Helmet>
  );
};
