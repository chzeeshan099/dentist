import React from 'react'
import Hero from './Hero'
import Services from './Services'
import AboutDoctor from './AboutDoctor'
import WhyChooseUs from './WhyChooseUs'
import Results from './Results'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import ContactUs from './ContactUs'

const index = () => {
  return (
    <div>
     <Hero/>
     <Services/>
     <AboutDoctor/>
     <WhyChooseUs/>
     <Results/>
     <Testimonials/>
     <FAQ/>
     <ContactUs/>
    </div>
  )
}

export default index
