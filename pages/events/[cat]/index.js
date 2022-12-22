import Image from 'next/image';
import Link from 'next/link';

const EventCatPage = ({ data, pageTitle }) => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'fit-content' }}>
              <h1>{pageTitle}</h1>
              
                {data.map(ev => (
                    <>
                    <Link href={`/events/${ev.city}/${ev.id}`}>
                                                    <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                            <Image width={400} height={200} src={ev.image} />
                        </Link>
                    </>
                ))}
            </div>
            </div>
    )
}
export default EventCatPage;


export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const paths = events_categories.map((cat) => {
        return {
            params: { cat: cat.id.toString() }
        }

    })
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { allEvents } = await import('/data/data.json');
    const { cat } = context.params;
    const data = allEvents.filter((event) => {
        return event.city === cat;
    })
    return {
        props: {
            data: data,
            pageTitle: cat,

        },
    }
}