import Head from 'next/head'
import {useRouter} from 'next/router'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function SlugPage() {
    const router = useRouter()
    const {slug} = router.query
    const {data, error} = useSWR(`/api/pages/${slug}`, fetcher)
    if (error) return <div>error...</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>{data.data.page.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: data.data.page.content
                }}/>
            </main>
        </div>
    )
}
