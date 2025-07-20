'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { MdClose } from 'react-icons/md';

type CardData = {
  id: string;
  title: string;
  description?: HTMLElement;

  link?: string;
  thumbnail?: string;
};

export default function Card({
  cardData,
  children,
}: {
  cardData: CardData;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={cardData.id}>
      <div className='flex flex-col p-3 w-[343px] md:w-[1200px] h-fit justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg '>
        <div className='flex p-2 gap-1 justify-between  border-b border-gray-200 dark:border-gray-300'>
          <div className='flex gap-1'>
            <button onClick={() => setIsOpen(false)} disabled={!isOpen}>
              <span
                className={`${isOpen ? 'bg-accent-dark' : 'bg-gray-400'} inline-block p-1 rounded-full hover:disabled:bg-gray-400 hover:bg-primary`}
              >
                <MdClose className='text-white' />
              </span>
            </button>
            <button disabled={true}>
              <span
                className={`bg-[#d87738] inline-block p-1 rounded-full h-6 w-6`}
              ></span>
            </button>
            <button disabled={true}>
              <span className='bg-accent box inline-block p-1 rounded-full h-6 w-6'></span>
            </button>
          </div>
          <h2 className='uppercase font-bold text-xl'>{cardData.title}</h2>
        </div>
        <motion.div
          className={'flex px-4 md:px-10 py-4 flex-col justify-between gap-12'}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
