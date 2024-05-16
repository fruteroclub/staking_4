import Image from 'next/image';
import HowHorks from '/public/how_works.png';


export const HowWorks = () => {
    return (
        <>
            <div className="row">
                <Image priority src={HowHorks} alt="how_works" width="auto" height="auto" className="d-inline-block" />
            </div>
        </>
    );
}