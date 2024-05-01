"use client";

// import { useChat } from "ai/react";

export default function Chat() {
  // const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messages = [
    {
      id: "1",
      role: "user",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: "2",
      role: "AI",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, esse! Corrupti ea corporis quibusdam blanditiis optio, reprehenderit, ullam ipsa eaque laboriosam voluptate quisquam ad quaerat doloremque velit exercitationem sit cupiditate qui! Eum excepturi accusamus id molestiae. Ut nihil ab eveniet deserunt enim corrupti dicta quam? Perferendis fugit quaerat sequi in?",
    },
    {
      id: "3",
      role: "user",
      content:
        "Labore, esse! Corrupti ea corporis quibusdam blanditiis optio, reprehenderit, ullam ipsa eaque laboriosam voluptate quisquam ad quaerat doloremque velit exercitationem sit cupiditate qui! Eum excepturi accusamus id molestiae.",
    },
    {
      id: "4",
      role: "AI",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, esse! Corrupti ea corporis quibusdam blanditiis optio, reprehenderit, ullam ipsa eaque laboriosam voluptate quisquam ad quaerat doloremque velit exercitationem sit cupiditate qui! Eum excepturi accusamus id molestiae. Ut nihil ab eveniet deserunt enim corrupti dicta quam? Perferendis fugit quaerat sequi in?",
    },
  ];
  return (
    <div className="h-screen relative py-2 flex flex-col max-w-xl mx-auto gap-2 ">
      <div className="flex flex-col justify-start   py-5 overflow-y-scroll bg-white rounded gap-5 flex-grow">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`border rounded p-2 ml-1 mr-1 max-w-md p3 ${
              m.role === "user" ? "place-self-start" : "place-self-end"
            }`}
          >
            <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
            {m.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={() => {}}
        className=" flex gap-1 p-4 border bg-white rounded"
      >
        <input className="w-full " placeholder="Say something..." />
        <button>Send</button>
      </form>
    </div>
  );
}
