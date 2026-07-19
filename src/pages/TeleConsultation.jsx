import React from "react";
import {
  Video,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Clock,
  Stethoscope,
  CheckCircle,
} from "lucide-react";

const services = [
  "General Physician Consultation",
  "Diabetes Follow-up",
  "Blood Pressure Management",
  "Women's Health",
  "Child Health",
  "Skin Consultation",
  "Medication Review",
  "Lab Report Review",
  "Follow-up Consultation",
];

const steps = [
  {
    title: "Book Appointment",
    desc: "Schedule your online consultation through our website or WhatsApp.",
  },
  {
    title: "Choose Time",
    desc: "Select a convenient date and time for your consultation.",
  },
  {
    title: "Consult the Doctor",
    desc: "Connect securely through video or audio call.",
  },
  {
    title: "Receive Guidance",
    desc: "Get medical advice and follow-up recommendations where appropriate.",
  },
];

const faqs = [
  {
    q: "How long is an online consultation?",
    a: "Most consultations take around 15–20 minutes, depending on your medical needs.",
  },
  {
    q: "Can I book a follow-up consultation?",
    a: "Yes, follow-up appointments can be scheduled if recommended by the doctor.",
  },
  {
    q: "What do I need before the consultation?",
    a: "Keep your previous medical records, prescriptions, and lab reports ready if applicable.",
  },
];

export default function TeleConsultation() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Online Healthcare
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Tele Consultation Services
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Consult experienced doctors from the comfort of your home through
              secure online video or audio consultations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/book-appointment"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment
              </a>

              <a
                href="tel:+911234567890"
                className="bg-blue-900 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/911234567890"
                className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>
          </div>

          <img
            src="/online doctor.jpg"
            alt="Online Doctor Consultation"
            className="rounded-3xl shadow-2xl"
          />

        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Conditions We Commonly Consult Online
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {services.map((service, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <CheckCircle className="text-green-600 mb-4" size={30} />
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Our Tele Consultation?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            <div className="bg-white rounded-2xl p-8 text-center shadow">
              <Video className="mx-auto text-blue-600" size={45} />
              <h3 className="font-bold mt-4">Video Consultation</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow">
              <Clock className="mx-auto text-blue-600" size={45} />
              <h3 className="font-bold mt-4">Minimal Waiting Time</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow">
              <Shield className="mx-auto text-blue-600" size={45} />
              <h3 className="font-bold mt-4">Private & Secure</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow">
              <Stethoscope className="mx-auto text-blue-600" size={45} />
              <h3 className="font-bold mt-4">Professional Medical Advice</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            {steps.map((step, index) => (
              <div key={index} className="text-center">

                <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold mt-5">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">

                <h3 className="font-bold text-lg">
                  {faq.q}
                </h3>

                <p className="text-gray-600 mt-2">
                  {faq.a}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Consult a Doctor Without Leaving Home
          </h2>

          <p className="mt-5 text-blue-100">
            Book your online consultation today and receive professional medical
            guidance from the comfort of your home.
          </p>

          <a
            href="/book-appointment"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Book Online Consultation
          </a>

        </div>

      </section>

    </div>
  );
}