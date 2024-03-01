import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link
} from '@mui/material'

const EventDetails = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Orientações gerais do bazar
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Bazar do hospital infantil Seara do Bem com mercadorias apreendidas pela
        receita federal.
      </Typography>
      <Paper
        elevation={1}
        style={{ padding: '20px', marginBottom: '20px', marginTop: '20px' }}
      >
        <Typography variant="body1" gutterBottom>
          Local de realização – Centro de Educação André Luiz – Em frente ao
          Parque Conta Dinheiro – Avenida Luis de Camões, nº 2195, Lages, SC.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Dias e horários de realização:
          <List>
            <ListItem>- Dia 09/03/2024 – Das 08h30min às 21h00min;</ListItem>
            <ListItem>- Dia 10/03/2024 – Das 08h30min às 20h00min.</ListItem>
          </List>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para efetuar compras no bazar os interessados poderão fazer o
          agendamento digital, do dia e horário que desejam efetuar as compras,
          através do site
          <Link href="https://www.searadobem.org.br/bazar/" target="_blank">
            {` Seara do Bem`}
          </Link>
          , a partir das 08h00min do dia 04/03/2024 até às 18h00min do dia
          07/03/2024.
        </Typography>
        {/* Adicione mais detalhes conforme necessário */}
      </Paper>
      <Typography variant="h6" gutterBottom>
        Limites de Compra:
      </Typography>
      <Paper
        elevation={3}
        style={{ padding: '20px', marginBottom: '20px', marginTop: '20px' }}
      >
        <List>
          <ListItem>
            <ListItemText
              primary="Brinquedos"
              secondary="15 unidades, máximo 3 por tipo"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Artigos de bazar"
              secondary="15 unidades, máximo 3 por tipo"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Equipamentos eletro-eletrônicos"
              secondary="2 unidades por tipo"
            />
          </ListItem>
          {/* Adicione mais itens conforme necessário */}
        </List>
      </Paper>
      {/* Adicione mais seções conforme necessário */}
    </div>
  )
}

export default EventDetails
