import Image from 'next/image';

import NearLogo from '/public/near.svg';
import TextBanner from '/public/banner.png';
import Hero from '/public/hero.png';
import Sepparator from '/public/milky_way.png';
import CTA from '/public/cta.png';
import Telegram from '/public/telegram.svg';
import styles from '@/styles/app.module.css';
import HelloComponents from '@/pages/hello-components';
import { Carousel } from '@/components/carousel';
import { Community } from '@/components/community';
import { HowWorks } from '@/components/how-works';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
     <>
      <div className='row justify-content-evenly py-5'>
        <div class="col-md-4 col-lg-4 mb-3 mb-sm-0">
          <div class="card-body">
            <Image priority src={TextBanner} alt="banner" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />
          </div>
          <div className='mt-5'>
            <a type="button" class="btn btn-danger btn-lg mx-2 ms-3" href='#staking'>Stake</a>
            <a type="button" class="btn btn-outline-danger btn-lg text-light ms-3" href='#know_more'>Conoce Mas</a>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 mb-3 mb-sm-0" />
         
        <div class="col-md-4 col-lg-4">
            <div class="card-body">
            <Image priority src={Hero} alt="hero" width="auto" height="350" className="d-inline-block align-text-top" />
            </div>
        </div>
      </div>
     </>

      <div className='container-fluid'>
        <Image priority src={Sepparator} alt="milky_way" width="auto" height="210" className="pt-1 d-inline-block align-text-top" />
      </div>

      <div className='d-flex w-60 justify-content-center' id='staking'>
      <h1 className="display-1 ms-2 me-3 text-light text-center">
        <p className="text-center text-light fs-6">
          Staking Facil Y Seguro Para Todas y Todos
        </p>
          Explorar Staking 
      </h1>
      </div>
      <div className=''>
        <HelloComponents />
      </div>

      <div className={styles.grid}>
        <h3 className='display-5'>¿Como funciona?</h3>
        <HowWorks />
      </div>

      <div className='container my-5' id='know_more'>
      <h3 className="display-1 ms-2 me-3 text-light text-center">
        <p className="text-center text-light fs-6">
          Explora nuestros recursos educativos
        </p>
          Conoce más
      </h3>
        {/* <Carousel /> */}
      </div>

      <div className='container' style={{marginTop: '250px'}} id='join_us'>
      <h3 className="display-1 ms-2 me-3 text-light">
        <p className="text-light fs-6">
          Crezcamos Juntas y Juntos!
        </p>
        Unete a nuestra comunidad
      </h3>
        <Community />
      </div>

      <div className='container-fluid'>
        <Image priority src={Sepparator} alt="milky_way" width="auto" height="210" className="pt-1 d-inline-block align-text-top" />
      </div>

      <div className='container-fluid'>
        <div className='row justify-content-around py-5 align-items-center'>
          <div className="col-md-6 col-lg-4 mb-3 mb-sm-0">
            <div className="card-body">
              <Image priority src={CTA} alt="community" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />
              <p className="text-light text-uppercase fs-1 fw-semibold">Escribenos</p>
            </div>
          </div>
          
          <div className="col-md-2 col-lg-2 mb-3 mb-sm-0" />
          
          <div className="col-md-4 col-lg-4 offset-md-2 me-auto">
              <div className="card-body text-success mt-4 ps-4">
                <Link href="https://t.me/near_es">
                  <Image priority src={Telegram} alt="community" width="auto" height="130" className="pt-4 d-inline-block" style={{backgroundColor: 'gray'}} />
                </Link>
              </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}