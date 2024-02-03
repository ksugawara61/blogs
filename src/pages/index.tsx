export const title = "Myブログ";
export const layout = "layout.vto";

export default ({ title, search }: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {search.pages("post", "date=desc").map((post) => (
          <li>
            <a href={helpers.url(post.page.src.path)}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
