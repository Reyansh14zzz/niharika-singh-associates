export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a]" />

        {/* Gold Glow */}
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

        {/* Navbar */}
        <header className="absolute top-0 left-0 z-20 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

            <div>
              <h2 className="text-xl font-bold tracking-[0.35em] text-yellow-500">
                NIHARIKA SINGH
              </h2>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                & Associates
              </p>
            </div>

            <nav className="hidden gap-10 text-sm text-gray-300 md:flex">

              <a href="#home" className="hover:text-yellow-500">
                Home
              </a>

              <a href="#practice" className="hover:text-yellow-500">
                Practice Areas
              </a>

              <a href="#about" className="hover:text-yellow-500">
                About
              </a>

              <a href="#team" className="hover:text-yellow-500">
                Team
              </a>

              <a href="#contact" className="hover:text-yellow-500">
                Contact
              </a>

            </nav>

          <div className="flex items-center gap-4">

            <a
              href="#contact"
              className="hidden rounded-full border border-yellow-500 px-6 py-3 hover:bg-yellow-500 hover:text-black transition md:block"
            >
              Consultation
            </a>

            <button className="rounded-lg border border-white/20 px-4 py-2 text-xl md:hidden">
              ☰
            </button>

            </div>

          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center">

          <p className="mb-6 uppercase tracking-[0.5em] text-yellow-500">
            Premium Legal Services
          </p>

          <h1 className="animate-fade-in-up text-6xl font-bold leading-tight md:text-8xl">
            Legal Excellence.
            <br />
            Strategic Counsel.
          </h1>

          <p className="animate-fade-in-up mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            Delivering trusted legal solutions in Corporate Law,
            Litigation, Intellectual Property, Compliance and
            Commercial Advisory.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">

            <a
              href="#contact"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
>
              Book Consultation
            </a>

            <a
              href="#practice"
              className="rounded-full border border-gray-600 px-8 py-4 transition hover:border-yellow-500"
            >
              Explore Services
            </a>

          </div>

        </div>

            </section>

      {/* Practice Areas */}

      <section id="practice" className="bg-[#0b0b0b] py-24">

        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 uppercase tracking-[0.45em] text-yellow-500">
            Practice Areas
          </p>

          <h2 className="text-5xl font-bold">
            Legal Services
            <br />
            Tailored For You
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400">
            We provide thoughtful legal guidance with a commitment to
            professionalism, integrity, and practical solutions for
            individuals, businesses, and emerging enterprises.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Corporate Law</h3>
              <p className="text-gray-400">
                Business formation, governance, mergers, acquisitions,
                contracts and corporate compliance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Civil Litigation</h3>
              <p className="text-gray-400">
                Effective representation in civil disputes with a focus on
                strategic and practical outcomes.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Real Estate</h3>
              <p className="text-gray-400">
                Property transactions, due diligence, documentation and
                dispute resolution.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Intellectual Property</h3>
              <p className="text-gray-400">
                Trademark, copyright and brand protection for businesses
                and creators.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Employment Law</h3>
              <p className="text-gray-400">
                Employment contracts, workplace policies and dispute
                resolution for employers and employees.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <h3 className="mb-4 text-2xl font-semibold">Startup Advisory</h3>
              <p className="text-gray-400">
                Legal guidance for founders from incorporation to investment
                and growth.
              </p>
            </div>

          </div>

        </div>

           </section>

      {/* About Section */}

      <section id="about" className="bg-[#111111] py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="mb-4 uppercase tracking-[0.45em] text-yellow-500">
              About Us
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Trusted Legal
              <br />
              Representation
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Niharika Singh & Associates is committed to providing
              practical, ethical, and client-focused legal services.
              We work closely with individuals, startups, and businesses
              to deliver thoughtful legal advice tailored to their unique needs.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our approach combines legal knowledge, strategic thinking,
              and clear communication to help clients navigate complex
              legal matters with confidence.
            </p>

              <a
                href="#contact"
                className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Learn More
              </a>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-[40px] border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
              <img
  src="https://media.discordapp.net/attachments/1456295896550609073/1534627417870831768/cd7dca87-29c6-4f76-9376-09788c26195e.png?ex=6a74d0a8&is=6a737f28&hm=6605eb9e0ace5c4610f8e36d43346544fe3ea2e7284e94ab2ef5b32ee6910ff4&=&format=webp&quality=lossless&width=768&height=1024"
  alt="Founder"
  className="h-[500px] w-full max-w-md rounded-[40px] object-cover"
/>

              

            </div>

          </div>

        </div>

      </section>
{/* Contact Section */}

<section id="contact" className="bg-[#111111] py-28">

  <div className="mx-auto max-w-7xl px-8">

    <p className="mb-4 uppercase tracking-[0.45em] text-yellow-500">
      Contact Us
    </p>

    <h2 className="text-5xl font-bold">
      Schedule Your
      <br />
      Consultation
    </h2>

    <p className="mt-6 max-w-2xl text-gray-400">
      Contact our team for professional legal guidance and
      personalized solutions for your legal matters.
    </p>


    <div className="mt-12 grid gap-10 md:grid-cols-2">

      {/* Contact Info */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-2xl font-semibold">
          Get In Touch
        </h3>

        <p className="mt-6 text-gray-400">
          Email: niharika13sing64@gmail.com
        </p>

        <p className="mt-4 text-gray-400">
         <a
  href="tel:+919876543210"
  className="text-gray-400 hover:text-yellow-500"
>
  Phone: +91 98765 43210
</a>
        </p>

        <p className="mt-4 text-gray-400">
          Location: India
        </p>

      </div>


      {/* Form */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <form
          action="https://formspree.io/f/mnpaqznv"
          method="POST"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="mb-4 w-full rounded-xl bg-black p-4 text-white border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="mb-4 w-full rounded-xl bg-black p-4 text-white border border-white/10"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="mb-4 h-32 w-full rounded-xl bg-black p-4 text-white border border-white/10"
          />

          <button
            type="submit"
            className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:scale-105 transition"
          >
            Send Message
          </button>

          </form>

      </div>

    </div>

  </div>

</section>
{/* Footer */}

<footer className="border-t border-white/10 bg-[#050505] py-10">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">

    <div>
      <h2 className="text-xl font-bold tracking-[0.35em] text-yellow-500">
        NIHARIKA SINGH
      </h2>

      <p className="mt-2 text-xs uppercase tracking-[0.4em] text-gray-400">
        & Associates
      </p>
    </div>


    <div className="flex gap-8 text-sm text-gray-400">

      <a href="#" className="hover:text-yellow-500">
        Privacy Policy
      </a>

      <a href="#" className="hover:text-yellow-500">
        Terms
      </a>

      <a href="#contact" className="hover:text-yellow-500">
        Contact
      </a>

    </div>


    <p className="text-sm text-gray-500">
      © 2026 Niharika Singh & Associates. All rights reserved.
    </p>

  </div>

</footer>
    </main>
  );
}