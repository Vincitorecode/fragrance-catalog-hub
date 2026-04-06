import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenderCard from "@/components/GenderCard";
import DecantInfoSection from "@/components/DecantInfoSection";
import BrandCarousel from "@/components/BrandCarousel";

const BENEFITS = [
  {
    title: "Un Universo Olfativo",
    text: (
      <>
        De los tesoros <strong className="font-semibold text-black">nicho</strong> y la
        <br />
        opulencia <strong className="font-semibold text-black">árabe</strong> a los grandes
        <br />
        iconos <strong className="font-semibold text-black">comerciales.</strong>
        <br />
        Todo el espectro del perfume en
        <br />
        un solo lugar
      </>
    ),
    icon: (
      <img
        src="/images/features/imgEllipse1.svg"
        alt="Un Universo Olfativo"
        className="w-[120px] h-[120px] object-contain"
        loading="lazy"
      />
    ),
  },
  {
    title: "Decide con Libertad",
    text: (
      <>
        Experimenta la evolución de
        <br />
        cada perfume en tu piel.
        <br />
        El formato <strong className="font-semibold text-black">decant</strong> es tu pase
        <br />
        directo para elegir sin errores ni
        <br />
        remordimientos.
      </>
    ),
    icon: (
      <img
        src="/images/features/imgEllipse2.svg"
        alt="Decide con Libertad"
        className="w-[120px] h-[120px] object-contain"
        loading="lazy"
      />
    ),
  },
  {
    title: "Encuentra tu Firma",
    text: (
      <>
        ¿Buscas algo <strong className="font-semibold text-black">único</strong>?
        <br />
        Te guiamos entre notas y
        <br />
        familias olfativas para que
        <br />
        descubras la fragancia que
        <br />
        realmente habla de ti.
      </>
    ),
    icon: (
      <img
        src="/images/features/imgEllipse3.svg"
        alt="Encuentra tu Firma"
        className="w-[120px] h-[120px] object-contain"
        loading="lazy"
      />
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const softFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-brandon">
      <Header />

      <main>
        {/* First viewport block:   hero + gender, flex column, fills remaining viewport */}
        <div className="flex flex-col min-h-[600px]" style={{ height: "calc(100dvh - 80px)" }}>
          {/* ─── HERO ─── */}
          <section className="shrink-0 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-7 md:pb-8 text-center overflow-hidden">
            <motion.div
              className="w-full"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                  variants={fadeUp}
                  className="font-script text-[42px] sm:text-[48px] md:text-[56px] text-[#013220] font-medium leading-tight"
                >
                  Decants
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="font-brandon font-semibold mt-3 text-sm sm:text-base md:text-lg tracking-[0] uppercase text-[#3CB371]"
                >
                  COLECCIONA EXPERIENCIAS, NO SOLO FRASCOS.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="font-brandon font-medium mt-2 sm:mt-3 mx-auto max-w-[860px] text-center text-[16px] leading-[1.4] tracking-[0] text-[#222]"
                >
                  ¿Nicho, comercial o árabe? Ya no tienes que elegir a ciegas.
                  <br />
                  Prueba las fragancias más deseadas del mundo en decants originales y decide cuál merece un lugar en tu colección.
                </motion.p>
              </div>

              <motion.div
                variants={softFade}
                className="mt-5 sm:mt-6 w-full"
              >
                <BrandCarousel />
              </motion.div>
            </motion.div>
          </section>

          {/* ─── GENDER SPLIT 50/50 — fills remaining space ─── */}
          <section className="w-full flex-1 min-h-0 overflow-hidden">
            <div className="grid h-full grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
              <motion.div
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-0"
              >
                <GenderCard
                  gender="hombre"
                  title="HOMBRE"
                  description=""
                  imageSrc="/images/gender/hombre.jpg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-0"
              >
                <GenderCard
                  gender="mujer"
                  title="MUJER"
                  description=""
                  imageSrc="/images/gender/mujer.jpg"
                />
              </motion.div>
            </div>
          </section>
        </div>

        {/* ─── 3 BENEFITS ─── */}
        <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 md:gap-16">
              {BENEFITS.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-[120px] h-[120px] mx-auto mb-6 rounded-full border border-[#ddd] flex items-center justify-center"
                  >
                    {b.icon}
                  </motion.div>

                  <h3 className="font-brandon font-semibold text-lg sm:text-xl text-[#3CB371] mb-3 tracking-[0.01em]">
                    {b.title}
                  </h3>

                  <p className="font-brandon font-normal text-sm text-[#555] leading-[1.5] max-w-[300px] mx-auto">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── DECANT INFO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <DecantInfoSection imageSrc="/images/decant-info-section2.jpg" />
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
