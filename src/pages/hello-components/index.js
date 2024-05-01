import dynamic from 'next/dynamic';

import styles from '@/styles/app.module.css';
import { DocsCard, HelloNearCard } from '@/components/cards';
import { Components } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});


export default function HelloComponents() {
  return (
    <>
      <main className={styles.main}>
        {/* <div className={styles.description}>
          <p>
            Loading components from: &nbsp;
            <code className={styles.code}>{Components.socialDB}</code>
          </p>
        </div> */}
       
        <div className="row justify-content-center">
          <div className="col-10">
            <Component src={Components.HelloNear} />
          </div>
        </div>
        <hr />

      </main>
    </>
  );
}
