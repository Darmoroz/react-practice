import image from './image.jpeg';

export const BannerModal = () => {
  return (
    <>
      <p scrollamount="20" behavior="scroll" direction="left" className="sale">
        SALE - SALE - SALE - SALE - SALE - SALE - SALE - SALE
      </p>
      <img src={image} alt="banner" className="w-100" />
    </>
  );
};
