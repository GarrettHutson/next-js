import Image from 'next/image';

const EventPage = ({ data, pageTitle }) => {
    return (
        <div>
            <h1>{pageTitle}</h1>
            {data.map(ev => (
                <>
                <Image width={300} height={300} src={ev.image} />
                <p>{ev.description}</p>
                </>
            ))}
        </div>
    )
}
export default EventPage;


export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const paths = allEvents.map((event) => {
        return {
            params: { id: event.id, cat: event.city }
        }

    })
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { id, cat } = context.params;
    const eventData = allEvents.filter(event => event.id === id)

    return { props: { data: eventData, pageTitle: cat, } }
}
