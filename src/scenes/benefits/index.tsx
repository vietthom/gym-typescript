import { 
  HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon 
} from "@heroicons/react/24/solid";

import { SelectedPage, BenefitType, } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon />, 
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequatur." 
  },
  {
    icon: <UserGroupIcon />, 
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequatur." 
  },
  {
    icon: <AcademicCapIcon />, 
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, consequatur." 
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage ) => void;
};

const Benefits= ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50},
              visibile: { opacity: 1, x: 0},
            }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
             />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div>
          {/* GRAPHIC */}
          <img />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}

            {/* BUTTON */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits