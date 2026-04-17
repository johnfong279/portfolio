import type { Service } from '../data/content'

type ServiceCardProps = {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 shadow-soft">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-accent-500 shadow-sm">
        {service.icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-neutral-900">{service.name}</h3>
      <p className="mt-3 text-base leading-7 text-neutral-700">{service.description}</p>
    </article>
  )
}

export default ServiceCard
