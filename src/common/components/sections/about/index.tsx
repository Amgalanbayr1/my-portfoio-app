'use client'

import { useSectionInView } from '@/common/lib/hooks'
import portfolioImg from '@/../public/images/photo.jpg'
import { smoothScrollTo } from '@/common/lib/utils'
import SectionDivider from '@/common/components/shared/section-divider'
import SectionHeading from '@/common/components/shared/section-heading'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'

export default function About() {
  const { ref } = useSectionInView('about', 0.4)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="flex flex-col md:scroll-mt-4 lg:scroll-mt-24 items-center justify-start leading-8 h-[1000px] lg:h-[1100px] z-50 w-full dark:bg-darkBg dark:text-white"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col items-center w-full pt-8">
        <SectionHeading>Миний тухай</SectionHeading>
        <motion.div
          className="w-full sm:w-[60%] sm:text-center lg:w-[1040px] xl:w-[1180px] lg:h-[700px] overflow-hidden py-12 px-4"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="group relative w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
            <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px] rounded-full overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  placeholder="blur"
                  width={470}
                  height={470}
                  className="rounded-full z-10 lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px]"
                />
              </div>
            </div>
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary text-center lg:text-left lg:max-w-[580px] lg:text-lg xl:h-[442px] xl:max-w-[650px] lg:ml-10">
              <div className="flex h-full flex-col justify-center gap-6">
                <span>
                  Программ хангамж хөгжүүлэлтийн чиглэлээр суралцан төгссөн. "Back-End" талын даалгавар ажлуудыг гүйцэтгэж Java, Spring-boot, Vaadin дээр ажиллаж,
                  MySQL, PostgreSQL, MongoDB зэрэг өгөгдлийн сангуудтай ажиллах туршлага хуримтлуулсан. Мөн GIT, GitLab-CICD, Docker, Nginx, Ubuntu OS зэрэг
                  технологиудыг ашиглаж байсан. Түүнчлэн Flutter, Next-Js зэрэг Front-End хөгжүүлэлтийн үндсэн суурь мэдлэгтэй.
                </span>
                <span>
                  Одоогоор мэдээллийн технологийн систем хөгжүүлэлтийн ажил хайж байна.
                </span>
                <p className="flex flex-col items-center lg:items-start">
                  <span>Хэрэв холбоо барихыг хүсвэл,</span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' });
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="text-2xl font-bold dark:bg-[#ddbea9] uppercase lg:normal-case bg-[#e4f318]">
                      Холбогдох!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  )
}
