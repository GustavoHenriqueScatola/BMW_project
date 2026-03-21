import React from 'react'
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/home/hero'
import { FindBMW } from '@/components/home/find-bmw'
import { PromoBanners } from '@/components/home/promo-banner'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FindBMW />
      <PromoBanners />
    </main>
  )
}