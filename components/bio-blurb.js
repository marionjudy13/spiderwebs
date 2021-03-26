import Image from 'next/image'

export default function BioBlurb() {
  return (
    <Image
      src="/images/marion.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Marion"
    />
  )
}
