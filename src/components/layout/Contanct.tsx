import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Whatsapp from '../common/whatsapp';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      const date = new Date();
      const dateStr = date.toLocaleDateString();
      const timeStr = date.toLocaleTimeString();

      const dateInput = formRef.current.querySelector<HTMLInputElement>('input[name="date"]');
      const timeInput = formRef.current.querySelector<HTMLInputElement>('input[name="time"]');

      if (dateInput) dateInput.value = dateStr;
      if (timeInput) timeInput.value = timeStr;

      emailjs
        .sendForm(
          'gmail_service',
          'template_seguro',
          formRef.current,
          'Dx2CVuzZ72E-vD1Du'
        )
        .then(
          (result) => {
            setMessage('¡Mensaje enviado con éxito!');
            setLoading(false);
            formRef.current?.reset();
            if (result) console.log(result.text);
          },
          (error) => {
            setMessage('Error al enviar. Intentá de nuevo.');
            setLoading(false);
            if (error) console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="contact w-full bg-linear-to-b from-blanco-custom to-gris-custom py-16 px-4">
      <div className="max-w-6xl md:pb-0 pb-20 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
          <h3 className="text-4xl md:text-5xl font-bold text-azul-oscuro-custom leading-tight">
            Contactanos
          </h3>
          <p className="text-2xl md:text-3xl font-semibold text-azul-custom">
            ¡Estamos al toque!
          </p>
          <p className="text-base md:text-lg text-azul-custom/80">
            Dejanos tus datos y un asesor se va a comunicar con vos para
            ayudarte a encontrar la mejor cobertura para tu seguro.
          </p>
        </div>

        <Whatsapp />

        <div
          className="w-full lg:w-7/12 bg-white/90 rounded-3xl shadow-xl p-6 md:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-azul-custom text-lg mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="w-full px-5 py-3 rounded-full border border-gray-200  text-gray-800  placeholder:text-gray-400focus:outline-none focus:outline-none focus:ring-2 focus:ring-azul-oscuro-custom/70 focus:border-transparent"
              />
            </div>

            <input name="date" type="hidden" />
            <input name="time" type="hidden" />

            <div>
              <label className="block text-azul-custom text-lg mb-2">
                Tu email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="juanperez@gmail.com"
                required
                className="w-full px-5 py-3 rounded-full border border-gray-200  text-gray-800  placeholder:text-gray-400focus:outline-none focus:outline-none focus:ring-2 focus:ring-azul-oscuro-custom/70 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-azul-custom text-lg mb-2">
                Tu mensaje
              </label>
              <textarea
              name="message"
              placeholder="Lo que quieras consultarme o contarme"
              required
              className="w-full px-5 py-3 rounded-3xl border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-azul-oscuro-custom/70 focus:border-transparent resize-none h-32"/>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-end sm:items-end gap-3">
              <button
                type="submit"
                disabled={loading}
                className="self-end sm:self-auto px-10 py-3 bg-azul-oscuro-custom text-white text-lg font-semibold rounded-full hover:bg-azul-custom transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>

              {message && (
                <p
                  className={`
                    text-sm md:text-base
                    ${
                      message.includes('éxito')
                        ? 'text-emerald-600'
                        : 'text-red-600'
                    }
                  `}
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
