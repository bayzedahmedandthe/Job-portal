import { easeOut } from "motion";
import { motion } from "motion/react"
import bannerImage from "../assets/bannerImage.jpg"
import bannerImage2 from "../assets/bannerImage2.jpg"

const Header = () => {
    return (
        <div className="hero bg-blue-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-32  ">
                <div>
                   
                    <motion.img
                        src={bannerImage}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-h-[220px] rounded-t-[50px] rounded-br-[50px] border-l-8 border-b-8 border-l-blue-500 border-b-blue-500" alt="" />
                         <motion.img
                         animate ={{x: [100, 150, 100]}}
                         transition={{duration: 10, repeat: Infinity}}
                          className="max-h-[200px]  border border-l-8 border-b-8  border-b-blue-500 border-l-blue-500 rounded-t-[50px] rounded-br-[50px]" src={bannerImage2} alt="" />
                </div>

                <motion.div
                    animate={{ y: 20 }}
                    transition={{ duration: 1, ease: easeOut, }}

                >
                    <h1
                        className="text-5xl font-bold leading-[60px]">The Easiest Way <br />
                        to Get Your New <br /> <span className="text-blue-500">Job</span></h1>
                    <p className="py-16">
                        Each month, more than 3 million job seekers turn to <br />
                        website in their search for work, making over <br /> 140,000 <br />
                        applications every single day
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;