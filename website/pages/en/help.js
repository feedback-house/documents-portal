/**
 * Copyright (c) 2017-present, Entria, Feedback Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: 'Você pode consultar diretamente a documentação disponível. Todo o material do portal é público e está a sua disposição para consulta a qualquer tempo.',
      title: 'Consultar Documentação',
    },
    {
      content: 'Ficou com alguma dúvida? Podemos te ajudar diretamente pelo chat',
      title: 'Ajuda via Chat',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Precisa de Ajuda?</h1>
          </header>
          <p>O Portal de Documentação da Feedback House é mantido por um time apaixonado e estamos sempre aqui para te ajudar!</p>
          <GridBlock contents={supportLinks} _layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
