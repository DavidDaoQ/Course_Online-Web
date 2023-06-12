/*-----------------------------------
* 	testimonial slider
 -----------------------------------*/
function testimonialSlider() {
  const carouselOne = document.getElementById("carouselOne");
  if (carouselOne) {
    /**if the element exists */
    carouselOne.addEventListener("slid.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    });
  }
}
testimonialSlider();
/**
 * course preview video
 */
function coursePreviewVideo() {
  const coursePreviewModal = document.querySelector(".js-course-preview-modal");
  if (coursePreviewModal) {
    // If the element exists
    coursePreviewModal.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play();
      this.querySelector(".js-course-preview-video").currentTime = 0;
    });
    coursePreviewModal.addEventListener("hide.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause();
    });
  }
}
coursePreviewVideo();
