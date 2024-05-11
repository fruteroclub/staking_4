import Image from 'next/image';

import Frutero from '/public/frutero.png';
import NacionBankless from '/public/nbkls.png';
import CryptoConexion from '/public/cc.png';

export const Community = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-4">
                    <div className="mt-3 text-center">
                    <Image priority src={Frutero} alt="fruteroClub" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />

                    <div className="card-body my-4">
                        <h5 className="card-title mb-4">Frutero Club</h5>
                        <a href="/" className="text-danger d-block" style={{marginBottom: '30px'}}>Linktree</a>
                        <a href="https://t.me/+wKyMJjrJPko3NGU5" className="btn btn-outline-danger d-block mt-5 text-light" target='_blank'>Unirme</a>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-3 text-center">
                    <Image priority src={NacionBankless} alt="nacion_bankless" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />
                    <div className="card-body my-4">
                        <h5 className="card-title mb-4">Nacion Bankless</h5>
                        <a href="/" className="text-danger d-block" style={{marginBottom: '30px'}}>Linktree</a>
                        <a href="https://t.me/nacionbankless" className="btn btn-outline-danger d-block mt-5 text-light" target='_blank'>Unirme</a>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-3 text-center">
                    <Image priority src={CryptoConexion} alt="crypto_conexion" width="auto" height="230" className="pt-4 d-inline-block align-text-top" />
                    <div className="card-body my-4">
                        <h5 className="card-title mb-4">CryptoConexion</h5>
                        <a href="/" className="text-danger d-block" style={{marginBottom: '30px'}}>Linktree</a>
                        <a href="https://t.me/comunidadcryptoconexion " className="btn btn-outline-danger d-block mt-5 text-light" target='_blank'>Unirme</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}