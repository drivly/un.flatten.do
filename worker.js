import flatten from 'flat'

export default {
  fetch: async req => {
    const { pathname } = new URL(req.url)
    console.log('https:/' + pathname)
    const data = await fetch('https:/' + pathname).then(res => res.json())
    return new Response(JSON.stringify(flatten(data), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
