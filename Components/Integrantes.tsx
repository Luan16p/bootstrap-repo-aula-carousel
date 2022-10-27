import * as React from 'react';

export default function Integrantes(props: any) {
  return (
    <section className="makers" id="makers">
      <div className="fmakers">
        <h2 id="makers-logo">Equipe</h2>

        <div className="content-makers">
          <div className="users">
            <div className="user1">
              <img
                src="https://github.com/Luan16p/Frameworks-img-database/blob/main/user.png?raw=true"
                alt=""
              />

              <div className="txt-user">
                <h3>Luan Freire Alves da Silva</h3>
                <p>
                  Desenvolveu o front-end, back-end, rotas e integração nodeJS
                </p>
              </div>
            </div>
            <div className="user2">
              <img
                src="https://github.com/Luan16p/Frameworks-img-database/blob/main/user.png?raw=true"
                alt=""
                style={{ color: '#fff' }}
              />

              <div className="txt-user">
                <h3>Sabrina Lima Robert</h3>
                <p>Desenvolveu as transições, animações e Responsividade</p>
              </div>
            </div>
          </div>
          <img
            src="https://github.com/Luan16p/Frameworks-img-database/blob/main/Programmer-pana.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
