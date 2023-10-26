import React from 'react';

import './Hero.scss';
import images from '../../constants/images';

const Hero = () => {
  return (
    <div>
        <section className="main--container-hero">
            <div className="heading">Why this Site ??</div>

            <div className="main--content-hero">
              <div className="content--div-hero">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, labore! Cum, vel voluptatibus! Quisquam dicta sed minus, dolorum incidunt iste voluptatum nemo doloribus, maxime corporis perferendis cupiditate tempore, molestias nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex quibusdam soluta unde at eius maxime, libero officiis, pariatur veniam odio natus provident, totam id aliquam molestiae illo sint excepturi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis amet voluptate possimus deserunt alias nisi accusantium quibusdam. Omnis, id necessitatibus doloremque molestias, dolorem consequuntur, quo beatae delectus corrupti ea nesciunt!</div>
              <div className="image--div-hero">
                <img className='image--group' src={images.group} alt="" />
              </div>
            </div>
        </section>
    </div>
  )
}

export default Hero