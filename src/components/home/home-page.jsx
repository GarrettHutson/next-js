import Link from "next/link"
import Image from "next/image"


export default function HomePage({ data }) {
    return (


 <div className="p-16">
  {data.map((data, index) => (
    <div className="flex flex-col">
      {index % 2 === 0 ? (
        <Link href={`/events/${data.id}`}>
        <div className="flex  items-center">
            <div className="flex flex-col items-end mr-6"  >
            <h2 className="text-lg font-bold ">{data.id.toUpperCase()}</h2>
              <p className="text-sm font-light">{data.description}</p>
            </div>
          <Image
          width={300}
          height={300}
            src={data.image}
            className="w-96 h-96"    
          />
                   </div>
                   </Link>
      ) : (
        <div className="flex justify-between items-center">
          <Image
            src={data.image}
            width={300}
            height={300}
         className="w-96 h-96 m-10"
          />
          <div >
            <Link href={`/events/${data.id}`}>
              <h2 className="text-lg font-bold">{data.id.toUpperCase()}</h2>
              <p className="text-sm font-light">{data.description}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  ))}
</div>

    )
} 
