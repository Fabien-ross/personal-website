import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import "./TextColumn.css";

function TextColumn({ className, title, author, description, children }) {
  return (
    <section className={className}>
      <div className="col-text-content">

        {title?.trim() && (
          <p className="title">{title}</p>
        )}

        {author?.trim() && (
          <p className="author">{author}</p>
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

      </div>
    </section>
  );
}

export default TextColumn;