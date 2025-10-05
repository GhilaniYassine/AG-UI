import { CopilotChat } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">AG-UI Assistant</h1>
        <div className="h-[600px]">
          <CopilotChat
            instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
            labels={{
              title: "Your Assistant",
              initial: "Hi! 👋 How can I assist you today?",
            }}
          />
        </div>
      </div>
    </div>
  );
}
