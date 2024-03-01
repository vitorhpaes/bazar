import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import { useGuestStore } from '@/store'
import Button from '@mui/material/Button'
import logo from '../../../../../assets/images/logo.png'

const DownloadBookingProof = () => {
  const { guest, booking } = useGuestStore()

  const generatePDF = () => {
    if (!guest || !booking) {
      console.error('Dados de agendamento ou usuário não estão disponíveis')
      return
    }

    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [150, 90]
    })

    doc.addImage(logo, 'PNG', 65, 5, 15, 15)

    // Adicionando título
    doc.setFontSize(20)
    doc.text('Comprovante de Agendamento', 20, 40)

    // Adicionando informações do usuário e agendamento
    doc.setFontSize(12)
    doc.text(`Nome: ${guest.name}`, 20, 50)
    doc.text(`Documento: ${guest.document}`, 20, 60)
    doc.text(`Telefone: ${guest.phoneNumber}`, 20, 70)

    // Formatar a data do agendamento
    const bookingDate = new Date(booking.slot.startTime).toLocaleDateString(
      'pt-BR',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    )
    doc.text(`Data do Agendamento: ${bookingDate}`, 20, 80)

    // Você pode adicionar mais informações conforme necessário

    // Salvar o PDF
    doc.save('ComprovanteAgendamento.pdf')
  }

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={generatePDF}
    >
      Baixar Comprovante
    </Button>
  )
}

export default DownloadBookingProof
