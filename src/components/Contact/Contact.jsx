import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading-2">İletişim</h2>
      <p>Sosyal medya hesaplarımızı takip edebilir, aşağıdaki buton ile direkt olarak bize ulaşabilirsin!</p>
      <div className="contact__socials">
        <img src="/linkedin.svg" alt="linkedin icon"/>
        <img src="/instagram.svg" alt="instagram icon"/>
        <img src="/twitter.svg" alt="twitter icon"/>
        <img src="/whatsapp.svg" alt="whatsapp icon"/>
        <img src="/discord.svg" alt="discord icon"/>
      </div>
      <button className="btn btn-cta">BİZE ULAŞ</button>
    </section>
  );
};

export default Contact;
