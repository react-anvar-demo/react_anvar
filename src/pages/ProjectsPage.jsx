
// Imported Components and Pages
import { NavLink } from 'react-router-dom';
import { FaGithub, FaChevronRight, FaLink, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import JustDjangoThumbail from '../images/just_django.png'
// Components
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
    return (
        <div className='latest_projects_section'>
    


            <img className='green_png' src='https://s3-alpha-sig.figma.com/img/8596/6361/60953640368fdca00d60b69708ae02c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPAzHjmW1pueDJstkjxZTdZpFxR8pdGseNsn6bV9KoT-MBBqraAJl7Cx7z~NucQobQoQm~E1iiqOVmAuHWCKQwUUHaZthqf-5T0LnOEuYZheZDMLXqPNXeOW4qnltlXyzyRUD3MCN6SEb-Mb-a-rAit6C9CcjLMVAu0-tqQlxFOUs6DyuHr554V9gbTR~u8b9ALbcAPwCiZ6o9hBjpETi3gywKW6Xcchg1hqlyw17LJn8RpL25LYMGcvYdUfcABV0M2CKvTTITCGyGGeEDK3NF6QEs2vrKHxBhUd-zkZqcJbxMxHRdRDlRMxlcIIOTo-x-4Ka10KuGujYj9lK2E27A__' />    
            <div className='bread_crumb'>
                <NavLink to="/">Home </NavLink>/ Projects
            </div>


            {/* Sort Componenet for Projects */}

            <div className='latest_projects'>
                <ProjectCard
                    Thumbnail="https://media.licdn.com/dms/image/C5612AQHmvoi-CXlotA/article-cover_image-shrink_720_1280/0/1621339812029?e=2147483647&v=beta&t=ycqlrxQTu8jmcBzmC9gBa9wzvoZXp2sheCnb5QrcrlU"
                    Title="YouTube Clone"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan. Bu loyihada API ishlatilmagan"
                    Github_link="https://github.com/react-anvar-demo/youtube"
                    Demo_link="https://react-tube-clone.vercel.app/" />

                <ProjectCard
                    Thumbnail={JustDjangoThumbail}
                    Title="Just Django"
                    Description="Just Django Clone React JS , CSS , Tailwind texnologiyalari orqali qilingan. BU loyihada API ishlatilmagan"
                    Github_link="https://github.com/react-anvar-demo"
                    Demo_link="https://just-django-last-edition.vercel.app/" />
                <ProjectCard
                    Thumbnail="https://i.morioh.com/210609/54be6842.webp"
                    Title="Thumbnail Downloader"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilingan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link=" https://youtube-thumbnail-get.vercel.app/" />
                <ProjectCard
                    Thumbnail="https://res.cloudinary.com/dz209s6jk/image/upload/v1630058595/Challenges/axhe4rw0jpykyhdphhwc.jpg"
                    Title="Github User Finder"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan. Bu loyiha API ishtirokida qilingan"
                    Github_link="https://github.com/react-anvar-demo"
                    Demo_link="https://github-profile-finder-phi-pied.vercel.app/" />

                <ProjectCard
                    Thumbnail="https://codingartistweb.com/wp-content/uploads/2022/07/movie-app-01.png"
                    Title="Movie Search App"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan. Bu loyiha API ishtirokida qilingan"
                    Github_link="https://github.com/react-anvar-demo"
                    Demo_link="https://search-movie-app-liart.vercel.app/" />

                <ProjectCard
                    Thumbnail="https://www.codingnepalweb.com/wp-content/uploads/2022/04/Image-gallery-with-search-box.jpg"
                    Title="Image Search App"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilingan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://youtube-ten-eta.vercel.app/" />

                <ProjectCard
                    Thumbnail="https://codingartistweb.com/wp-content/uploads/2022/03/countries-01.png"
                    Title="Country Search App"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilingan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://country-api-project-iota.vercel.app/" />

            

                    <ProjectCard
                    Thumbnail="https://gsap.com/community/uploads/monthly_2023_11/gsap.jpg.ccdf7facdb563d9004e077ccd4338e3b.jpg"
                    Title="Gsap Docs Page"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilinmagan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://gsap-kohl.vercel.app/" />

                    <ProjectCard
                    Thumbnail="https://s3-alpha.figma.com/hub/file/4440306111/00a0ff01-e6fd-475a-bc7c-ffa36449fc89-cover.png"
                    Title="Krate Agency"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilinmagan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://agency1-ten.vercel.app/" />

                    <ProjectCard
                    Thumbnail="https://cdn.dribbble.com/userupload/12052071/file/original-2a24d4b08a3d3ea8d56621c46757764a.png?resize=752x"
                    Title="Bike E-commerce"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilingan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://velosiped-nu.vercel.app/" />

                    <ProjectCard
                    Thumbnail="https://images.ui8.net/uploads/shot1_1698244343219.png"
                    Title="HRMS - LandingPage"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilinmagan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://hrms-landing-page-ten.vercel.app/" />

                               <ProjectCard
                    Thumbnail="https://www.easeout.co/images/uploads/eclipse.png"
                    Title="Zone - LandingPage"
                    Description="HTML, CSS, Javascript texnologiyalari orqali qilingan.Bu loyiha API ishtirokida qilinmagan"
                    Github_link="https://search-image-api.vercel.app/"
                    Demo_link="https://zone-landing-page.vercel.app/" />
                   

            </div>
        </div>
    )
}

export default Projects