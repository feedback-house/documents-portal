/**
 * Copyright (c) 2017-present, Entria, Feedback Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        Documentação Feedback House
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/*<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />*/}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/*<Button href="#try">Try It Out</Button>*/}
            <Button href={docUrl('getting-started.html')}>Primeiro Acesso - Administradores da plataforma</Button>
            <Button href={docUrl('getting-started.html')}>Primeiro Acesso - Colaboradores</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              `**Dúvidas mais comuns:**` + 
              `<br>Como eu [crio uma meta](/docs/single-sign-on-getting-started.html)?` +
              `<br>Como [atualizo uma meta](/docs/single-sign-on-getting-started.html)?` +
              `<br><br>**Se você é gestor:**` +
              `<br>Como [aprovo metas da minha equipe](/docs/single-sign-on-getting-started.html)?` +
              `<br>Como [acompanho metas da minha equipe](/docs/single-sign-on-getting-started.html)?` +
              '</br></br>*Documentação completa sobre [**Metas**](/docs/api-getting-started)*', 

            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Documentação Metas',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content: 
              'Create and integrate your own modules into the Feedback House platform.</br>' +
              '</br>Access millions of users and benefit from a fully engagement ecosystem.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Avaliação de Desempenho',
          },
        ]}
      </Block>
    );

    const FeedbackModule = () => (
      <Block background="light">
        {[
          {
            content:
              `**Dúvidas mais comuns:**` + 
              `<br>Como [dar um Feedback](/docs/feedback/feedback-user.html) para outro colaborador da minha empresa?` +
              `<br>Como vejo [Feedbacks recebidos](/docs/single-sign-on-getting-started.html)?` +
              `<br><br>**Se você é gestor:**` +
              `<br>Como vejo [Feedbacks da minha equipe](/docs/single-sign-on-getting-started.html)?` +
              `<br>Como agendo um 1a1 com meu time [Feedbacks da minha equipe](/docs/single-sign-on-getting-started.html)?` +
              `<br><br>*Documentação copleta sobre o módulo de [Feedback contínuo](/docs/module/feedback.html)*`,
              image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Feedback Contínuo',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
{/*    <Features />  */}
{/*    <FeatureCallout /> */}
          <FeedbackModule />
          <TryOut />
          <Description />
{/*          <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
