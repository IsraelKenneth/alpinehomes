import {About, Blog, Counter, Hero, Neighbourhoods, Property, Service, Testimonial, WhyChoose} from '@/HomeComponents'


export default function Home() {
  return (
    <main className="overflow-hidden w-full">
      <Hero />
    <div className='padding-x'>
      <About />
    </div>
      <Property />

      <WhyChoose />

      <About />

      <Service />

      <Testimonial />

      <Counter />

      <Neighbourhoods />

      {/* <ClientLogo /> */}

      <Blog />

      
    </main>
  )
}
