import React from 'react';
import complement_img from './img/complemento_chrome.png';
import complement_img1 from './img/complemento_chrome1.png';
import crmplugin from './img/call_plugin.jpeg';
import calculator from './img/calculator.png';
import mobile_1 from './img/mobile_example_1.bmp';
import mobile_2 from './img/mobile_example_2.png';
import social_media from './img/social_media.png';


function Portfolio() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <li style={{ marginRight: '20px' }}><a href="#experiencia">Experiencia Laboral</a></li>
            <li style={{ marginRight: '20px' }}><a href="#habilidades">Habilidades</a></li>
            <li style={{ marginRight: '20px' }}><a href="#desarrollos">Desarrollos en Syncstark</a></li>
            <li><a href="#otros">Otros desarrollos</a></li>
          </ul>
        </nav>


        <h1>Fernando Gastón Pavón</h1>
        <p>Desarrollador FullStack</p>
      </header>
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
        <section id='experiencia'>
          <h2>Experiencia Laboral</h2>
          <h3>Syncstark</h3>
          <p>
            Dirigí el desarrollo completo de soluciones web utilizando JavaScript, PHP y MySQL,
            implementando características innovadoras. Gestioné servidores NginX para un rendimiento óptimo,
            lideré la creación de extensiones de soluciones y desarrollé aplicaciones móviles con Flutter.
            Implementé la optimización y mantenimiento continuo del sistema para garantizar estabilidad,
            corrección de errores y seguridad.
          </p>
        </section>
        <section id='habilidades'>
          <h2>Habilidades</h2>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>PHP</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>React</li>
            <li>Dart/Flutter</li>
            <li>Linux</li>
            <li>Laravel</li>
          </ul>
        </section>
        <section id='desarrollos'>
          <h1>Desarrollos en Syncstark</h1>
        </section>
        <section>
          <h3>Data AutoFiller</h3>
          <div>
            <a href='https://chromewebstore.google.com/detail/data-autofiller/jlaffmkhengmgkdgkpnnllkmhmjjinig' target='new'>
              <img src={complement_img} alt="Miniatura del Sitio Web 1" style={{ maxWidth: '200px' }} />
            </a>
            <a href='https://github.com/Ferdinand77Raw/dataautofiller' target='new'>
              <img src={complement_img1} alt="Miniatura del Sitio Web 2" style={{ maxWidth: '200px' }} ></img>
            </a>
          </div>
        </section>
        <section>
          <h3>Data Search Plugin for VtigerCRM and MyCRM</h3>
          <a href='https://github.com/Ferdinand77Raw/plugin-search-mycrm' target='new'>
            <img src={crmplugin} alt='crm-plugin' style={{ maxWidth: '300px' }}></img>
          </a>
        </section>
        <section>
          <h3>Working Orders MobileApp</h3>
          <div>
            <a href='https://play.google.com/apps/internaltest/4700219812889066269' target='new'>
              <img src={mobile_1} alt="Captura de la Aplicación Móvil 1" style={{ maxWidth: '200px' }} />
            </a>
            <img src={mobile_2} alt="Captura de la Aplicación Móvil 2" style={{ maxWidth: '200px' }} />
          </div>
        </section>
        <hr></hr>
        <section id='otros'>
          <h2>Otros desarrollos</h2>
        </section>
        <section>
          <h3>Calculadora de ingresos y gastos</h3>
          <div>
            <a href="https://presupuestoapk.firebaseapp.com/" target='new'>
              <img src={calculator} alt='calculator' style={{ maxWidth: '300px' }}></img>
            </a>
            <h3>Red Social de fotos</h3>
            <a href='https://instagramfake-b88c9.web.app/' target='new'>
              <img src={social_media} alt='social_media' style={{ maxWidth: '300px' }}></img>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <h3 style={{ marginRight: '20px' }}>Contáctame:</h3>
        <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', alignItems: 'center' }}>
          <li style={{ marginRight: '20px' }}><a href="mailto:max9977raw@gmail.com" target='new'>Email</a></li>
          <li style={{ marginRight: '20px' }}><a href="https://www.linkedin.com/in/fernando-pavon-65467516a/" target='new'>LinkedIn</a></li>
          <li><a href="https://github.com/Ferdinand77Raw" target='new'>GitHub</a></li>
        </ul>
      </footer>

    </div>
  );
}

export default Portfolio;
