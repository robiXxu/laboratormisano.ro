import * as React from 'react';
import { Image } from 'semantic-ui-react';
import { IFrameEmbed } from './../';
import * as home_image1 from '../../static/images/home_image1.jpg';
import * as home_image2 from '../../static/images/home_image2.jpg';
import * as home_map from '../../static/images/home_map.png';
import * as home_street_view from '../../static/images/home_street_view.png';

const style = {
  p: {
    fontSize: '18px'
  }
};

class Home extends React.Component {
  public render() {
    return (
      <div>
        <IFrameEmbed
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.1813130945707!2d26.85987347207445!3d47.95713513968132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x102c4588f63293d4!2sMisano!5e0!3m2!1sen!2sro!4v1538907818679"
          width={550}
          height={450}
          border="false"
          placeholder={home_map}
        />

        <IFrameEmbed
          url="https://www.google.com/maps/embed?pb=!4v1538908362912!6m8!1m7!1sifhPzAtMCoY5x-VsLSmNfw!2m2!1d47.95799071178762!2d26.85946483181707!3f131.63372453779778!4f-16.174139396056006!5f0.7820865974627469"
          width={550}
          height={450}
          border="false"
          placeholder={home_street_view}
        />

        <p style={style.p}>
          Laboratorul de analize medicale MISANO este un laborator de analize
          medicale conceput cu cel mai inalt profesionalism si responsabilitate,
          in ideea de a deveni un partener de incredere pentru pacientii sai.
        </p>
        <p style={style.p}>
          Incercam sa identificam impreuna necesitatile dumneavoastra si sa va
          oferim solutii individualizate pentru rezolvarea problemelor specifice
          de sanatate.
        </p>
        <p style={style.p}>
          Pregatirea profesionala a echipei MISANO, experienta noastra practica
          si capacitatea de intelegere in detaliu a specificului fiecarui
          pacient reprezinta premize solide pentru o colaborare eficienta.
        </p>
        <p style={style.p}>
          Consecventi respectului nostru fata de pacient si in acelasi timp
          deschisi la noutatile in domeniu, laboratorul este amenajat si dotat
          cu aparatura performanta, accesorii,consumabile, aplicatii si servicii
          in conformitate cu standardele Uniunii Europene.
        </p>
        <p style={style.p}>
          Implementarea unor standarde de calitate si controlul acestora
          garanteaza obtinerea unor rezultate sigure.
        </p>
        <p style={style.p}>
          Va multumim pentru interesul acordat serviciilor noastre si va
          asiguram ca vom ramane un furnizor de solutii pentru rezolvarea
          problemelor dumneavoastra de sanatate prin efectuarea unor analize
          medicale de calitate superioara.
        </p>
        <Image src={home_image1} floated="left" />
        <Image src={home_image2} floated="right" />
      </div>
    );
  }
}

export default Home;
