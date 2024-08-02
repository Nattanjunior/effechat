
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">AI</span>
              </span>
              <div className="grid gap-1 bg-card p-3 rounded-lg max-w-[80%]">
                <p className="text-sm text-card-foreground">¡Hola! ¿Cómo puedo ayudarte hoy?</p>
                <div className="text-xs text-muted-foreground">2:39 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="grid gap-1 bg-primary p-3 rounded-lg max-w-[80%] text-primary-foreground">
                <p className="text-sm">
                  Tengo algunas preguntas sobre cómo funciona la inteligencia artificial. ¿Podrías explicarme un poco más?
                </p>
                <div className="text-xs text-primary-foreground/80">2:40 PM</div>
              </div>
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">YO</span>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">AI</span>
              </span>
              <div className="grid gap-1 bg-card p-3 rounded-lg max-w-[80%]">
                <p className="text-sm text-card-foreground">
                  Claro, con gusto. La inteligencia artificial se basa en algoritmos y modelos de aprendizaje automático
                  que permiten a las máquinas procesar y analizar grandes cantidades de datos para realizar tareas y tomar
                  decisiones. ¿Tienes alguna pregunta más específica sobre cómo funciona?
                </p>
                <div className="text-xs text-muted-foreground">2:41 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-4 flex items-center gap-2">
          <textarea
            className="flex min-h-[80px] w-full border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-lg border-none bg-muted text-card-foreground p-2 focus:ring-0"
            placeholder="Escribe tu mensaje..."
          ></textarea>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full text-muted-foreground hover:bg-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-5 h-5"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            <span className="sr-only">Enviar</span>
          </button>
        </div>
      </div>
    </>
  );
}
