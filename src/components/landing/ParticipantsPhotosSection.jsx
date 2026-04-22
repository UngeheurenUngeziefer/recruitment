import React from "react";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    alt: "Users completing an online product test",
  },
  {
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    alt: "Participants discussing usability test results",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    alt: "Remote participants taking a digital survey",
  },
];

export default function ParticipantsPhotosSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Real participants</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Users actively taking tests</h2>
          <p className="mt-4 text-gray-500 text-lg">
            We recruit real people and run studies in realistic settings across multiple markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
