import { motion } from "framer-motion"

function Home() {
  return (
    <>

      <div className="w-96 xs:w-80 md:w-full mx-auto rounded-lg py-4 pt-5">
        <div className="flex flex-col lg:grid lg:grid-cols-2 glass shadow rounded-box py-5 px-4">
          <div className="self-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="card md:mx-auto">
              <h1 className="xl:text-7xl lg:text-5xl md:text-4xl md:text-center font-bold xs:text-center sm:text-center xs:text-3xl">Gülsah Bayar</h1>
              <h2 className="py-6 md:text-center sm:text-center xs:text-center text-base">GRÜN UND
                GERECHT. <br />Marie Musterkandidatin
                für Wahlbezirk.</h2>
              <div className="flex">
                <p className="uppercase flex-auto rounded-lg w-64 text-center mb-5">Lichterfelde: grün und gerecht</p>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, type: "tween" }}
            >

              <div class="flex justify-center">
                <div class="flex flex-row-reverse">
                  <div>
                    <div class="petal-1"></div>
                    <div class="petal-2"></div>
                  </div>
                  <div>
                    <div class="petal-3"></div>
                    <div class="petal-4 "></div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 grid-rows-[repeat(7,auto)] gap-6">
                <div className="col-start-1 col-end-2 row-start-1 row-end-5" >
                  <img src={smile} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
                </div>
                <div className="cols-start-2 cols-end-3 row-start-1 row-end-3">
                  <img src={stoic} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw]" />
                </div>
                <div className="cols-start-1 cols-end-2 row-start-5 row-end-7" >
                  <img src={glasses} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-tr-[25vw]" />
                </div>
                <div className="cols-start-1 cols-end-2 row-start-3 row-end-7">
                  <img src={looksmile} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home