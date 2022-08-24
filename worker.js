import { unflatten } from 'flat'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const data = await fetch('https:/' + pathname + search, req).then(res => res.json())
    return new Response(JSON.stringify(unflatten(data), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
