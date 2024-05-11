import Image from 'next/image';

import Frutero from '/public/frutero.png';
import NacionBankless from '/public/nbkls.png';
import CryptoConexion from '/public/cc.png';

export const HowWorks = () => {
    return (
        <>
            <div className="row my-5">
                <div className="col d-flex">
                    <div className="mt-3 text-center mx-4">
                        <h3 className='display-3'><i className="bi bi-coin"></i></h3>
                        <h5 className="card-title mb-4">Selecciona tu token</h5>
                    </div>
                    <div className="mt-3 text-center mx-4">
                        <h3 className='display-3'><i className="bi bi-123"></i></h3>
                        <h5 className="card-title mb-4">Ingresa la cantidad</h5>
                    </div>
                    <div className="mt-3 text-center mx-4">
                        <h3 className='display-3'><i className="bi bi-clipboard2-check-fill"></i></h3>
                        <h5 className="card-title mb-4">Revisa y Confirma</h5>
                    </div>
                    <div className="mt-3 text-center mx-4">
                        <h3 className='display-3'><i className="bi bi-person-arms-up"></i></h3>
                        <h5 className="card-title mb-4">Empieza a ganar</h5>
                    </div>
                </div>
            </div>
        </>
    );
}