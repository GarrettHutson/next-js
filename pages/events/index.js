import Link from 'next/link'

import Image from 'next/image'

const EventsPage = ({ data }) => {


    return (
            <div className='flex w-full gap-6 py-24  px-8 bg-black'>
                {data.map(data => (
                    <div className='w-1/3 relative '>
                    <a className='' href={`/events/${data.id}`}>
                       <img className='h-96 w-full mx-auto' src={data.image} />
                        <h2 className='absolute text-center text-white font-bold w-full text-5xl z-10 top-1/2 '>{`Events in ${data.id}`}</h2>
                         </a>
                         </div>))}
            </div>
    )
}
export default EventsPage;

export async function getStaticProps() {

    const { events_categories } = await import('../../data/data.json');
    return {
        props: {
            data: events_categories,
        },
    }
}