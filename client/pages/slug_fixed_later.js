import Head from 'next/head'

export default function DynamicPage() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel='stylesheet' href={`http://nextheadless.local/wp-includes/css/dist/block-library`}/>
            </Head>

            <main>
                {/*<h1>{title}</h1>*/}
                {/*<div dangerouslySetInnerHTML={{*/}
                    {/*__html: content*/}
                {/*}}/>*/}
            </main>
        </div>
    )
}

// export async function getStaticProps({params, preview = false, previewData}) {
//     const QUERY_ALL_PAGES = `query AllPosts() {
//         pages {
//             edges {
//                 node {
//                     slug
//                 }
//             }
//             title
//             content
//         }
//     }`
//     const data = await fetch(`${process.env.WORDPRESS_LOCAL_API_URL}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             query: QUERY_ALL_PAGES
//         })
//     })
//     const allPages = await data.json()
//     return {
//         paths: allPages.edges.map(({node}) => `${node.slug}`) || [],
//         fallback: true,
//         props: {
//             posts: allPages
//         }
//     }
// }

export const getStaticPaths = async () => {
    const QUERY_ALL_PAGES = `query AllPages {
        pages {
            edges {
                node {
                    uri
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
            query: QUERY_ALL_PAGES
        })
    })
    const allPages = await data.json()
    console.log(allPages.data.pages.edges)
    return {
        paths: allPages.data.pages.edges.map(({edge}) => `${edge.node.uri}`) || [],
        fallback: true,
    }
}
