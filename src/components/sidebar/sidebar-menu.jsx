import { useContext } from 'react';
import { NavigatonContext } from '../../contexts/navigation-context';
import Anchor from '../anchor';

const SECTIONS = [
  { name: 'Products', slug: 'products' },
  { name: 'Contact', slug: 'contact' },
  { name: 'Posts', slug: 'posts' },
  { name: 'Profile', slug: 'profile'}
];

const SidebarMenu = () => {
  const { pathname } = useContext(NavigatonContext);
  return (
    <ul role="menu">
      {SECTIONS.map(({ name, slug }) => (
        <li key={slug}>
          <Anchor href={`/${slug}`} className={pathname === `/${slug}` ? 'active' : null }>
            {name}
          </Anchor>
        </li>
      ))}
    </ul>
  )
}


export default SidebarMenu;