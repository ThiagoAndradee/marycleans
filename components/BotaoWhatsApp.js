import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BotaoWhatsApp = () => {
  const whatsappNumber = "+351911872282";
  const whatsappMessage = encodeURIComponent("Oi! Gostaria de verificar a disponibilidade para uma limpeza no dia XX/XX/XXXX as YY:YY:YY em Rua XXXXXX, XXXX - Lisboa!");

  return (
    <div className="fixed z-50 bottom-8 right-4">
      <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
         className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500 hover:bg-green-700 text-white transition duration-300 ease-in-out transform hover:scale-110"
         target="_blank"
         rel="noopener noreferrer"
         title="Fale conosco no WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white h-24" />
      </a>
    </div>
  );
};

export default BotaoWhatsApp;
