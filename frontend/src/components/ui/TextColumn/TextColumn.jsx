
import "./TextColumn.css";

function TextColumn({ className, title, author, description, other }) {
  return (
    <section className={className}>
      <div className="col-text-content">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="description">
          {description.split(/\r\n\r\n/).map((stanza, i) => (
            <p className="stanza" key={i}>
              {stanza.split(/\r\n/).map((line, j) => (
                <span key={j}>
                  {line.trim()}
                  <br />
                </span>
              ))}
            </p>
          ))}
        </div>
        {other && <div className="other">{other}</div>}
      </div>
    </section>
  );
}

export default TextColumn;