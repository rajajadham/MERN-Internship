function BlogCard(props) {
  return (
    <article className="blog-card">
      <img
        src={props.image}
        alt={props.title}
        className="blog-image"
      />

      <div className="blog-content">
        <h3>{props.title}</h3>

        <p className="blog-author">
          By {props.author} • {props.date}
        </p>

        <p>{props.description}</p>

        <button>Read More</button>
      </div>
    </article>
  );
}

export default BlogCard;