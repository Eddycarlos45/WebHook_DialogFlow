import dfff from 'dialogflow-fulfillment'

export function agendamento(agent: dfff.WebhookClient) {

  const laboratorio = agent.parameters['tipo-laboratorio'].toLowerCase()
  
  switch(laboratorio) {
    case 'medicina': 
    agent.add('Seu agendamento esta confirmado para Medicina');
    agent.add('Não esqueça de trazer seu jaleco');
    break;

    case 'biologia': 
    agent.add('Seu agendamento esta confirmado para Biologia');
    agent.add('Não esqueça de trazer seu próprio sapo');
    break;

    case 'quimica': 
    agent.add('Seu agendamento esta confirmado para Quimica');
    agent.add('Por favor não exploda nada !!');
    break;
  }
}
