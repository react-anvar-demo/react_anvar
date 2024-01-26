import React from 'react'
import { FaGithub, FaChevronRight, FaLink, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion"
const ProjectCard = ({ Thumbnail, Title, Description, Github_link, Demo_link }) => {
    
    return (
        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='card_item'>
            <img src={Thumbnail} alt='' />
            {/* <a href='#' className='link_to_home'>React Anvar</a> */}
            <h1>{Title}</h1>
            <p>{Description}</p>
            <div className='project_link'>
                <li>
                    <a href={Github_link} target='blank_' className='recource'>GitHub &nbsp; <FaGithub /></a>
                    <a href={Demo_link} target='blank_' className='demo_link'>Demo &nbsp;<FaLink /></a>
                </li>
            </div>
        </motion.div>
    )
}

export default ProjectCard