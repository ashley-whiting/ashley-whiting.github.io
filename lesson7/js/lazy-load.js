// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0;
    rootMargin: "0px 0px 300px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((items, observer) =>) {
            items.forEach((item) => {
                if(item.isIntersecting){
                    loadImages(item.target);
                    observer.unobserve(item.target);
                }
            });
        });

        //Loop through each img and check status and load if necessary
        imagesToLoad.forEach((img) => {
            imgObserver.observe(img);
        });
    }
    else {
        imagesToLoad.forEach((img) => {
            loadImages (img);
        });
    }
  