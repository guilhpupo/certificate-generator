import { Request, Response } from 'express'
import { Certificate } from '@models/Certificate'

import fs from 'fs'

import getTemplate from '@services/template'
import generatePdf from '@services/pdf'

export default {
  async generate(req: Request, res: Response) {
    try {
      const templateUrl = req.body.template
      const certificate: Certificate = {
        ...req.body.data
      }

      const html = await getTemplate(templateUrl, certificate)

      await generatePdf(html)

      const pdf = fs.readFileSync('src/assets/certificado.pdf')
      res.contentType('application/pdf')
      res.send(pdf)
    } catch (error) {
      console.log(error)
      res.send({ errorMessage: error })
    }
  }
}
