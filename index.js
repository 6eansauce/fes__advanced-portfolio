const contact = (event) => {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.toggle("u-visibility-visible");

  emailjs
    .sendForm(
      "service_gslu7e8",
      "template_dns02k4",
      event.target,
      "OIQPHws5LfIX9MeUL",
    )
    .then(() => {
      loading.classList.remove("u-visibility-visible");
      success.classList.toggle("u-visibility-visible");
    })
    .catch(() => {
      loading.classList.remove("u-visibility-visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on oscaritojovel@gmail.com",
      );
    });
};

const toggleModal = () => {
  const modal = document.querySelector(".modal");

  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const scroll = document.querySelector(".scroll");

  modal.classList.toggle("modal--open");
  header.classList.toggle("u-visibility-hidden");
  hero.classList.toggle("u-visibility-hidden");
  scroll.classList.toggle("u-visibility-hidden");
};
