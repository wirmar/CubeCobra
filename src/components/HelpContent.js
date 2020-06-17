import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'reactstrap';
import commonmark from 'commonmark';

const reader = new commonmark.Parser({ smart: true });
const writer = new commonmark.HtmlRenderer({ safe: true });

const helpContent = ({ pageFileName }) => {
  const [markdown, setMarkdown] = useState('Loading...');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(`/content/help/${pageFileName}`);
      const md = await response.text();
      setMarkdown(md);
    };
    fetchMarkdown();
  }, [setMarkdown]);

  const parsed = reader.parse(markdown);
  const html = writer.render(parsed);

  return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
};

export default helpContent;
