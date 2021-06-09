import puppeteer from 'puppeteer'

export default async (html: string) => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.setContent(html, {
    waitUntil: 'networkidle0'
  })

  const pdf = await page.pdf({
    path: 'src/assets/certificado.pdf',
    format: 'a5',
    landscape: true
  })

  await browser.close()

  return pdf
}
