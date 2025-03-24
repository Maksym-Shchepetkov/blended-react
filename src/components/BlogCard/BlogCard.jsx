import styles from './BlogCard.module.css';
import { formatDistanceToNow } from 'date-fns';

const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardPoster} src={poster} alt="food" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img className={styles.avatar} src={avatar} alt={name} />
          <div>
            <h3 className={styles.userName}>{name}</h3>
            <small className={styles.date}>
              {formatDistanceToNow(postedAt)} ago
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
