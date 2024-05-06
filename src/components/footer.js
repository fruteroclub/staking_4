import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/app.module.css';

import Staking4 from '/public/staking4.png';

export const Footer = () => {
    return(
        <div className='container'>
          {/* //footer */}
          <footer className='my-5'>
            <div className=''>
              <div className='row justify-content-between'>
                <div class="col mb-3 mb-sm-0">
                    <Link href="/">
                        <Image priority src={Staking4} alt="staking_4" width="auto" height="50" className="d-inline-block" />
                    </Link>
                </div>
                <div class="col mb-3 mb-sm-0">
                    <p className='text-white-50'>Staking4 Latam ¡Por las comunidades, para las comunidades!</p>
                    <div>
                      <Link href='https://www.facebook.com/staking4latam' className='ms-3'><i class="bi bi-telegram"></i></Link>
                      <Link href='https://www.linkedin.com/company/staking4latam/' className='ms-3'><i class="bi bi-discord"></i></Link>
                      <Link href='https://www.instagram.com/staking4latam/' className='ms-3'><i class="bi bi-instagram"></i></Link>
                      <Link href='https://twitter.com/Staking4Latam' className='ms-3'><i class="bi bi-twitter-x"></i></Link>
                    </div>
                </div>
                <div class="col mb-3 mb-sm-0">
                    <h5>Acerca de</h5>
                    <ul className='list-unstyled'>
                      <li className='mb-2 text-white-50'><Link href='/'>Acerca de Staking4</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Acerca de Metapool</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Nuestra Mision</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Nuestro Equipo</Link></li>
                    </ul>
                </div>
                <div class="col mb-3 mb-sm-0">
                    <h5>Ayuda</h5>
                    <ul className='list-unstyled'>
                      <li className='mb-2 text-white-50'><Link href='/'>Ayuda & Soporte</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Preguntas Frecuentes</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Contacto</Link></li>
                      <li className='mb-2 text-white-50'><Link href='/'>Recursos</Link></li>
                    </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
}