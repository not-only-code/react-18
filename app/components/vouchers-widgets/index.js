import styles from './index.module.css';
import Image from '../image';
import { createFetchData } from '../../utils';

const Voucher = ({ discount, code, expirationDate }) => {
  return (
    <article className={styles.voucher}>
      <header>
        Voucher
        <br />
        {`${discount}% off`}
      </header>
      <code>{code}</code>
      <time>
        {Intl.DateTimeFormat("en-GB", { dateStyle: "short" }).format(
          new Date(expirationDate)
        )}
      </time>
      <Image src='/adiclub.svg' width={160} height={66} className={styles.logo} />
    </article>
  );
};

const Vouchers = async () => {
  const fetchVouchers = createFetchData(`/vouchers/sidebar`);
  const vouchers = await fetchVouchers();

  return (
    <div id="widget-vouchers" className={styles.vouchers}>
      {vouchers.map((voucher) => <Voucher key={voucher.code} {...voucher} />)}
    </div>
  );
};

export default Vouchers