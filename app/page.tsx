
import { Header } from '@/components';
import styles from './page.module.css';
import TopBanner from '@/components/TopBanner/TopBanner';


export default function Home() {
  return (
    <main className={styles.main}>

        <TopBanner>
          <Header />
          <div
            style={{
              height: '300px',
              width: '100vw',
              background: 'linear-gradient(transparent 0%, black 75%)',
            }}
          ></div>
        </TopBanner>

    </main>
  );
}

function onRender(
  id: any,
  phase: any,
  actualDuration: any,
  baseDuration: any,
  startTime: any,
  commitTime: any
) {
  // Aggregate or log render timings...
  console.log(
    `id: ${id}, phase, actualDuration: ${actualDuration}, baseDuration, startTime, commitTime`
  );
}
