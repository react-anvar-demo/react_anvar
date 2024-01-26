// imported Components and Pages
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
const PageNotFound = () => {
    return (
        <div className='page_not_found'>
            <img className='green_png' src='https://s3-alpha-sig.figma.com/img/8596/6361/60953640368fdca00d60b69708ae02c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPAzHjmW1pueDJstkjxZTdZpFxR8pdGseNsn6bV9KoT-MBBqraAJl7Cx7z~NucQobQoQm~E1iiqOVmAuHWCKQwUUHaZthqf-5T0LnOEuYZheZDMLXqPNXeOW4qnltlXyzyRUD3MCN6SEb-Mb-a-rAit6C9CcjLMVAu0-tqQlxFOUs6DyuHr554V9gbTR~u8b9ALbcAPwCiZ6o9hBjpETi3gywKW6Xcchg1hqlyw17LJn8RpL25LYMGcvYdUfcABV0M2CKvTTITCGyGGeEDK3NF6QEs2vrKHxBhUd-zkZqcJbxMxHRdRDlRMxlcIIOTo-x-4Ka10KuGujYj9lK2E27A__' />
            <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className='page_nf_left'>
                <h1>Sahifa Topilmadi</h1>
                <p>Kechirasiz, sahifa topilmadi. Siz kuzatgan havola buzilgan yoki sahifa oʻchirilgan boʻlishi mumkin.</p>
                <NavLink to="/"><FaAngleLeft /> &nbsp;Bosh sahifaga qaytish</NavLink>
            </motion.div>
            
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}

                className='page_nf_right'>
                <img src='https://i.pinimg.com/originals/66/e6/ab/66e6abd3327a7e5ba5374fe8377bdae8.png' />
            </motion.div>
        </div>
    )
}

export default PageNotFound