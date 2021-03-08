export default async (req, res) => {
    const { query: {slug}} = req
    const QUERY_SINGLE_POST = `query SinglePost($id: ID!) {
        page(id: $id, idType: URI) {
            title 
            content
        }
    }`
    const data = await fetch(`${process.env.WORDORESS_LOCAL_API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: QUERY_SINGLE_POST,
            variables: {
                id: slug
            }
        })
    })
    const jsonData = await data.json()
    res.json({data: jsonData.data})
    // return jsonData.data
}
