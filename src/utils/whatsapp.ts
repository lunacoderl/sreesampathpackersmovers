import { companyDetails } from '../data/company'

export interface QuoteFormData {
  name: string
  phone: string
  movingFrom: string
  movingTo: string
  moveType: string
  preferredDate: string
  vehicleSize?: string
  message?: string
}

export function buildWhatsAppQuoteUrl(data: QuoteFormData): string {
  const text = [
    `*Hello Sree Sampath Packers & Movers,*\n`,
    `I would like to enquire about moving services:`,
    `--------------------------------------`,
    `👤 *Name:* ${data.name.trim()}`,
    `📞 *Phone:* ${data.phone.trim()}`,
    `📍 *Moving From:* ${data.movingFrom.trim()}`,
    `🏁 *Moving To:* ${data.movingTo.trim()}`,
    `📦 *Move Type:* ${data.moveType}`,
    data.vehicleSize ? `🚚 *Preferred Vehicle:* ${data.vehicleSize}` : '',
    data.preferredDate ? `📅 *Preferred Date:* ${data.preferredDate}` : '',
    data.message ? `💬 *Details / Notes:* ${data.message.trim()}` : '',
    `--------------------------------------`,
    `Please share the best quotation and vehicle availability.`
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`
}
