const AboutHero = () => {
    return (
      <div>
        <div 
          style={{
            background: 'rgb(238, 243, 248) linear-gradient(183deg, rgba(238, 243, 248, 1) 0%, rgba(255, 255, 255, 1) 35%)',
          }}
          className="flex flex-col bg-cover md:bg-contain bg-no-repeat">
          <div className="p-4 md:p-16">
            <h1 className="font-bold text-4xl md:text-5xl">About us</h1>
          </div>
          <div>
            <p className="font-bold text-2xl md:text-4xl pb-4 md:pb-7 pl-4 md:pl-32">Our mission</p>
            <p className="font-normal text-xs md:text-base pl-4 md:pl-36">
              At Jolint, we are driven by a passion for <b>improving workplaces</b> and creating a better world for everyone. <br />
              We make sure to keep ethics and privacy at the forefront when gathering data. Throughout our journey, <br />
              we've stayed committed to these principles, ensuring that <b>individuals' information is handled with care and respect.</b> <br /> 
              Discover the journey of Jolint, and join us in our quest to make the world a better place, one company at a time. <br />
              With our innovative approach, cutting-edge technologies, and a team of experts, we are committed to creating <br />
              a <b>more inclusive and equitable work culture for all.</b> <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutHero;
  