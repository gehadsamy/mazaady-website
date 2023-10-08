import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Navbar from '@/components/Navbar/Navbar'
import Product from '@/components/Products/Product'
import Image from 'next/image'

export default function Home() {
  return <>
    <Navbar />
    <Breadcrumb />
    <Product />
  </>
}
