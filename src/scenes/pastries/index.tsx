import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Pastries from "./Pastries"


const pastries: Array<ClassType> = [
    {
        name: "Kanelbulle",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image1
    },{
        name: "Punschrulle",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image2
    },{
        name: "Mandelkubb",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image3
    },{
        name: "Biskvi",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image4
    },{
        name: "Chokladboll",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image5
    },{
        name: "Wienerbröd",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit distinctio nesciunt hic eos voluptate temporibus, exercitationem quod molestiae officiis?",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurPastries = ({ setSelectedPage}: Props) => {
  return <section id="ourpastries" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurPastries)}>
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="md:w-3/5">
                    <HText>
                        OUR PASTRIES
                    </HText>
                    <p className="py-5">
                        Check out some of our local delicacies, all baked fresh in the mornings! Each day delivers a different type of fika, these are some of the samples we provide.
                    </p>
                </div>
            </motion.div>
            <div className="mx-auto mt-10 h-[353px] w-full md:w-5/6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
                <ul className="w-[2800px] whitespace-nowrap">
                    {pastries.map((item: ClassType, index) => (
                        <Pastries
                            key={`${item.name}-${index}}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
}

export default OurPastries