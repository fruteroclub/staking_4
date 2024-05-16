import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

import Curso1 from '/public/curso_1_NB.webp';
import Curso2 from '/public/curso_2_mtpool.webp';
import Curso3 from '/public/LSTC.jpg';
import Curso4 from '/public/Destacada-Gitcoin.jpg';
import Curso5 from '/public/bankless.webp';

const contentData = [
  {
    id: 1,
    title: 'Primeros Pasos con MetaPool',
    description: 'Meta Pool, adentrándonos al mundo del staking',
    image: Curso1,
    link: 'https://nacionbankless.substack.com/p/primeros-pasos-con-meta-pool?utm_source=publication-search'
  },
  {
    id: 2,
    title: 'MetaPool y bienes públicos',
    description: 'Meta Pool implementa la tecnología Gitcoin para apoyar iniciativas de bienes públicos en América Latina',
    image: Curso2,
    link: 'https://nacionbankless.substack.com/p/meta-pool-implementa-la-tecnologia?utm_source=publication-search'
  },
  {
    id: 3,
    title: 'Que es Liquid Staking',
    description: 'El liquid staking es una mecanismo de staking que permite a los usuarios seguir accediendo al valor de sus tokens más las recompensas generadas al delegar sus tokens a la red de nodos validadores',
    image: Curso3,
    link: 'https://cryptoconexion.com/que-es-el-liquid-staking/'
  },
  {
    id: 4,
    title: 'Meta Pool: Apoyando proyectos en mercados emergentes con Gitcoin',
    description: 'La 18.ª ronda de subvenciones de Gitcoin (GG18) se celebró del 7 al 31 de agosto. 14 proyectos de América Latina fueron seleccionados para recibir financiación',
    image: Curso4,
    link: 'https://cryptoconexion.com/apoyando-proyectos-mercados-emergentes-gitcoin/'
  },
  {
    id: 5,
    title: 'Liquid Staking 101',
    description: 'Guías Bankless sobre Maker, Aave, Curve, Compound, Uniswap, Rocket Pool y Lido',
    image: Curso5,
    link: 'https://nacionbankless.substack.com/p/liquid-staking-101'
  
  }
];

export const KnowMore = () => {
  return (
      <Carousel>
      {
        contentData.map((content) => (
            <Carousel.Item key={content.id}>
              <Link href={content.link} target='_blank'>
              <Image 
                priority
                src={content.image}
                alt="cursos"
                width="auto"
                height="600"
                className="pt-4 d-inline-block align-text-top"
                style={{
                  webkitFilter: "blur(5px)",
                  filter: "blur(2px) opacity(80%)"
                }}
              />
              <Carousel.Caption>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>
        ))
      }
      </Carousel>
  );
};
