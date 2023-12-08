'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import {
  User,
  MapPin,
  Gauge,
  MagnifyingGlass,
  BagSimple,
  List,
} from '@phosphor-icons/react';
import LinkComponent from '../LinkComponent/LinkComponent';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_side}>
        <LinkComponent title="My Porsche" href="/" icon={<User size={25} />} />
        <LinkComponent
          title="Find a Dealer"
          href="/dealer"
          icon={<MapPin size={25} />}
        />
        <LinkComponent
          title="Models"
          href="/models"
          icon={<Gauge size={25} />}
        />
      </div>

      <Image
        src="/assets/logo/porsche_logo.png"
        alt="Porsche Logo"
        width={75}
        height={75}
        style={{ objectFit: 'contain' }}
      />
      <div className={styles.header_side}>
        <LinkComponent
          title="Search"
          href="/search"
          icon={<MagnifyingGlass size={25} />}
        />
        <LinkComponent
          title="Shop"
          href="/shop"
          icon={<BagSimple size={25} />}
        />
        <LinkComponent title="Menú" href="/menu" icon={<List size={25} />} />
      </div>
    </div>
  );
};

export default Header;
