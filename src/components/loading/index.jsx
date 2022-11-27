import styles from './index.module.css';

const Loading = () => (
  <div className={styles.loading}>
    <svg fill="none" viewBox="0 0 66 66">
      <circle cx="33" cy="33" fill="none" r="28" stroke="rgba(0, 0, 0, 0.44)" strokeWidth="4"></circle>
      <circle cx="33" cy="33" fill="none" r="28" stroke="currentColor" strokeDasharray="40, 134" strokeDashoffset="325" strokeLinecap="round" strokeWidth="4" className={styles.circle}></circle>
    </svg>
  </div>
);

export default Loading;
