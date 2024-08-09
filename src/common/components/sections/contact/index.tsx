'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/common/lib/hooks'
import SubmitBtn from './_components/submit-btn'
import SectionHeading from '@/common/components/shared/section-heading'
import toast from 'react-hot-toast'
import { sendEmail } from '@/common/utils/actions/send-email'

export default function Contact() {
  const { ref } = useSectionInView('contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center dark:text-white dark:bg-darkBg w-full items-center flex flex-col py-20 pb-44 scroll-mt-12"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Надтай холбоо барина уу!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="text-gray-700 mt-6 mb-20 dark:text-white/80">
          Энд дарж шууд имэйл-ээр холбогдоно уу{' '}
          <a className="underline" href="mailto:j.amgalanbayr1@gmail.com">
          j.amgalanbayr1@gmail.com
          </a>{' '}
          эсвэл доорх формоор бичнэ үү.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Амжилттай илгээгдлээ!')
          }}
        >
          <input
            className="h-14 px-4 border bg-gray-50 dark:bg-white rounded-lg dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:placeholder:text-darkBg"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Таны цахим хаяг"
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none border p-4 bg-gray-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder:text-darkBg"
            name="message"
            placeholder="Агуулга👋"
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  )
}
