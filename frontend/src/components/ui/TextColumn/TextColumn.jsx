import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

import "./TextColumn.css";

function TextColumn({ className, title, author, description, children }) {
  return (
    <section className={className}>
      <div className="col-text-content">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="description">
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {description}
          </ReactMarkdown>
        </div>
        <div>
          {children && <div className="other">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export default TextColumn;