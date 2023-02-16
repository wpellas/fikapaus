import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 mb-5 placeholder-white`

  const {
    register, trigger, formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault()
    }
  }
  
  return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
      {/* HEADER */}
      <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x:-50 },
            visible: { opacity: 1, x: 0 }
        }}
      >
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO ENJOY A FIKA DAILY
        </HText>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit officiis laborum necessitatibus magni perspiciatis animi architecto reiciendis minima voluptatum minus, pariatur nam assumenda corrupti suscipit. Culpa dolores omnis cum.
        </p>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
        className="mt-10 basis-3/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y:50 },
            visible: { opacity: 1, y: 0 }
        }}
        >
          <form 
            className="max-w-[700px]"
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/0bf16a97bfa2d3528b9bb899686ee769"
          >
            <input 
            className={inputStyles}
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100
            })} />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 characters."}
              </p>
            )}

            <input 
            className={inputStyles}
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              maxLength: 100
            })} />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email adress."}
              </p>
            )}

            <textarea 
            className={inputStyles}
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {
              required: true,
              maxLength: 2000
            })} />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 characters."}
              </p>
            )}

            <button
            type="submit"
            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
              Submit
            </button>

          </form>
        </motion.div>
        <motion.div
        className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y:50 },
            visible: { opacity: 1, y: 0 }
        }}>
          <div className="md:before:content-fikapaustext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img 
            className="w-full"
            src={ContactUsPageGraphic}
            alt="contact-us-page-graphic" />
          </div>
        </motion.div>
      </div>
    </motion.div>

  </section>

}

export default ContactUs