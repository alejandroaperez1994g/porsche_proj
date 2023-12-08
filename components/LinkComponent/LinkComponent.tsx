import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './LinkComponent.module.css';

type Props = {
  icon: ReactNode;
  title: string;
  href: string;
};

const LinkComponent = ({ icon, title, href }: Props) => {
  return (
    <Link href={href} className={styles.link_container}>
      {icon}
      {title}
    </Link>
  );
};

export default LinkComponent;
