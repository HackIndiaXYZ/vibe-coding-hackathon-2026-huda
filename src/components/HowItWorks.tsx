export default function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Upload Transcript",
        description:
          "Upload meeting transcript, recording, or meeting notes.",
      },
      {
        number: "02",
        title: "AI Analysis",
        description:
          "MeetingLens analyzes costs, decisions, action items, and discussion quality.",
      },
      {
        number: "03",
        title: "Get Insights",
        description:
          "Receive actionable recommendations and meeting performance metrics.",
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
  
        <p className="text-center text-gray-400 mb-14">
          Three simple steps to improve every meeting.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-8"
            >
              <div className="text-green-400 text-5xl font-bold mb-6">
                {step.number}
              </div>
  
              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>
  
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }