import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/app.module.css';

import Staking4 from '/public/staking4.png';

export const Footer = () => {
    return(
        <>
          {/* //footer */}
          <div className='my-5'>
            <div className={styles.main}>
              <div className='row justify-content-between'>
                <div class="col-md-4 col-lg-4 mb-3 mb-sm-0">
                    <Link href="/">
                        <Image priority src={Staking4} alt="staking_4" width="auto" height="30" className="d-inline-block" />
                    </Link>
                </div>
                <div class="col-md-4 col-lg-4 mb-3 mb-sm-0">
                    <p>Staking4 Latam</p>
                </div>
                <div class="col-md-4 col-lg-4 mb-3 mb-sm-0">
                    Acerca de
                </div>
              </div>
            </div>
          </div>
        </>
    );
}