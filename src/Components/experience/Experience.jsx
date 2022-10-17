import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Development</h3>
                    <div className="experience_content">

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>BOOTSTRAP</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>TAILWIND</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>REACT</h4>
                            <small className='text-light'>experienced</small>
                        </article>
                    </div>
                </div>
                {/* end of front end */}
                <div className='experience_backend'>
                    <h3>Frontend Development</h3>
                    <div className="experience_content">

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>Node JS</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>MongoDB</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>PHP</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>MySQL</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className='experience_details'>
                            <BsFillPatchCheckFill />
                            <h4>Python</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                    </div>
                </div>

                <div className='experience_backend'>
                    <h3>Backend Development</h3>
                </div>

            </div>
        </section>
    )
}

export default Experience