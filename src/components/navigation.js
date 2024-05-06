import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Staking4 from '/public/staking4.png';
import { useStore } from '@/layout';

export const Navigation = () => {
  const { signedAccountId, wallet } = useStore();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Login');
    }
  }, [signedAccountId, wallet]);

  return (
    <nav className="navbar navbar-expand-lg my-5">
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <Image priority src={Staking4} alt="NEAR" width="auto" height="50" className="pt-2 d-inline-block align-text-top" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0 pt-2 mx-auto">
            <ul className='nav px-3 mx-4'>
              <li class="nav-item px-3 mx-3">
                <a class="nav-link active text-light" aria-current="page" href="#">Explora Staking</a>
              </li>
              <li class="nav-item px-3 mx-3">
                <a class="nav-link text-light" href="#">Conoce mas</a>
              </li>
              <li class="nav-item px-3 mx-3">
                <a class="nav-link text-light" href="#">Unete a la comunidad</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};