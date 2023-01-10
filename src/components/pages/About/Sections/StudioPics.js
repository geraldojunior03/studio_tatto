import './StudioPics.css'

import previewImage from '../../../../img/preview.png'

function StudioPics() {
  return (
    <section id="studio-pics">
      <div className="line"></div>
      <h2>Fotos do nosso estúdio</h2>
      <div className="pictures">
        <img src={previewImage} alt="1" />
        <img src={previewImage} alt="2" />
        <img src={previewImage} alt="3" />
        <img src={previewImage} alt="4" />
      </div>
    </section>
  )
}

export default StudioPics
