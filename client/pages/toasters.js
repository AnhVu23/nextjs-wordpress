import Head from 'next/head'

export default function Toasters({
                                     toasters
                                 }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel='stylesheet' href={`http://nextheadless.local/wp-includes/css/dist/block-library`}/>
            </Head>

            <main>
                {toasters.map((toaster, i) => (
                    <div key={toaster.id}>
                        <h1>{toaster.title}</h1>
                        <p>Price: {toaster.toasterMeta.price || 0}</p>
                        <p>Energy consumption: {toaster.toasterMeta.watts || 0}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}

export async function getStaticProps({params, preview = false, previewData}) {
    const QUERY_ALL_TOASTERS = `query AllToasters {
  toasters {
    edges {
      node {
        id
        title
        toasterMeta {
          price
          watts
        }
      }
    }
  }
}`
    const data = await fetch(`${process.env.WORDPRESS_LOCAL_API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: QUERY_ALL_TOASTERS
        })
    })
    const json = await data.json()
    return {
        props: {
            toasters: json.data.toasters.edges.map(item => item.node) || []
        }
    }
}
