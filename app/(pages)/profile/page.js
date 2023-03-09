import { Suspense } from 'react';
import Image from '../../components/image';
import styles from './index.module.css';
import { createFetchData } from '../../utils';

const ProfileAddresses = async ({ id }) => {
  const fetchAddresses = createFetchData(`/addresses/${id}`);
  const addresses = await fetchAddresses();

  return (
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
    </div>
  );
}

const ProfileAddressesPlaceholder = () => {
  return (
    <div className={styles.addresses}>
      <address className={styles.address} />
      <address className={styles.address} />
      <address className={styles.address} />
      <address className={styles.address} />
    </div>
  );
}

const Profile = async () => {
  const fetchProfile = createFetchData(`/profile/`);
  const profile = await fetchProfile();

  return (
    <>
      <header className={styles['profile-heading']}>
        <Image src={profile.images.heading} loading="eager" width={1600} height={533} alt="Profile heading image" />
        <hgroup>
          <h2>¡Hello {profile.name}!</h2>
          <p>You have <span>{profile.points}</span> points</p>
        </hgroup>
        <picture className={styles["profile-icon"]}>
          <Image src={profile.images.portrait} width={200} height={300} alt={profile.name} />
        </picture>
      </header>
      <section className={styles['profile-content']}>
        <article className={styles['personal-data']}>
          <h3>Personal data</h3>
          <div className='card'>
            <p><strong>{`${profile.name} ${profile.surname}`}</strong> <label className="label">{profile.gender}</label></p>
            <time dateTime={profile.birthDate}>{Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date(profile.birthDate))}</time>
            <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <quote>{profile.resume}</quote>
          </div>
          <h3>Addresses</h3>
          <Suspense fallback={<ProfileAddressesPlaceholder />}>
            <ProfileAddresses id={profile.id} />
          </Suspense>
        </article>
      </section>
    </>
  );
};

export default Profile;
