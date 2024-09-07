import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <motion.h1
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.1, duration: 0.4}}
            className="font-space text-4xl md:text-5xl text-yellow-300 tracking-loose">
              NewsWave
            </motion.h1>
            <motion.h2
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.2, duration: 0.4}}
            className="font-inter text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
              The Pulse of Truth in a Sea of Stories
            </motion.h2>
            <motion.p
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.3, duration: 0.4}}
            className="text-sm md:text-base text-gray-50 mb-4">
              Explore the world’s most important events, verified by cutting-edge technology. Stay ahead, stay informed, and be part of the wave.
            </motion.p>
            <motion.a
              initial={{x: -200, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: 0.4, duration: 0.4}}
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Join the Movement
            </motion.a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <motion.img
                initial={{y: -300, x: -200, opacity: 0}}
                animate={{y: 0, x: 0, opacity: 1}}
                transition={{delay: 0.2, duration: 0.7}}
                  className="mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                />
              </div>
              <div>
                <motion.img
                initial={{y: -300, x: -200, opacity: 0}}
                animate={{y: 0, x: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.7}}
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                />
              </div>
              <div>
                <motion.img
                initial={{y: -300, x: -200, opacity: 0}}
                animate={{y: 0, x: 0, opacity: 1}}
                transition={{delay: 0.4, duration: 0.7}}
                  className="mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
