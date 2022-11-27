import { useContext } from 'react';
import { NavigatonContext } from '../../contexts/navigation-context';
import Anchor from '../anchor';

const SECTIONS = [
  { name: 'Home', slug: '' },
  { name: 'Products', slug: 'products' },
  { name: 'Profile', slug: 'profile' }
];

const SidebarMenu = () => {
  const { pathname } = useContext(NavigatonContext);

  return (
    <nav id="sidebar-menu">
      <ul role="menu">
        {SECTIONS.map(({ name, slug }) => (
          <li key={slug}>
            <Anchor href={`/${slug}`} className={pathname === `/${slug}` ? 'active' : null}>
              {name}
            </Anchor>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export default SidebarMenu;