import "./ImageColumn.css";

function ImageColumn({alt, image, className}) {
  return (
    <section className={className}>
      <img className={alt} src={image} alt={alt} />
    </section>
  );
}

export default ImageColumn;