import express from 'express'

import CertificadoController from '@controllers/CertificateController'

const routes = express.Router()

routes.post('/certificado', CertificadoController.generate)

export default routes
