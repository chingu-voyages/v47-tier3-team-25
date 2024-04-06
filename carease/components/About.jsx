import OurBusiness from "./OurBusiness"

const About = () => {
  return (
    <>
        <section className="flex flex-col text-center py-4 my-4">
            <h1 className="text-[2rem] font-smallHeadings font-medium my-6 sm:text-[2.4rem] lg:text-[2.9rem]">Who we are</h1>
            <p className="text-[1.1rem] mx-6 sm:mx-28 sm:text-[1.5rem] md:mx-44">CareEase is your online destination for comparing cars with ease. We provide a straightforward platform where you can effortlessly explore and compare a variety of vehicles. Our goal is to make your car-comparing experience simple, enjoyable, and tailored to your needs.</p>
        </section>
        <OurBusiness />
    </>
    
  )
}

export default About