export async function getAllToasters() {
    const QUERY_ALL_TOASTERS = `query AllToasters() {
  toasters {
    edges {
      node {
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
    return json.data.toasters.edges.map(item => item.node) || []
}

export async function getSingleToaster(id) {
    const QUERY_SINGLE_TOASTER = `query SingleToaster() {
  toasters {
    edges {
      node {
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
            query: QUERY_SINGLE_TOASTER,
            variables: {
                id:
            }
        })
    })
    const json = await data.json()
    return json.data.toasters.edges.map(item => item.node) || []
}
