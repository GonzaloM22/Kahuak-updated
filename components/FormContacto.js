import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Error from './error';
import Spinner from './spinner';

const FormContacto = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == '' || phone == '' || message == '') {
      setError(true);
    } else {
      setError(false);
      setSpinner(true);
      emailjs
        .sendForm(
          'service_b2ys53w',
          'template_uepu63e',
          e.target,
          'UeBCoi6hPrVL-058N'
        )
        .then((result) => {
          setSpinner(false);
        });

      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form
      className="space-y-5 w-[250px] md:w-[380px] text-xs md:text-sm mx-auto"
      onSubmit={handleSubmit}
    >
      {error && <Error>Todos los campos son obligatorios</Error>}

      <div>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-neutral-400 font-normal outline-none"
          placeholder="Nombre"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-neutral-400 outline-none font-normal"
          placeholder="Telefono"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-neutral-400  outline-none font-normal"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-neutral-400  outline-none font-normal"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu consulta aquí"
          rows={4}
        ></textarea>
      </div>
      {!spinner ? (
        <button className="w-full bg-amber-500/70 p-4 hover:text-zinc-900 hover:bg-amber-500/90 text-white cursor-pointer rounded-sm transition ease-in duration-300 uppercase shadow-lg font-semibold tracking-widest">
          Enviar Mensaje
        </button>
      ) : (
        <Spinner />
      )}
    </form>
  );
};

export default FormContacto;
