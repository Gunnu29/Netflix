// import React from 'react'
// import Card from './Card'

// import { useTranslation } from "react-i18next";


// export default function Reasons() {

  
//   const { t } = useTranslation();


//   return (
//     <>
//     <div className="w-full h-[400px]">
//         <div className="w-[75%] h-[400px] mx-auto text-white flex flex-col">
//             <div className="font-bold text-4xl mb-5">
//                 {t("moreReasons")}
//             </div>
//             <div className='flex'>
//                 <Card heading={t("reason1_heading")} description={t("reason1_desc")} pic="/television.png"/>
//                 <Card heading={t("reason2_heading")} description={t("reason2_desc")} pic="/download.png"/>
//                 <Card heading={t("reason3_heading")} description={t("reason3_desc")} pic="/telescope.png"/>
//                 <Card heading={t("reason4_heading")} description={t("reason4_desc")} pic="/gamer.png"/>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }



// Reasons.js
// 

import React from 'react';
import Card from './Card';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Container animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Reasons() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-auto">
      <div className="w-[75%] mx-auto text-white flex flex-col">
        <div className="font-bold text-4xl mb-5">
          {t("moreReasons") || "More Reasons"}
        </div>

        <motion.div
          className="flex flex-wrap justify-between gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card heading={t("reason1_heading")} description={t("reason1_desc")} pic="/television.png" />
          <Card heading={t("reason2_heading")} description={t("reason2_desc")} pic="/download.png" />
          <Card heading={t("reason3_heading")} description={t("reason3_desc")} pic="/telescope.png" />
          <Card heading={t("reason4_heading")} description={t("reason4_desc")} pic="/gamer.png" />
        </motion.div>
      </div>
    </div>
  );
}
