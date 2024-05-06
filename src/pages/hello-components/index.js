import dynamic from 'next/dynamic';

import styles from '@/styles/app.module.css';
import { Components } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), {
  ssr: false,
  loading: () => <p>Loading Component...</p>,
});


export default function HelloComponents() {
  return (
    <>
      <main className={styles.main}>
        <div className="row justify-content-center">
          <div className="col-10">
            <Component src={Components.MetaPool} />
          </div>
        </div>
        <hr />

      </main>
    </>
  );
}
