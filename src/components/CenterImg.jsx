import React from "react";
import { motion } from "framer-motion";

function CenterImg() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
     
      animate={{ opacity: 1 }}
      className="flex w-full h-screen justify-center items-center flex-col"
    >
      <img
        className="md:w-3/4 md:h-3/4 object-contain"
        src="https://static.wixstatic.com/media/21b326_4367d433974440088fb267ae3aee08a3~mv2_d_4676_4679_s_4_2.jpg/v1/fill/w_934,h_871,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/21b326_4367d433974440088fb267ae3aee08a3~mv2_d_4676_4679_s_4_2.jpg"
      />
      <h2 className="font-medium text-center text-xl p-4">
        Nick Yozov, Full Stack Developer & UI/UX Designer
      </h2>
    </motion.div>
  );
}

export default CenterImg;
