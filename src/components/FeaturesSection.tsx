import { motion } from "framer-motion";

// SVGs en public/images/features
const imgEllipse1 = "/images/features/imgEllipse1.svg";
const imgEllipse2 = "/images/features/imgEllipse2.svg";
const imgEllipse3 = "/images/features/imgEllipse3.svg";

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[120px] h-[120px] mb-4">
              <img
                src={imgEllipse1}
                alt="Universo Olfativo"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-brandon font-medium text-[#50c878] text-[20px] mb-3">
              Un Universo Olfativo
            </p>

            <div className="font-brandon font-normal text-[16px] text-black">
              <p className="mb-2">
                <span>De los tesoros </span>
                <span className="font-medium">nicho</span>
                <span> y la opulencia </span>
                <span className="font-medium">árabe</span>
                <span> a los grandes iconos </span>
                <span className="font-medium">comerciales</span>
                <span>.</span>
              </p>
              <p>Todo el espectro del perfume en un solo lugar.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[120px] h-[120px] mb-4">
              <img
                src={imgEllipse2}
                alt="Decide con Libertad"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-brandon font-medium text-[#50c878] text-[20px] mb-3">
              Decide con Libertad
            </p>

            <div className="font-brandon font-normal text-[16px] text-black">
              <p className="mb-2">
                Experimenta la evolución de cada perfume en tu piel.
              </p>
              <p>
                <span>El formato </span>
                <span className="font-medium">decant</span>
                <span> es tu pase directo para elegir sin errores ni remordimientos.</span>
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[120px] h-[120px] mb-4">
              <img
                src={imgEllipse3}
                alt="Encuentra tu Firma"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-brandon font-medium text-[#50c878] text-[20px] mb-3">
              Encuentra tu Firma
            </p>

            <div className="font-brandon font-normal text-[16px] text-black">
              <p className="mb-2">
                <span>¿Buscas algo </span>
                <span className="font-medium">único</span>
                <span>?</span>
              </p>
              <p>
                Te guiamos entre notas y familias olfativas para que descubras
                la fragancia que realmente habla de ti.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}