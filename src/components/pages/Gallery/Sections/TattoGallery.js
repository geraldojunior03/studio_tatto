import './TattoGallery.css'

import previewImage from '../../../../img/preview.png'


function TattoGallery() {
  return (
    <section id='gallery'>
      <div className="gallery-content">
        <h2>Galeria</h2>
      </div>
      <div className="gallery-pictures">
        <img src={previewImage} alt="1" />
        <img src={previewImage} alt="2" />
        <img src={previewImage} alt="3" />
        <img src={previewImage} alt="4" />
        <img src={previewImage} alt="5" />
        <img src={previewImage} alt="6" />
        <img src={previewImage} alt="7" />
        <img src={previewImage} alt="8" />
        <img src={previewImage} alt="9" />
      </div>
    </section>
  )
}

export default TattoGallery
