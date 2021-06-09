import axios from 'axios'
import handlebars from 'handlebars'

import { Certificate } from '@models/Certificate'

export default async (url: string, certificate: Certificate) => {
  try {
    const res = await axios.get(url)
    if (!res) throw new Error()

    const template = handlebars.compile(res.data)

    return template(certificate)
  } catch (error) {
    console.log(error)
  }
}
