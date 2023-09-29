const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <video
        className="h-screen w-full object-cover brightness-[.30]"
        autoPlay
        loop
        muted
        src="https://res.cloudinary.com/gonzalom22/video/upload/v1671035988/KAHUAK/Kahuak_qijivy.mkv"
      />

      <div className="text-neutral-300 text-4xl md:text-6xl font-light absolute h-md top-64 left-4 md:top-[360px] md:left-32">
        <h1 className="font-medium md:w-72 lg:w-full">
          Indumentaria de trabajo
        </h1>

        <p className="py-4 text-xs md:text-xl font-light md:w-[540px] lg:w-[700px]">
          Realizamos productos con los{' '}
          <span className="text-amber-500/70">mejores</span> stánderes de
          calidad
        </p>
        <p className="text-xs md:text-base font-extralight md:w-[540px] lg:w-[700px]">
          Calidad nacional de uso internacional
        </p>
      </div>
    </div>
  );
};

export default Hero;
