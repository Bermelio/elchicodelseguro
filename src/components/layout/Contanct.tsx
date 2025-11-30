import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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

      emailjs.sendForm(
        'gmail_service',
        'template_seguro',
        formRef.current,
        'Dx2CVuzZ72E-vD1Du'
      )
      .then((result) => {
        setMessage('¡Mensaje enviado con éxito!');
        setLoading(false);
        formRef.current?.reset();
        if(result) console.log(result.text);
      }, (error) => {
        setMessage('Error al enviar. Intentá de nuevo.');
        setLoading(false);
        if(error) console.log(error.text);
      });
    }
  };

  return (
    <section id="contact" className="flex items-center justify-between p-12 bg-linear-to-b from-blanco-custom to-gris-custom gap-12">
      <div className="flex-1">
        <h2 className="text-6xl font-bold text-white mb-8">Escribinos</h2>
      </div>

      <div className="flex-1 max-w-2xl">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-white text-xl mb-2">Tu nombre</label>
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
              className="w-full px-6 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <input name="date" type="hidden" />
          <input name="time" type="hidden" />

          <div>
            <label className="block text-white text-xl mb-2">Tu email</label>
            <input
              type="email"
              name="user_email"
              placeholder="juanperez@tumail.com"
              required
              className="w-full px-6 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white text-xl mb-2">Tu Mensaje</label>
            <textarea
              name="message"
              placeholder="Lo que quieras consultarme o contarme"
              required
              rows={6}
              className="w-full px-6 py-3 rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-12 py-4 bg-gray-600 text-white text-xl rounded-full hover:bg-gray-700 transition-all disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          {message && (
            <p className={`text-lg ${message.includes('éxito') ? 'text-green-200' : 'text-red-200'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;