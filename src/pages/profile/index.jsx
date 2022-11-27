import styles from './index.module.css';
import Image from '../../components/image';

const portrait = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const background = 'https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enGB/Images/fw22-gravel-beginnersguide-header-d_143-911981.jpg'

const Profile = () => {
  return (
    <>
      <header className={styles['profile-heading']}>
        <Image src={background} alt={'Whatever'} />
        <hgroup>
          <h2>Welcome back Sam!</h2>
        </hgroup>
        <picture className={styles['profile-icon']}>
          <Image src={portrait} alt={'name'} />
        </picture>
      </header>
      <section>
        
      </section>
    </>
  )
}

export default Profile;