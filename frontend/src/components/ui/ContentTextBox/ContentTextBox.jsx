import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import "./ContentTextBox.css";

export default function ContentTextBox({ 
  className, 
  title, 
  author, 
  description, 
  children, 
  dark = false,
}) {

  return (
    <section
      className={className}
      style={{
        "--background-color": dark ? "#1a1a1a" : "white",
        "--text-color": dark ? "white" : "#1a1a1a",
        }}     
    >
        {title?.trim() && (
          <h1 className="title">{title}</h1>
        )}

        {author?.trim() && (
          <h2 className="author">{author}</h2>
        )}

        {description?.trim() && (
          <div className="description">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {description}
            </ReactMarkdown>
          </div>
        )}

        {children && (
          <div className="other">
            {children}
          </div>
        )}

    </section>
  );
}