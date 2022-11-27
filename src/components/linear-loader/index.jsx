import styles from './index.module.css';

const LinearLoader = ({ className }) => {
  return (
    <div className={[styles['linear-loader'], className].join(' ')}>
      <span className={styles['first-line']} />
      <span className={styles['second-line']} />
    </div>
  )
}

export default LinearLoader;