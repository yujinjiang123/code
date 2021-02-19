import lazyLoadImage from "./lazyLoadImage";

const install=function(Vue){
    Vue.direction('lazy-load-image',lazyLoadImage);
}

lazyLoadImage.install=install;

export default lazyLoadImage;
