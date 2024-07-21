
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import PackageIcon from "../components/packageIcon"
import ShirtIcon from "../components/shirtIcon"
import FlowerIcon from "../components/flowerIcon"
import ToyBrickIcon from "../components/toyBrick"
import UtensilsIcon from "../components/utensilsIcon"
import BookIcon from "../components/bookIcon"
import HeartIcon from "../components/hearticon"


export default function Component() {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (!isLoading && scrollTop + clientHeight >= scrollHeight && page <= 2) {
      setIsLoading(true)
      setPage(page + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
  return (
    <div className="flex flex-col min-h-dvh">
     
      <div className="flex overflow-x-auto gap-4 px-4 py-2 bg-black text-white">
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <PackageIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Electronics</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <ShirtIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Fashion</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <FlowerIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <ToyBrickIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Toys</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <UtensilsIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Kitchen</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-2" prefetch={false}>
          <BookIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Books</span>
        </Link>
      </div>
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6">
        {Array.from({ length: page * 8 }, (_, i) => (
          <Card key={i} className="relative overflow-hidden group rounded-md">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/"
              alt={`Image ${i + 1}`}
              width={400}
              height={400}
              className="object-cover w-full aspect-square opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <CardHeader className="absolute bottom-0 left-0 right-0 bg-transparent text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <CardTitle className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-700">
                Image {i + 1}
              </CardTitle>
              <CardDescription className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                A beautiful image
              </CardDescription>
            </CardHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-2 right-2 bg-white/50 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <HeartIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="sr-only">Like</span>
            </Button>
          </Card>
        ))}
      </main>
      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <div />
        </div>
      )}
    </div>
  )
}






















