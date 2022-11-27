import { Suspense } from 'react';
import useSWR from 'swr';
import Image from '../../components/image';
import { ReactComponent as AdiClubLogo } from '../../assets/adiclub.svg';
import styles from './index.module.css';
import Loading from '../../components/loading';

const { VITE_API_URL } = import.meta.env;

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
      <AdiClubLogo className={styles.logo} />
    </article>
  );
};

const Vouchers = ({ id }) => {
  const { data: vouchers } = useSWR(`${VITE_API_URL}/vouchers/${id}`);

  return (
    <>
      <h3>Your current vouchers</h3>
      <div className={styles.vouchers}>
        {vouchers.map((voucher) => <Voucher key={voucher.code} {...voucher} />)}
      </div>
    </>
  );
};

const ProfileAddresses = ({ id }) => {
  const { data: addresses } = useSWR(`${VITE_API_URL}/addresses/${id}`);

  return (
    <>
      <div className={styles.addresses}>
        {addresses.map(addr => (
          <address key={`${addr.fullName}-${addr.phoneNumber}`} className={styles.address}>
            <strong>{addr.fullName}</strong>
            <p>{addr.direction}</p>
            <p>{addr.extraDirection}</p>
            <p>{[addr.city, addr.postCode, addr.countryCode].join(', ')}</p>
            <p><a href={`tel:${addr.phoneNumber}`}>{addr.phoneNumber}</a></p>
          </address>
        ))}
      </div><br/>
      <Suspense fallback={'LOADING....'}>
        <Vouchers id={id} />
      </Suspense>
    </>
  );
}

const Profile = () => {
  const { data: profile } = useSWR(`${VITE_API_URL}/profile`);

  return (
    <>
      <header className={styles['profile-heading']}>
        <Image src={profile.images.heading} alt="Profile heading image" />
        <hgroup>
          <h2>¡Hello {profile.name}!</h2>
          <p>You have <span>{profile.points}</span> points</p>
        </hgroup>
        <picture className={styles["profile-icon"]}>
          <Image src={profile.images.portrait} alt={profile.name} />
        </picture>
      </header>
      <section className={styles['profile-content']}>
        <article className={styles['personal-data']}>
          <h3>Personal data</h3>
          <div className='card'>
            <p><strong>{`${profile.name} ${profile.surname}`}</strong> <label className="label">{profile.gender}</label></p>
            <time dateTime={profile.birthDate}>{Intl.DateTimeFormat('en-GB', {dateStyle: 'medium'}).format(new Date(profile.birthDate))}</time>
            <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <quote>{profile.resume}</quote>
          </div>
          <h3>Addresses</h3>
          <Suspense fallback={<Loading />}>
            <ProfileAddresses id={profile.id} />
          </Suspense>
        </article>
      </section>
    </>
  );
};

export default Profile;
