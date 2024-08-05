import { ollama } from 'ollama-ai-provider'
import { streamText } from 'ai'

export const maxDuration = 30;

export async function POST(request: Request) {
    try {
      console.log('chegou na api')
      const { messages } = await request.json();
      console.log('Dados recebidos:', { messages });

      const result = await streamText({
        model: ollama('gemma2'),
        messages,
      })
      console.log('Resultado do streamText:', result);
      return result.toDataStreamResponse()
      

    } catch (error) {
      console.log('Error:', error)
    }
}