// Imported Things
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({image_card, title, post}) => {
  return (
    <motion.div 
    initial={{ y: 50 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="blog_card">
        <img src={image_card} alt="" />
        <h1>{title}</h1>
        <p>{post}.</p>
        <div className="blog_header">
               <div>
               <img className='blog_profile_img' src="https://avatarfiles.alphacoders.com/314/314258.jpg" alt="" />
                <h4>Anvar Nasullyev <img src="https://iconape.com/wp-content/png_logo_vector/google-verified.png" alt="" /></h4>
               </div>
               <a href="#" id="more_link">More &nbsp;<FaArrowRight/></a>
                </div>
    </motion.div>
  )
}

export default BlogCard