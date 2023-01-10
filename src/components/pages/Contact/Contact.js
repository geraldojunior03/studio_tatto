import './Contact.css'

function Contact() {

  function formSubmit(e){
    const $form = document.querySelector('form')

    e.preventDefault()
    $form.reset()

    alert('Formulário enviado com sucesso')
  }

  return (
    <div id="contact">
      <div className="main-container">
        <div className="contact form">
          <h2>Envie uma mensagem</h2>
          <form onSubmit={formSubmit}>
            <div className="form-content">
              <div className="smallrow">
                <div className="input-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="Nome" id="name" placeholder="Insira seu nome" required autoComplete="off" maxLength="20" />
                </div>
                <div className="input-group">
                  <label htmlFor="lastname">Sobrenome</label>
                  <input type="text" name="Sobrenome" id="lastname" placeholder="Insira seu sobrenome" required autoComplete="off" maxLength="20" />
                </div>
              </div>
              <div className="smallrow">
                <div className="input-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="Email" id="email" placeholder="Insira seu e-mail" required autoComplete="off" maxLength="50" />
                </div>
                <div className="input-group">
                  <label htmlFor="number">Telefone</label>
                  <input type="tel" name="Numero" id="number" placeholder="(xx) x.xxxx-xxxx" required autoComplete="off" maxLength="11" />
                </div>
              </div>
              <div className="bigrow">
                <div className="input-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea name="Descrição da tatuagem" id="message" placeholder="Insira uma descrição da tatuagem" required autoComplete="off" maxLength="300"></textarea>
                </div>
              </div>
              <div className="bigrow">
                <div className="input-group">
                  <input type="submit" value="Enviar" className="submit-btn" id="submit-btn" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact info">
          <h2>Informações para contato</h2>
          <div className="info-container">
            <p><i className="fa-solid fa-location-dot"></i>Rua Tal, 123 - São Paulo - SP</p>
            <p><i className="fa-solid fa-envelope"></i>E-mail:<a href="mailto:geraldojunior.2003@outlook.com">email@dominio.com</a></p>
            <p><i className="fa-brands fa-whatsapp"></i>Whatsapp:<a href="tel:+5511985727542">(00) 0.0000-0000</a></p>
            <p><i className="fa-brands fa-instagram"></i>Instagram:<a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer">@umperfilqualquer</a></p>
          </div>
        </div>
        <div className="contact map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197491658517!2d-46.660978970485395!3d-23.561349518472053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1673045266680!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Mapa'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
