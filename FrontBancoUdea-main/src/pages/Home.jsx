import React from 'react';
import '../styles/Clientes.css';

const Home = () => {
  return (
    <div className="clientes-container">
      <h2 className="cliente-title">Bienvenido al Banco UDEA</h2>
      <p style={{ fontSize: '18px', maxWidth: '800px', marginTop: '20px' }}>
        En <strong>Banco UDEA</strong> nos enorgullece ofrecer un servicio financiero de calidad, 
        seguro y confiable para todos nuestros clientes. Somos líderes en soluciones bancarias 
        innovadoras, pensadas para facilitar tu vida y ayudarte a alcanzar tus metas.
      </p>
      <p style={{ fontSize: '18px', maxWidth: '800px', marginTop: '10px' }}>
        Con nosotros, cuentas con la mejor atención, productos personalizados y una plataforma 
        moderna que se adapta a tus necesidades. Gracias por confiar en el mejor banco de Colombia. 
        ¡Estamos aquí para ti!
      </p>
    </div>
  );
};

export default Home;
