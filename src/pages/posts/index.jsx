import useSWR from 'swr';
import Image from '../../components/image';
import styles from './index.module.css';

const { VITE_API_URL } = import.meta.env;

const Post = ({ post }) => (
  <article className={styles.post} title={post.heading}>
    <aside>
      <Image src={post.image} alt={post.heading} />
    </aside>
    <section>
      <time dateTime={post.date}>
        {Intl.DateTimeFormat('en-GB', {dateStyle: 'medium'}).format(new Date(post.date))}
      </time>
      <h3 className={styles.heading}>{post.heading}</h3>
      <p className={styles.summary}>{post.summary}</p>
    </section>
  </article>
);

const Posts = () => {
  const { data: posts } = useSWR(`${VITE_API_URL}/posts`);

  return (
    <>
      <header>
        <h2>Latest Adidas news!</h2>
      </header>
      <div className={styles.posts}>
        {posts.map(post => <Post key={post.image} post={post} />)}
      </div>
    </>
  )
}

export default Posts;