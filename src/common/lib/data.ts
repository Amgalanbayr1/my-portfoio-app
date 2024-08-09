import React from 'react'

import chexImg from '@/../public/images/chex.jpg'
import foodSystemImg from '@/../public/images/foodSystem.png'
import portfolioImg from '@/../public/images/portfolio.png'
import smartMeterImg from '@/../public/images/smartMeter.png'
import tenCabImg from '@/../public/images/tencab.jpg'
import tsubasaImg from '@/../public/images/tsubasa.png'
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react'

export const links = [
  {
    name: 'Эхлэл',
    id: 'home',
  },
  {
    name: 'Тухай',
    id: 'about',
  },
  {
    name: 'Төсөл',
    id: 'projects',
  },
  {
    name: 'Туршлага',
    id: 'experience',
  },
  {
    name: 'Чадвар',
    id: 'skills',
  },
  {
    name: 'Холбогдох',
    id: 'contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Тен-Плас ХХК',
    location: 'Улаанбаатар, Монгол',
    description: `Веб систем,IOT(юмсын интернэт) програмчлал,CICD(программ хангамжийн системийн тасралтгүй хөгжүүлэлт),MicriService-ийн үйл ажиллагаа.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2020 оны 5-р сар',
  },
  {
    title: 'Шутис мэдээлэл холбоо технологийн сургууль',
    location: 'Улаанбаатар, Монгол',
    description: `Программ хангамжийн инженер хөтөлбөрийн бакалаврын зэрэг. `,
    icon: React.createElement(BookIcon),
    date: '2023 оны 6-р сар',
  },
  {
    title: 'ЦүкиДен ХХК (Япон компани)',
    location: 'Фукушима,Япон',
    description: `Системийн арчилгаа,засвар,сайжруулалт,тест.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2024 оны 1-р сар',
  },
  {
    title: 'Бие даан суралцах',
    location: 'Токио,Япон',
    description: `Front-End хөгжүүлэх Next-js,TypeScript,Tailwind технологийн судалгаа.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: '2024 оны 8-р сар',
  },
] as const

export const images = {
  foodSystemImg,
  chexImg,
  portfolioImg,
  smartMeterImg,
  tenCabImg,
  tsubasaImg
}

export const projectsData = [
  {
    title: 'Ухаалаг тоолуур',
    description: `Тоолуурын цахилгаан зарцуулалтыг алсын зайнаас мэдэх,удирдах систем.`,
    tags: [
      'Java',
      'Mysql',
      'Nginx',
      'Network',
    ],
    imageUrl: smartMeterImg,
    link: '',
  },
  {
    title: 'Чингис Хаан Хөрөнгийн Бирж',
    description:
      'Үнэт цаас авах,зарах арилжааний систэм.',
    tags: [
      'Java',
      'MySql',
      'Spring-boot',
      'Nginx',
      'Docker',
      'AWS',
    ],
    imageUrl: chexImg,
    link: 'https://www.chex.mn/',
  },
  {
    title: 'Дижитал карт фүүд',
    description:
      'Байгууллагын хоолны газар ажилтнууд хоол идэх үедээ ашиглах,бүртгэлийн систем.',
    tags: [
      'Java',
      'Vaadin framework',
      'Spring-boot',
      'MySQL',
      'Docker',
      'Nginx',
    ],
    imageUrl: foodSystemImg,
    link: 'https://tenline-catering.com/',
  },
  {
    title: 'TenCab',
    description:
      'Гар утаснаасаа такси дуудах апп',
    tags: [
      'Java',
      'Spring-boot',
      'MongoDB',
      'Flutter',
      'Docker',
      'Nginx',
    ],
    imageUrl: tenCabImg,
    link: '',
  },
  {
    title: 'Tsubasa kun',
    description:
      'Японы эрүүл мэндийн үйлчилгээ,бүртгэлийн систем.',
    tags: [
      'Java GUI',
      'PostreSql',
      'Excel',
    ],
    imageUrl: tsubasaImg,
    link: 'https://www.nichijosys.com/product/tsubasa/',
  },
  {
    title: 'Портфолио',
    description: `Өөрийн тухай мэдээллийг цахимжуулсан веб.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://amgalanbayar.vercel.app',
  },
  
] as const

export const skillsData = [
  ['Java', '/svgs/java.svg'],
  ['Spring-boot', '/svgs/spring.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Nginx', '/svgs/nginx.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Flutter', '/svgs/flutter.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['Gitlab', '/svgs/gitlab.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Network', '/svgs/network.svg'],
  ['', '/svgs/etc.svg'],
] as const
