import React from "react";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Heart,
  ShieldCheck,
  Clock,
  Home,
  UserCheck,
} from "lucide-react";

const services = [
  "Elderly Care",
  "Post Operative Care",
  "ICU Care at Home",
  "Bedridden Patient Care",
  "Injection & IV Drip",
  "Wound Dressing",
  "Catheter Care",
  "Tracheostomy Care",
  "Mother & Baby Care",
  "Palliative Care",
  "Physiotherapy Support",
  "Medical Equipment Assistance",
];

const features = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Qualified Nurses",
    description: "Experienced and trained nursing professionals.",
  },
  {
    icon: <Clock size={40} className="text-blue-600" />,
    title: "24×7 Support",
    description: "Available whenever your family needs assistance.",
  },
  {
    icon: <Heart size={40} className="text-blue-600" />,
    title: "Compassionate Care",
    description: "Patient-focused care in the comfort of home.",
  },
  {
    icon: <Home size={40} className="text-blue-600" />,
    title: "Home Visits",
    description: "Professional healthcare delivered to your doorstep.",
  },
];

export default function HomeNursingServices() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Professional Home Healthcare
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Home Nursing Services
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Professional nursing care at home for elderly patients,
              post-surgery recovery, ICU support, wound care, injections,
              and long-term healthcare.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="tel:+9708651156"
                className="bg-white text-blue-700 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/9708651156"
                className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>
          </div>

          <img
            src="/Home Nursing Services.jpg"
            alt="Home Nursing Services"
            className="rounded-3xl shadow-2xl"
          />

        </div>
      </section>

      {/* Services */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Home Nursing Services
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Comprehensive healthcare services delivered at your home.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {services.map((service, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-xl transition"
              >
                <CheckCircle
                  className="text-green-600 mb-4"
                  size={30}
                />

                <h3 className="text-xl font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow"
              >
                <div className="flex justify-center">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How it Works */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Contact Us",
              "Patient Assessment",
              "Assign Qualified Nurse",
              "Start Home Care",
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold mt-5">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <UserCheck
            size={60}
            className="mx-auto mb-6"
          />

          <h2 className="text-4xl font-bold">
            Book Home Nursing Today
          </h2>

          <p className="mt-5 text-blue-100">
            Our experienced nursing professionals are ready to provide
            quality healthcare in the comfort of your home.
          </p>

          <a
            href="/appointment"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Book an Appointment
          </a>

        </div>

      </section>

    </div>
  );
}