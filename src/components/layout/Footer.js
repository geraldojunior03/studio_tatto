import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="social-medias">
        <h2>Redes sociais</h2>
        <a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://wa.link/3uem9p" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className="address">
        <h2>Endereço</h2>
        <p>Rua tal...</p>
        <p>Telefone: (00) 0.0000-0000</p>
      </div>
      <div className="attendance">
        <h2>Atendimento</h2>
        <p>Segunda à Sábado: 00:00 - 00:00</p>
        <p>Domingo: <span>NÃO ATENDEMOS</span></p>
      </div>
    </footer>
  )
}

export default Footer
