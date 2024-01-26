import React from 'react'
import { NavLink } from 'react-router-dom'
import CardBlog from '../Components/BlogCard'
import { IoMdTime } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import BlogCard from '../Components/BlogCard';
import { motion } from "framer-motion"

const BlogPage = () => {
  return (
    <div className='blog_page'>
      <div className='bread_crumb'>
        <NavLink to="/">Home </NavLink> / Blog
      </div>
      <img className='green_png' src='https://s3-alpha-sig.figma.com/img/8596/6361/60953640368fdca00d60b69708ae02c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPAzHjmW1pueDJstkjxZTdZpFxR8pdGseNsn6bV9KoT-MBBqraAJl7Cx7z~NucQobQoQm~E1iiqOVmAuHWCKQwUUHaZthqf-5T0LnOEuYZheZDMLXqPNXeOW4qnltlXyzyRUD3MCN6SEb-Mb-a-rAit6C9CcjLMVAu0-tqQlxFOUs6DyuHr554V9gbTR~u8b9ALbcAPwCiZ6o9hBjpETi3gywKW6Xcchg1hqlyw17LJn8RpL25LYMGcvYdUfcABV0M2CKvTTITCGyGGeEDK3NF6QEs2vrKHxBhUd-zkZqcJbxMxHRdRDlRMxlcIIOTo-x-4Ka10KuGujYj9lK2E27A__' />

      <div className="blog_section">

        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="large_blog_card">
          <div className="large_card_header">
            <div className="blog_header_left">
              <img className='blog_profile_img' src="https://avatarfiles.alphacoders.com/314/314258.jpg" alt="" />
              <h4>Anvar Nasullyev <img src="https://iconape.com/wp-content/png_logo_vector/google-verified.png" alt="" /></h4>
            </div>

            <div className="blog_posted_time">
              <span><IoMdTime /> &nbsp; 12:36 26/01</span>
            </div>
          </div>
          <img className='blog_image_large_card' src="https://repository-images.githubusercontent.com/594241170/c578de72-3b3d-4a39-9a6f-f68bbe16d69f" alt="" />
          <h1>Website uhcun chiroyli ishlab chiqilgan komponentlar kutubxonasi</h1>
          <a className='tegs'>technology</a>
          <a className='tegs'>news</a>
          <p>NASA 2025 yilda yana odamlarni Oyga uchirishni va u yerda kosmik stansiya qurishni rejalashtirmoqda. Uning yonida esa bir nechta uydan iborat butun bir mikrotuman shakllantiriladi.</p>
        </motion.div>


        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="right_blogs">

          <div className="small_blog_item">
            <a className='tegs'>frontend</a>
            <a className='tegs'>tools</a>
            <h3>Best Tailwind CSS Libraries</h3>
            <p>beautifully designed components that you can copy and paste into your apps 1. Meraki UI. 108 components with Tailwind classes. · 2. Flowbite. Open-source library of over 400 components built with Tailwind CSS ...</p>
            <a href="#" className='more_item'>Batafsil<FaAngleRight /></a>
          </div>
          <div className="small_blog_item">
            <a className='tegs'>useful</a>
            <a className='tegs'>frontend</a>
            <a className='tegs'>best</a>
            <h3>Best Roadmap for Frontend Developers</h3>
            <p>What is Frontend Development? Front-end development is the development of visual and interactive elements of a website that users interact with directly ...</p>
            <a href="#" className='more_item'>Batafsil<FaAngleRight /></a>
          </div>
          <div className="small_blog_item">
            <a className='tegs'>openAI</a>
            <a className='tegs'>frontend</a>
            <h3>10 Best AI Code Generators for Developer</h3>
            <p>The rise of artificial intelligence has greatly influenced the realm of coding and development. AI-powered code generators help streamline coding processes, automate routine tasks, and even predict and suggest code snippets ...</p>
            <a href="#" className='more_item'>Batafsil<FaAngleRight /></a>
          </div>
        </motion.div>

      </div>
      <div className="other_blogs">
        <CardBlog
          post="Tailwind is a utility-first CSS framework that offers a comprehensive set of pre-designed styles and components, making it easy to create stunning UIs without the need for custom CSS."
          title="Best of The Best - Tailwind CSS"
          image_card="https://miro.medium.com/v2/resize:fit:1400/1*uro_dhYZzrtveSzO93RPRg.jpeg" />
        <CardBlog
          post="Tailwind is a utility-first CSS framework that offers a comprehensive set of pre-designed styles and components, making it easy to create stunning UIs without the need for custom CSS."
          title="11 Tailwind CSS Libraries in 2024"
          image_card="https://www.saashub.com/images/app/screenshots/178/quyxce5518zb/landing-original.jpg?1691111793" />
        <CardBlog
          post="Tailwind is a utility-first CSS framework that offers a comprehensive set of pre-designed styles and components, making it easy to create stunning UIs without the need for custom CSS."
          title="Is Material-UI Better Tailwind CSS "
          image_card="https://i.ytimg.com/vi/lMPMD-7ZrBc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXkDBdKJs7RuaR5Aibmr3IhSlNyQ" />
      </div>

    </div>
  )
}

export default BlogPage