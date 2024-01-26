
// import
import { FaGithub, FaChevronRight, FaLink, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { Button, Carousel } from "@material-tailwind/react";

const HomePage = ({ telegram_link, heroSection_image, instagram_link, github_link, twitter_link }) => {
    return (
        <div className='home'>

            <img className='green_png' src='https://s3-alpha-sig.figma.com/img/8596/6361/60953640368fdca00d60b69708ae02c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPAzHjmW1pueDJstkjxZTdZpFxR8pdGseNsn6bV9KoT-MBBqraAJl7Cx7z~NucQobQoQm~E1iiqOVmAuHWCKQwUUHaZthqf-5T0LnOEuYZheZDMLXqPNXeOW4qnltlXyzyRUD3MCN6SEb-Mb-a-rAit6C9CcjLMVAu0-tqQlxFOUs6DyuHr554V9gbTR~u8b9ALbcAPwCiZ6o9hBjpETi3gywKW6Xcchg1hqlyw17LJn8RpL25LYMGcvYdUfcABV0M2CKvTTITCGyGGeEDK3NF6QEs2vrKHxBhUd-zkZqcJbxMxHRdRDlRMxlcIIOTo-x-4Ka10KuGujYj9lK2E27A__' />
          
            <div className='home_page '>
                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className='hero_right' id='mobile_image'>
                    <img src={heroSection_image} alt='hero_section_image' />
                </motion.div>

                <motion.div
                   initial={{ y: 50 }}
                   animate={{ y: 0 }}
                   transition={{ type: "spring", stiffness: 100 }}
                    className='hero_left'>
                    {/* <h1>REACT ANVAR</h1> */}
                    <h2>Hi , I'm  <rek>Frontend Developer</rek></h2>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <div className='social_links'>
                        <a href={twitter_link} target='blank_'><FaTwitter /></a>
                        <a href={github_link} target='blank_'><FaGithub /></a>
                        <a href={instagram_link} target='blank_'><FaInstagram /></a>
                        <a href={telegram_link} target='blank_'><FaTelegram /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className='hero_right'>
                    <img src={heroSection_image} alt='hero_section_image' />
                </motion.div>
            </div>
            
        </div>
    )
}

export default HomePage