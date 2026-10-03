import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "My Journey into React",
      author: "Raja Jadham",
      date: "October 1, 2026",
      description:
        "I started learning React and explored components, props, state and dynamic rendering.",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 2,
      title: "Why I Love Web Development",
      author: "Raja Jadham",
      date: "October 2, 2026",
      description:
        "Web development allows me to turn creative ideas into interactive and useful websites.",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 3,
      title: "Learning JavaScript",
      author: "Raja Jadham",
      date: "October 3, 2026",
      description:
        "JavaScript helped me understand programming logic, events, DOM manipulation and modern web development.",
      image: "https://picsum.photos/400/250?random=3",
    },
  ];

  return (
    <section id="blogs" className="blog-section">
      <h2>Latest Blogs</h2>

      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogList;