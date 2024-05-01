import Image from 'next/image';

import NearLogo from '/public/near.svg';
import TextBanner from '/public/banner.png';
import Hero from '/public/hero.png';
import Sepparator from '/public/milky_way.png';
import styles from '@/styles/app.module.css';
import { DocsCard, HelloComponentsCard, HelloNearCard } from '@/components/cards';
import { Carousel } from '@/components/carousel';

export default function Home() {
  return (
    <main className={styles.main}>
     <>
      <div className='row justify-content-evenly'>
        <div class="col-md-4 col-lg-4 mb-3 mb-sm-0">
          <div class="card-body">
            <Image priority src={TextBanner} alt="banner" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />
          </div>
          <div className='mt-5'>
            <button type="button" class="btn btn-danger mx-2">Stake</button>
            <button type="button" class="btn btn-outline-danger text-light">Conoce Mas</button>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 mb-3 mb-sm-0" />
         
        <div class="col-md-4 col-lg-4">
            <div class="card-body">
            <Image priority src={Hero} alt="hero" width="auto" height="310" className="pt-4 d-inline-block align-text-top" />
            </div>
        </div>
      </div>
     </>

      <div className='container-fluid'>
        <Image priority src={Sepparator} alt="milky_way" width="auto" height="210" className="pt-1 d-inline-block align-text-top" />
      </div>

      <div className='d-flex w-60 justify-content-center'>
      <h1 className="display-1 ms-2 me-3 text-light text-center">
        <p className="text-center text-light fs-6">
          Staking Facil Y Seguro Para Todas y Todos
        </p>
          Explorar Staking 
      </h1>
      </div>
      <div className={styles.center}>
        <HelloComponentsCard />
      {/* <Image
          className={styles.logo}
          src={NearLogo}
          alt="NEAR Logo"
          width={110 * 1.5}
          height={28 * 1.5}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
        <h3 className='display-5'>¿Como funciona?</h3>
       
      </div>

      <div className='container mt-5'>
      <h3 className="display-1 ms-2 me-3 text-light text-center">
        <p className="text-center text-light fs-6">
          Explora nuestros recursos educativos
        </p>
          Conoce más
      </h3>
        <Carousel />
      </div>
    </main>
  );
}