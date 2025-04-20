export const checksums = {
  "docs": "v3.5.0--HgOwnIyi0G8r8VgEBWMUV-2IWZDKNXVMZ05RfKEHn-Y",
  "posts": "v3.5.0--7tz_5ovN0FjHs8ljGj7OKA_FHVPvrCnxy5nbuyPcJgU",
  "index": "v3.5.0--aC67djIxh5tLbO9EBFmoQUeIlyKkvhlP0UN4kP0FIwM",
  "pricing": "v3.5.0--rngB-tCwuXPNHCYIZx_5w7XJ1oY5BIo6d3HPj38d-Jo",
  "blog": "v3.5.0--RsT3Z5x3fGzPpGfybPEi7JEWdx9T21iM_LpFRHq1tnM"
}
export const checksumsStructure = {
  "docs": "quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA",
  "posts": "T1f9Z6lBxtlaYr0h3zyERNYd5Hd-UBL_sslgdeO0wVU",
  "index": "GKtIuruOc5v6odM9Aoucv7yoFc9K0V5pQTEaRD2R3is",
  "pricing": "wnIt1a1XoCZg6ky0KqFYWZKtcfAx5Hi2rT-cJUdyfBQ",
  "blog": "Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI"
}

export const tables = {
  "docs": "_content_docs",
  "posts": "_content_posts",
  "index": "_content_index",
  "pricing": "_content_pricing",
  "blog": "_content_blog",
  "info": "_content_info"
}

export default {
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json"
    }
  },
  "posts": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json",
      "image": "json",
      "authors": "json",
      "date": "date",
      "badge": "json"
    }
  },
  "index": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json",
      "hero": "json",
      "sections": "json",
      "features": "json",
      "testimonials": "json",
      "cta": "json"
    }
  },
  "pricing": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json",
      "plans": "json",
      "logos": "json",
      "faq": "json"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}