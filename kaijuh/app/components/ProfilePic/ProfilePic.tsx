import Image from 'next/image'

export default function ProfilePic(){
    return (
      <section>
        <Image
          src="/images/Kaijuh.jpg"
          width={200}
          height={200}
          alt='Kaijuh'
          priority={true}
         />
      </section>
    )
  }
