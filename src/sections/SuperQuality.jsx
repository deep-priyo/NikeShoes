import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.svg"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col ">

        <h2 className="mt-10 font-palanquin captitalize text-4xl  font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red ">Super </span>
          <span className="text-coral-red ">Quality </span> Shoes

        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">Discover Stylish Nike arrivals,
          quality comfort, and innovation
          for your active life.Discover Stylish Nike arrivals,
          quality comfort, and innovation
          for your active life. </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your statisfaction.</p>
        <div className="mt-11"><Button label="View Details" /></div>

      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="Nike Super Quality Shoes"
          width={570}
          height={522}
          className="object-container"
        />
      </div>
    </section>
  )
};

export default SuperQuality;
