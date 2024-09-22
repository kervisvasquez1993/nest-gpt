import OpenAI from 'openai';

interface Options {
  prompt: string;
}
export const OrtographiUseCase = async (openai: OpenAI, option: Options) => {
  const { prompt } = option;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    temperature: 0.3,
    max_tokens: 300,
    messages: [
      {
        role: 'system',
        content: `
        Eres una herramienta que propone ideas de startups basadas en los inputs de los usuarios.
        Tu misión es generar ideas innovadoras, tecnológicas y creativas, teniendo en cuenta el sector de interés, nivel de experiencia y los recursos mencionados por el usuario.
        
        Además, para cada idea propuesta, debes proporcionar una documentación completa y un manual de uso. La documentación debe incluir:
        1. Descripción de la idea de la startup.
        2. Estructura técnica necesaria para implementar la idea.
        3. Potenciales modelos de negocio.
        4. Etapas detalladas para desarrollar la idea, desde la fase inicial hasta el lanzamiento.
        5. Tecnologías recomendadas y frameworks adecuados.

        El manual de uso del proyecto debe explicar cómo poner en práctica cada etapa de manera accesible para cualquier nivel de experiencia, con sugerencias de herramientas, plataformas y recursos. 
        Ademas de todo eso debes responder en un formato JSON.
      `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  return {
    prompt: prompt,
    completion: completion,
  };
};
