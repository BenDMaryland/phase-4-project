import React from 'react';
import Carousel from 'react-material-ui-carousel';

function MoreCarPic() {
    const items = [
        {
            img: <img className="view-more-pics" src="https://lh3.googleusercontent.com/proxy/OqNfwTDm6tyoNW3oBcIWnbKsmZZAOgh_3jI_JBdApB2zjg2nAxM2Y0RkFIJg5FgF32tMa8JqjO71SUCjqySI8Cap7HxVGP1cpi1ktTOoMS502ztyL_NxNSST1UnUvfmxX_PXNyANzVxRweTOW2g-Y22LDOtNBEUsW2mqr9ZMVRDrhoHGxLfrGDF9vg" alt="" />
        },
        {
            img: <img className="view-more-pics" src="https://www.supercars.net/blog/wp-content/uploads/2020/10/2020-Audi-R8-V10-RWD-011-2160-scaled.jpg" alt="" />
        },
        {
            img: <img className="view-more-pics" src='https://free4kwallpapers.com/uploads/originals/2019/04/09/audi-r-wallpaper.jpg' />
        },
        {
            img: <img className="view-more-pics" src='https://www.supercars.net/blog/wp-content/uploads/2020/10/2019-Audi-R8-001-2000-scaled.jpg' />
        },
        {
            img: <img className="view-more-pics" src='https://images.hdqwalls.com/wallpapers/audi-r8-v10-car-kr.jpg' />
        }
    ];

    return (
        <div id="expand">
        <Carousel id="carousel">
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
        </div>
    );
}

const Item = ({img}) => {
    return (
         <div id="img-card">{img}</div>
    );
};

export default MoreCarPic
