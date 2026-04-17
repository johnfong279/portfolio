import { services } from '../data/content'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div>
      <SectionHeading
        eyebrow="Services"
        title="Services built around what clients actually need"
        subtitle="No long tool lists. Just focused work that helps your business look credible and makes it easier for people to take the next step."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services
