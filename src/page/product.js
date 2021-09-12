import React from 'react';
// import { ParallaxSlide } from '../parallax/parallaxSlide';
import { CommingSoon }  from "../customHooks/commingSoon";

export const Product = () => {
    return (
        <div>
            {/* <ParallaxSlide/> */}
            <CommingSoon message='IN THE MAKING'
                    url= 'http://18.180.225.220:3000/' linkMessage='THE_WORKOUT(Ruby on Rails)'
                    GithubUrl='https://github.com/mnsmsnr/the_workout' GithubLinkMessage='GitHub Link'
                    url2= 'http://manases-portfolio-s3.s3-website-ap-northeast-1.amazonaws.com/' linkMessage2='manase`s Portfolio(React.js)'
                    GithubUrl2='https://github.com/mnsmsnr/manases_portforio' GithubLinkMessage2='GitHub Link'
                    />
        </div>
    );
};