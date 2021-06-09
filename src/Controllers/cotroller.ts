import { Request, Response } from 'express'
import dfff from 'dialogflow-fulfillment'
import { agendamento } from '../Services/demoService'

export const Demo = async (req: Request, res: Response) => {

  const agent = new dfff.WebhookClient({
    request: req,
    response: res
  })

  let intentMap = new Map();
  intentMap.set('agendamento.laboratorio', agendamento)
  agent.handleRequest(intentMap)

}
