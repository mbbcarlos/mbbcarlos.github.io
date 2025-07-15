import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa';

const ExpandableItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <Disclosure as="div" className="w-full">
      <div className='w-full rounded-t-xl bg-primary hover:text-primary hover:bg-dark p-4'>
        <DisclosureButton className="group flex w-full justify-between items-center gap-2 font-bold text-2xl">
          {title}
          <FaChevronDown className="w-5 group-data-open:rotate-180" />

        </DisclosureButton>
      </div>
      <DisclosurePanel className="p-4 border-2 border-primary">
        {children}
      </DisclosurePanel>

    </Disclosure>
  )
}

export default ExpandableItem;