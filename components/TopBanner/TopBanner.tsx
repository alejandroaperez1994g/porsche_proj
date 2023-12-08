import { ReactNode } from 'react';
import styles from './TopBanner.module.css';

type Props = {
  children: ReactNode;
};

const TopBanner = ({ children }: Props) => {
  return <div className={styles.banner_container}>{children}</div>;
};

export default TopBanner;
