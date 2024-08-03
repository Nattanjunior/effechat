'use client'
import { useChat } from "ai/react";

export default function Home() {
  const { input, handleSubmit, messages, setInput } = useChat();
  return (
    <>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4">

            {messages.map((message) => {
              if (message.role !== "user") {
                return (
                  <div className="flex items-start gap-4" key={message.id}>
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">AI</span>
                    </span>

                    <div className="grid gap-1 bg-card p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm text-card-foreground">
                        {message.content}
                      </p>
                      <div className="text-xs text-muted-foreground">2:41 PM</div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="flex items-start gap-4 justify-end" key={message.id}>
                    <div className="grid gap-1 bg-primary p-3 rounded-lg max-w-[80%] text-primary-foreground">
                      <p className="text-sm">
                        {message.content}
                      </p>
                      <div className="text-xs text-primary-foreground/80">2:40 PM</div>
                    </div>

                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">YO</span>
                    </span>
                  </div>
                )
              }
            })}
          </div>
        </div>
        <form className="bg-card p-4 flex items-center gap-2" onSubmit={handleSubmit}>
          <input
            className="flex min-h-[80px] w-full border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-lg border-none bg-muted text-card-foreground p-2 focus:ring-0"
            placeholder="Escreva algo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full text-muted-foreground hover:bg-muted"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            <span className="sr-only">Enviar</span>
          </button>
        </form>
      </div >
    </>
  );
}
