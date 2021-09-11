import React from 'react';
// import { ParallaxSlide } from '../parallax/parallaxSlide';
import { CommingSoon }  from "../customHooks/commingSoon";

export const Product = () => {
    return (
        <div>
            {/* <ParallaxSlide/> */}
            <CommingSoon linkMessage='Ruby on Rails PRODUCT' url= 'http://18.180.225.220:3000/'
                    GithubUrl='https://github.com/mnsmsnr/the_workout' GithubLinkMessage='GitHub'/>
        </div>
    );
};