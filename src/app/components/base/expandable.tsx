'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ExpandableItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Disclosure as='div' className='w-full'>
      {({ open }) => (
        <>
          <DisclosureButton className='group flex w-full rounded-t-xl bg-primary hover:text-primary hover:bg-dark p-4 justify-between items-center gap-2 font-bold text-2xl'>
            {title}
            <FaChevronDown
              className={`${
                open ? 'rotate-180 transform' : ''
              } w-5 transition-transform duration-300`}
            />
          </DisclosureButton>
          <AnimatePresence>
            {open && (
              <DisclosurePanel static as={Fragment}>
                <motion.div
                  key='content'
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='origin-top'
                >
                  <div className=' p-4 border-2 border-primary '>
                    {children}
                  </div>
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default ExpandableItem;
