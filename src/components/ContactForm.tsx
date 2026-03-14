import { useEffect, useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mwvrqwaq", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setStatus("SUCCESS");
            form.reset();
        } else {
            setStatus("ERROR");
        }
    };
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);


    return (
        <section id="contact" className="sm:py-8 md:py-10 lg:py-12 px-6 max-w-4xl mx-auto">
  <h3 className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent animate-slide-up">
    Contact
  </h3>

  <div className="flex justify-center animate-slide-up">
    <div className="w-full md:w-full lg:w-full">
      <div className="p-10 bg-graphite-400/20 backdrop-blur-xl rounded-3xl border border-yale-500/30 shadow-xl hover:shadow-2xl transition-all duration-500">
        <h4 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
          Get in Touch
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-xl border border-yale-500/30 bg-graphite-500/20 text-white focus:ring-2 focus:ring-stormy-400 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-xl border border-yale-500/30 bg-graphite-500/20 text-white focus:ring-2 focus:ring-stormy-400 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-xl border border-yale-500/30 bg-graphite-500/20 text-white focus:ring-2 focus:ring-stormy-400 outline-none transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-stormy-500 to-yale-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Send Message →
          </button>
        </form>

        {status === "SUCCESS" && (
          <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-xl text-center animate-fade-in">
            ✅ Message sent successfully!
          </div>
        )}
        {status === "ERROR" && (
          <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-xl text-center animate-fade-in">
            ❌ Something went wrong. Please try again.
          </div>
        )}
      </div>
    </div>
  </div>
</section>



    );
}