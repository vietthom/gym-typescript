import { SelectedPage, ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Class from "./Class";

const classes: Array<ClassType> =[
  {
    name: "Weight Training Classes", 
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio minima nesciunt ullam possimus illo.",
    image: image1,
  },
  {
    name: "Yoga Classes", 
    image: image2,
  },
  {
    name: "Ab Core Classes", 
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio minima nesciunt ullam possimus illo.",
    image: image3,
  },
  {
    name: "Adventure Classes", 
    image: image4,
  },
  {
    name: "Fitness Classes", 
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio minima nesciunt ullam possimus illo.",
    image: image5,
  },
  {
    name: "Training Classes", 
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio minima nesciunt ullam possimus illo.",
    image: image6,
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      className='w-full bg-primary-100 py-40'
      id="ourclasses"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
        >
          <div className="md:w-5/6">
            <HText>OUR CLASSES</HText>
            <p className="py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit nulla numquam fuga nostrum libero inventore eaque eos aperiam nemo nobis quis, consequuntur velit itaque! Harum, blanditiis. Ea voluptatum, laudantium autem tempora ut placeat sint.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default ourClasses