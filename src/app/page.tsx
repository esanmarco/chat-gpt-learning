import MessageForm from "./components/messageForm";

export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      <aside className="flex flex-col flex-shrink-0 w-64 h-full px-4 py-8 bg-gray-800 ">
        SIDEBAR
      </aside>

      <main className="flex flex-col flex-1 h-screen p-8 grow">
        <div className="flex flex-col flex-1 p-6 border-2 rounded grow border-slate-700">
          Messages section
        </div>

        <MessageForm />
      </main>
    </div>
  );
}
