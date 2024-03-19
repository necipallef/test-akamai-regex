
const integrationPath = 'abcd1234'
const ingressPath = 'xyz567'
const regex = new RegExp(`/${integrationPath}/${ingressPath}(?:/[^/?]+)*/?(?:\\?.*)?$`, 'gm')

describe('ingress req', () => {

    const basePath = `/${integrationPath}/${ingressPath}`

    it('works for /?query=123', () => {
        const q = 'query=123'
        const path = `${basePath}/?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123', () => {
        const q = 'query=123'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123&q2=v2', () => {
        const q = 'query=123&q2=v2'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?ii=fingerprint-pro-react/v4.5.6/procdn', () => {
        const q = 'ii=fingerprint-pro-react/v4.5.6/procdn'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123&q2=v2&ii=fingerprint-pro-react/v4.5.6/procdn', () => {
        const q = 'query=123&q2=v2&ii=fingerprint-pro-react/v4.5.6/procdn'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })
})

describe('browser cache req', () => {

    const endpointPath = `/a/b/c`
    const basePath = `/${integrationPath}/${ingressPath}${endpointPath}`

    it('works for /?query=123', () => {
        const q = 'query=123'
        const path = `${basePath}/?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`${endpointPath}/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123', () => {
        const q = 'query=123'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`${endpointPath}/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123&q2=v2', () => {
        const q = 'query=123&q2=v2'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`${endpointPath}/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?ii=fingerprint-pro-react/v4.5.6/procdn', () => {
        const q = 'ii=fingerprint-pro-react/v4.5.6/procdn'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`${endpointPath}/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })

    it('works for ?query=123&q2=v2&ii=fingerprint-pro-react/v4.5.6/procdn', () => {
        const q = 'query=123&q2=v2&ii=fingerprint-pro-react/v4.5.6/procdn'
        const path = `${basePath}?${q}`
        const substitution = `/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`
        const result = path.replace(regex, substitution)
        expect(result).toBe(`${endpointPath}/?ii=fingerprint-pro-akamai/v1.2.3/ingress&${q}`)
    })
})
