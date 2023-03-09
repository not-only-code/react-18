'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { onStart, useOnComplete } from '../../router-events';


const SECTIONS = [
  { name: 'Home', slug: '' },
  { name: 'Products', slug: 'products' },
  { name: 'Profile', slug: 'profile' }
];

const SidebarMenu = () => {
  const pathname = usePathname();
  useOnComplete();

  return (
    <nav id="sidebar-menu">
      <ul role="menu">
        {SECTIONS.map(({ name, slug }) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              onClick={() => pathname !== `/${slug}` && onStart()}
              className={pathname === `/${slug}` ? 'active' : null} prefetch={false}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export default SidebarMenu;