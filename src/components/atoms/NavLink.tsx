import React from 'react';
import { Link } from '@chakra-ui/react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} mx={2}>
      {children}
    </Link>
  );
};

export default NavLink;
