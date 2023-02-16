import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { CakeIcon, HeartIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
    {
        icon: <CakeIcon className="h-6 w-6" />,
        title: "State of the Art Bakeries",
        description: "We always provide newly baked fika using fresh ingredients, baked daily in our modern bakeries."
    },
    {
        icon: <HeartIcon className="h-6 w-6" />,
        title: "Best enjoyed with others",
        description: "A fika is great alone, but even better among others. Bond with others at our certified bakeries!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Professional Bakers",
        description: "All our pastry is baked by professional, licensed bakers who love doing what they do."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x: 0 }
            }}>
                <HText>QUALITY HAND-MADE PASTRIES.</HText>
                <p className="my-5 text-sm">
                We provide fika pastries of the highest quality, all hand-made the same day as they're delivered. Enjoy a freshly baked pastry, different each day. Fikapaus always provide solid quality every day and take great pride in what we do.
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
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
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                className="mx-auto"
                src={BenefitsPageGraphic} 
                alt="benefits-page-graphic" />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-32 before:-left-10 before:z-[-1] before:content-mug before:-rotate-12">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}>
                                <HText>
                                    THOUSANDS OF CUSTOMERS ENJOYING OUR {" "}
                                    <span className="text-primary-500">FIKA</span>
                                </HText>
                            </motion.div>

                        </div>
                    </div>

                    {/* DESCRIPTION */}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis itaque distinctio quis fugit dolore perspiciatis veniam! Quaerat, non quibusdam cum qui commodi ex, natus a assumenda dolorum nemo deserunt neque modi esse voluptas quae! Earum quaerat ratione animi natus?
                        </p>
                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores dicta officiis ipsa repudiandae rerum sit odio laudantium accusantium nulla libero consectetur facilis inventore at dolore explicabo illum, excepturi facere. Ab expedita, magni itaque distinctio inventore ipsam ipsum optio! Modi.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Time for Fika!
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits