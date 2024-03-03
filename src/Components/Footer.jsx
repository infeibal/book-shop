export const Footer = () => {
  return (
    <footer className="relative z-[20] items-center min-w-screen gap-10 p-4  flex flex-col  justify-between bg-[#dddde3]">
      <h6 className="font-semibold">Контакты:</h6>
      <h6 className="text-2xl font-extralight">fesmiva@project.com</h6>
      <h6 className="font-light text-lg">
        По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в
        соцсетях.
      </h6>
      <div className="flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111765.png"
          alt="vk"
          className="w-14"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/4423/4423446.png"
          alt="tg"
          className="w-12"
        />
      </div>
    </footer>
  );
};
