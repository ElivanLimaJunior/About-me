import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../Projects/ProjectCard/projectCardJS";
import { ProjectCardReact } from "../Projects/ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../Projects/ProjectCard/projectCardHTMLeCSS";
// DataScience

import CienciaDeDados2 from '../../assets/Certificados/DataScience/CienciaDeDados2.png';
import CursoBasicoDeDashboardNoExcel from '../../assets/Certificados/DataScience/CursoBasicoDeDashboardsNoExcel.png';
import ExcelFormaçãoEspecialista from '../../assets/Certificados/DataScience/ExcelFormaçãoEspecialista.png';
import FormaçãoExcelVba from '../../assets/Certificados/DataScience/FormaçãoExcelVba.png';
import FormaçãoPowerBi from '../../assets/Certificados/DataScience/FormaçãoPowerBi.png';
import GestãoDeManutençãoComPowerBi from '../../assets/Certificados/DataScience/GestãoDeManutençãoComPowerBi.png';
import Python3Mundo1 from '../../assets/Certificados/DataScience/Python3Mundo1.png';
import Python3Mundo2 from '../../assets/Certificados/DataScience/Python3Mundo2.png';
import Python101ForDataScience from '../../assets/Certificados/DataScience/Python101ForDataScience.png';
import ModelagemDeBancoDeDados from '../../assets/Certificados/DataScience/ModelagemDeBancoDeDados.png';
import ModelagemDeBancoDeDadosRelacional from '../../assets/Certificados/DataScience/ModelagemDeBancoDeDadosRelacional.png';

// Gestão

import DiplomaAdministração from '../../assets/Certificados/Gestão/DiplomaAdministração.png'
import FormaçãoGestãoDaQualidade from '../../assets/Certificados/Gestão/FormaçãoGestãoDaQualidade.png'
import LogisticaDeEstoque from '../../assets/Certificados/Gestão/LogisticaDeEstoque.png'
import OAdministradorNaConteporaneidade from '../../assets/Certificados/Gestão/OAdministradorNaConteporaneidade.png'
import Bizagi from '../../assets/Certificados/Gestão/Bizagi.png'
import SixSigma from '../../assets/Certificados/Gestão/SixSigma.png'

//Web
import FormaçãoHtmlECSS from '../../assets/Certificados/Web/FormaçãoHtlmECss.png'
import formacaoFrontEnd from '../../assets/Certificados/Web/FormaçãoFrontEnd.png'
import FormacaoAcessibilidadeWeb from '../../assets/Certificados/Web/FormaçãoAcessibilidadeWeb.png'
import React from '../../assets/Certificados/Web/React.png'
import React2 from '../../assets/Certificados/Web/React2.png'
import React3 from '../../assets/Certificados/Web/React3.png'
import React4 from '../../assets/Certificados/Web/React4.png'
import SASS from '../../assets/Certificados/Web/SASS.png'
import Tailwind from '../../assets/Certificados/Web/Tailwind.png'
import TypescriptParte1 from '../../assets/Certificados/Web/TypescriptParte1.png'
import TypescriptParte2 from '../../assets/Certificados/Web/TypescriptParte2.png'
import Seo from '../../assets/Certificados/Web/SEO.png'
import Javascript from '../../assets/Certificados/Web/Javascript.png'
import HTML5CSS3M1 from '../../assets/Certificados/Web/HTML5CSS3M1.png'
import HTML5CSS3M2 from '../../assets/Certificados/Web/HTML5CSS3M2.png'

//Outros
import FormaçãoComunicação from '../../assets/Certificados/Outros/FormaçãoComunicação.png'
import FormaçãoComunicaçãoParaLideres from '../../assets/Certificados/Outros/FormaçãoComunicaçãoParaLideres.png'
import FormaçãoComunicaçãoParaLideres2 from '../../assets/Certificados/Outros/FormaçãoComunicaçãoParaLideres2.png'
import FormaçãoTécnicasDeVendas from '../../assets/Certificados/Outros/FormaçãoTécnicasDeVendas.png'
import FormaçãoVendasDeAltaPerformance from '../../assets/Certificados/Outros/FormaçãoVendasDeAltaPerformance.png'
import InformáticaBásica from '../../assets/Certificados/Outros/InformáticaBásica.png'
import MarketPessoal from '../../assets/Certificados/Outros/MarketPessoal.png'
import NR12 from '../../assets/Certificados/Outros/NR12.png'
import OperadorDeMicro from '../../assets/Certificados/Outros/OperadorDeMicro.png'


export const Certificados = ({ isOriginalText }) => {
    const projectsExcel = [
        {
            title: "Services Request",
            description: "No projeto Services Request com Power BI, transformei dados brutos em insights por meio de dashboards interativos. Trabalhei com importação, modelagem e visualizações claras usando filtros, slicers e gráficos. Também desenvolvi habilidades em storytelling com dados para apoiar decisões estratégicas.",
            imgUrl: GestãoDeManutençãoComPowerBi,
            link: null
        },
        {
            title: "Python 3 - Mundo1",
            description: "No curso Python 3 - Mundo 1, aprendi os fundamentos da programação em Python, incluindo sintaxe, variáveis, tipos de dados e estruturas de controle. Explorei como construir programas simples utilizando condicionais, loops e funções. Também aprendi a manipular listas e dicionários, além de entender a importância da indentação e do estilo de codificação no Python. Este curso forneceu uma base sólida para meu desenvolvimento como programador, permitindo-me resolver problemas e criar soluções automatizadas de forma eficaz.",
            imgUrl: Python3Mundo1,
            link: null
        },
        {
            title: "Python 3 - Mundo 2",
            description: "No curso Python 3 - Mundo 2, aprofundei meus conhecimentos em Python, aprendendo sobre programação orientada a objetos, que me permitiu criar classes e objetos para organizar melhor o código. Explorei módulos e pacotes, além de aprender sobre tratamento de exceções e manipulação de arquivos. O curso também abordou a criação de projetos mais complexos, reforçando a lógica de programação e a aplicação de conceitos fundamentais. Essa experiência aprimorou minhas habilidades e me preparou para enfrentar desafios mais avançados na programação.",
            imgUrl: Python3Mundo2,
            link: null
        },
        {
            title: "Python 101 For Data Science",
            description: "No curso Python 101 For Data Science, aprendi os fundamentos da programação em Python focados em ciência de dados. Desenvolvi habilidades em manipulação de dados, uso de bibliotecas como Pandas e NumPy, e criei scripts básicos para análise de dados.",
            imgUrl: Python101ForDataScience,
            link: null
        },
        {
            title: "Excel Formação Especialista",
            description: "No curso Excel Formação Especialista, aprofundei meus conhecimentos em Excel, explorando funcionalidades avançadas, como tabelas dinâmicas, fórmulas complexas e automação com macros. Aprendi a otimizar processos e análises, criando relatórios dinâmicos e dashboards interativos para tomada de decisões estratégicas.",
            imgUrl: ExcelFormaçãoEspecialista,
            link: null
        },
        {
            title: "Formação Excel e Vba",
            description: "Na Formação Excel e VBA, combinei as potências do Excel com a automação proporcionada pelo VBA. Aprendi a criar macros para otimizar tarefas repetitivas, desenvolvi soluções personalizadas e melhorei minha eficiência na análise de dados, permitindo um trabalho mais ágil e preciso.",
            imgUrl: FormaçãoExcelVba,
            link: null
        },
        {
            title: "Curso Basico DeDashboard No Excel",
            description: "O Curso Básico de Dashboard no Excel me ensinou a criar painéis de controle interativos e informativos. Explorei técnicas de visualização de dados e design de dashboards, permitindo que eu apresentasse informações complexas de forma clara e acessível para a tomada de decisões.",
            imgUrl: CursoBasicoDeDashboardNoExcel,
            link: null
        },
        {
            title: "Introdução à Ciência De Dados 2.0",
            description: "Na Introdução à Ciência de Dados 2.0, obtive uma visão geral dos conceitos e ferramentas essenciais da ciência de dados. Aprendi sobre coleta, limpeza e análise de dados, além de métodos de visualização e interpretação, preparando-me para trabalhar com dados de forma mais efetiva.",
            imgUrl: CienciaDeDados2,
            link: null
        },
        {
            title: "Formação Power Bi",
            description: "Na Formação Power BI, adquiri habilidades para criar relatórios e dashboards interativos utilizando o Power BI. Aprendi a conectar diferentes fontes de dados, transformar informações em insights e desenvolver visualizações dinâmicas que facilitam a análise e a comunicação de resultados.",
            imgUrl: FormaçãoPowerBi,
            link: null
        },
        {
            title: "Modelagem De Banco De Dados",
            description: "O curso de Modelagem de Banco de Dados me proporcionou uma compreensão sólida dos princípios de design de bancos de dados. Aprendi a criar modelos que otimizam a estrutura e a eficiência de armazenamento, além de garantir a integridade dos dados em sistemas de informação.",
            imgUrl: ModelagemDeBancoDeDados,
            link: null
        },
        {
            title: "Modelagem De Banco DeDados Relacional",
            description: "Na Modelagem de Banco de Dados Relacional, explorei as técnicas específicas para projetar bancos de dados relacionais. Aprendi sobre normalização, relacionamentos entre tabelas e a importância de um design adequado para garantir a eficiência e a escalabilidade dos sistemas de dados.",
            imgUrl: ModelagemDeBancoDeDadosRelacional,
            link: null
        },
    ];
    const projectsWeb = [
        {
            title: "Formação Html e CSS",
            description: "Na formação em HTML e CSS, explorei os fundamentos da construção de páginas web. Aprendi a estruturar conteúdo usando HTML, criando elementos semânticos que melhoram a acessibilidade e a indexação em motores de busca. No CSS, estudei como estilizar e layout, incluindo o uso de seletores, propriedades e técnicas avançadas como flexbox e grid.",
            imgUrl: FormaçãoHtmlECSS,
            link: "#"
        },
        {
            title: "Formação Front End",
            description: "Na formação em Front End, adquiri conhecimentos essenciais para o desenvolvimento de interfaces web interativas e responsivas. Estudei as tecnologias fundamentais, incluindo HTML, CSS e JavaScript, e aprendi a criar layouts atraentes e funcionais. Explorei frameworks e bibliotecas populares, como React, que permitem a construção de aplicações dinâmicas e eficientes.",
            imgUrl: formacaoFrontEnd,
            link: "#"
        },
        {
            title: "Formação Acessibilidade Web",
            description: "Na formação em Acessibilidade Web, aprendi os princípios fundamentais para tornar websites e aplicações acessíveis a todos os usuários, independentemente de suas habilidades ou limitações. Estudei as diretrizes do WCAG (Web Content Accessibility Guidelines) e apliquei técnicas para garantir que o conteúdo seja navegável e utilizável por pessoas com deficiências visuais, auditivas, motoras e cognitivas.",
            imgUrl: FormacaoAcessibilidadeWeb,
            link: "#"
        },
        {
            title: "React: Desenvolvendo com Javascript",
            description: "No curso React: Desenvolvendo com JavaScript, explorei a integração do React com JavaScript para construir aplicações interativas e dinâmicas. Aprendi a utilizar as funcionalidades modernas do JavaScript, como ES6+ e async/await, para gerenciar o fluxo de dados e a lógica de negócios em componentes React.",
            imgUrl: React,
            link: "#"
        },
        {
            title: "React: Como os Componentes Funcionam",
            description: "No curso React: Como os Componentes Funcionam, aprofundei-me na estrutura fundamental dos componentes do React. Aprendi a criar componentes funcionais e de classe, entendendo suas diferenças e aplicações. Explorei o conceito de props e state, que permitem a passagem de dados e a gestão do estado dentro da aplicação.",
            imgUrl: React2,
            link: "#"
        },
        {
            title: "React: Comece Seu Projeto Full Stack",
            description: "No curso React: Comece Seu Projeto Full Stack, aprendi a desenvolver aplicações completas utilizando React. Explorei conceitos fundamentais como gerenciamento de estado, roteamento e requisições a APIs. Através de projetos práticos, adquiri habilidades em criar interfaces interativas e responsivas, além de entender como conectar o front-end ao back-end, proporcionando uma experiência de desenvolvimento full stack.",
            imgUrl: React3,
            link: "#"
        },
        {
            title: "React Com Javascript: Lidando com arquivos Estáticos",
            description: "No curso React Com Javascript: Lidando com arquivos Estáticos, aprendi a integrar e gerenciar arquivos estáticos em aplicações React. Explorei as melhores práticas para otimizar o desempenho do carregamento desses arquivos, garantindo uma experiência de usuário mais fluida.",
            imgUrl: React4,
            link: "#"
        },
        {
            title: "SASS: CSS Sintaticamente Espetacular",
            description: "No curso de SASS, aprendi a utilizar esta poderosa extensão do CSS que oferece recursos como variáveis, aninhamento, mixins e herança. Explorei como essas funcionalidades facilitam a escrita de código mais organizado e modular, tornando a manutenção de estilos muito mais simples. O curso também abordou a compilação do SASS para CSS, permitindo que eu implemente práticas de desenvolvimento mais eficientes e escaláveis em projetos web.",
            imgUrl: SASS,
            link: "#"
        },
        {
            title: "Tailwind CSS",
            description: "No curso de Tailwind CSS, aprendi a utilizar este framework utility-first para criar layouts responsivos e estilizados de forma eficiente. Explorei como aplicar classes utilitárias para personalizar rapidamente elementos, economizando tempo na construção de interfaces. O curso também abordou a configuração do Tailwind, a criação de temas personalizados e a utilização de componentes reutilizáveis, permitindo-me desenvolver projetos mais flexíveis e escaláveis com um design moderno e coeso.",
            imgUrl: Tailwind,
            link: "#"
        },
        {
            title: "Typescript Parte 1",
            description: "No curso de TypeScript Parte 1, adquiri conhecimentos fundamentais sobre a linguagem TypeScript, incluindo suas características e vantagens em relação ao JavaScript. Aprendi a definir tipos, interfaces e classes, o que me permitiu criar códigos mais robustos e menos propensos a erros. O curso abordou também a configuração do ambiente de desenvolvimento, o uso de ferramentas de compilação e a integração com projetos JavaScript existentes, preparando-me para construir aplicações mais escaláveis e organizadas.",
            imgUrl: TypescriptParte1,
            link: "#"
        },
        {
            title: "Typescript Parte 2",
            description: "No curso de TypeScript Parte 2, aprofundei meus conhecimentos na linguagem, explorando conceitos avançados como generics, decorators e módulos. Aprendi a criar tipos avançados, utilizar o sistema de tipos de forma mais eficaz e aplicar práticas recomendadas para a organização de projetos. O curso também cobriu a integração do TypeScript com bibliotecas populares, permitindo-me desenvolver aplicações robustas e otimizadas, melhorando significativamente minha capacidade de trabalhar em projetos de grande escala.",
            imgUrl: TypescriptParte2,
            link: "#"
        },
        {
            title: "Seo: Otimização de Sites",
            description: "Neste curso, aprendi a otimizar sites para melhorar sua visibilidade nos mecanismos de busca. Explorei técnicas essenciais de SEO on-page e off-page, incluindo a pesquisa de palavras-chave, a otimização de meta tags, a criação de conteúdo relevante e a construção de links. Também compreendi a importância da experiência do usuário e da velocidade do site, além de ferramentas úteis para análise de desempenho e monitoramento de resultados.",
            imgUrl: Seo,
            link: null
        },
        {
            title: "Javascript",
            description: "Neste curso, aprendi a linguagem de programação JavaScript, que é fundamental para o desenvolvimento web. Explorei conceitos como variáveis, tipos de dados, estruturas de controle, funções e manipulação do DOM. Aprendi a criar interatividade em páginas web, implementar validação de formulários e usar APIs para integrar dados externos. Também tive uma introdução ao desenvolvimento de aplicações utilizando JavaScript assíncrono, promessas e o conceito de programação orientada a objetos.",
            imgUrl: Javascript,
            link: null
        },
        {
            title: "HTML5 CSS3 Modulo: 1",
            description: "No curso HTML5 + CSS3 M01, desenvolvi uma sólida compreensão dos fundamentos do HTML e CSS. Aprendi a criar estruturas básicas de páginas da web utilizando as tags semânticas do HTML5, além de aplicar estilos com CSS para melhorar a apresentação visual. O curso me proporcionou habilidades em formatação de texto, manipulação de cores e imagens, e a criação de layouts simples, preparando-me para avançar em projetos web mais complexos.",
            imgUrl: HTML5CSS3M1,
            link: null
        },
        {
            title: "HTML5 CSS3 Modulo: 2",
            description: "Neste curso, aprofundei meus conhecimentos em HTML5 e CSS3, focando em técnicas avançadas de estilização e layout. Aprendi a utilizar novos elementos semânticos do HTML5 para estruturar melhor as páginas, além de explorar o uso de Flexbox e Grid Layout para criar designs responsivos e adaptáveis. Também me familiarizei com animações e transições em CSS, aprimorando a experiência do usuário e tornando as interfaces mais dinâmicas e atraentes.",
            imgUrl: HTML5CSS3M2,
            link: null
        },
    ];
    const projectsGestão = [
        {
            title: "Diploma Superior Administração",
            description: "Com o Diploma Superior em Administração, desenvolvi uma base sólida em princípios de gestão, finanças, marketing, recursos humanos e operações. Adquiri habilidades estratégicas e operacionais para liderar e administrar organizações, focando na eficiência, inovação e crescimento sustentável.",
            imgUrl: DiplomaAdministração,
            link: null
        },        
        {
            title: "Formação Gestão Da Qualidade",
            description: "Na Formação em Gestão da Qualidade, aprendi sobre sistemas e ferramentas de controle de qualidade, incluindo metodologias como ISO 9001 e ferramentas de melhoria contínua. Desenvolvi a capacidade de implementar processos que asseguram a excelência e a conformidade em produtos e serviços.",
            imgUrl: FormaçãoGestãoDaQualidade,
            link: null
        },        
        {
            title: "Logistica De Estoque",
            description: "O curso Logística de Estoque me proporcionou conhecimentos em gerenciamento de inventário, estratégias de armazenamento e técnicas de otimização de estoques. Aprendi a balancear a oferta e a demanda, minimizando custos e garantindo a disponibilidade de produtos.",
            imgUrl: LogisticaDeEstoque,
            link: null
        },        
        {
            title: "O Administrador Na Conteporaneidade",
            description: "O Administrador na Contemporaneidade abordou as habilidades e competências necessárias para um gestor moderno. Aprendi a lidar com desafios atuais, como inovação tecnológica, sustentabilidade e gestão de equipes diversificadas, preparando-me para atuar de forma eficaz no cenário empresarial atual.",
            imgUrl: OAdministradorNaConteporaneidade,
            link: null
        },
        {
            title: "Bizagi",
            description: "No curso de Bizagi, adquiri conhecimentos em modelagem de processos de negócios utilizando a plataforma Bizagi. Aprendi a criar, automatizar e otimizar processos empresariais, melhorando a eficiência operacional e a qualidade dos serviços.",
            imgUrl: Bizagi,
            link: null
        },   
        {
            title: "Six Sigma",
            description: "O curso de Six Sigma me capacitou a aplicar a metodologia Six Sigma para melhorar processos e eliminar defeitos. Aprendi técnicas estatísticas e ferramentas de qualidade, focando na redução de variação e no aumento da eficiência, resultando em melhorias significativas na performance organizacional.",
            imgUrl: SixSigma,
            link: null
        },   
    ];
    const Outros = [
        {
            title: "Formação Comunicação",
            description: "Na Formação em Comunicação, desenvolvi habilidades essenciais para a comunicação eficaz, incluindo técnicas de apresentação, habilidades interpessoais e estratégias de comunicação escrita e verbal. Aprendi a transmitir mensagens de maneira clara e persuasiva, essencial para o sucesso profissional.",
            imgUrl: FormaçãoComunicação,
            link: null
        },
        {
            title: "Formação Comunicação Para Lideres - 40 horas",
            description: "O curso Formação Comunicação para Líderes - 40 horas focou no desenvolvimento de competências comunicativas específicas para líderes. Aprendi técnicas de comunicação assertiva, escuta ativa e gestão de conflitos, essenciais para liderar equipes de maneira eficaz.",
            imgUrl: FormaçãoComunicaçãoParaLideres,
            link: null
        },
        {
            title: "Formação Comunicação Para Lideres - 46 horas",
            description: "Na Formação Comunicação para Líderes - 46 horas, aprofundei minhas habilidades de comunicação em ambientes de liderança. O curso incluiu estratégias avançadas de comunicação, coaching e desenvolvimento de equipes, preparando-me para liderar com confiança e eficácia.",
            imgUrl: FormaçãoComunicaçãoParaLideres2,
            link: null
        },
        {
            title: "Formação Técnicas De Vendas",
            description: "A Formação em Técnicas de Vendas proporcionou conhecimentos sobre estratégias de vendas, técnicas de negociação e psicologia do consumidor. Aprendi a identificar necessidades dos clientes, apresentar soluções eficazes e fechar vendas de maneira eficiente.",
            imgUrl: FormaçãoTécnicasDeVendas,
            link: null
        },
        {
            title: "Formação Vendas De Alta Performance",
            description: "No curso Formação Vendas de Alta Performance, adquiri habilidades para maximizar resultados em vendas. O foco foi em técnicas avançadas de prospecção, estratégias de fechamento e manutenção de relacionamentos com clientes, visando a alta performance e fidelização.",
            imgUrl: FormaçãoVendasDeAltaPerformance,
            link: null
        },
        {
            title: "Informática Básica",
            description: "No curso de Informática Básica, aprendi os fundamentos do uso de computadores e softwares comuns, incluindo processamento de texto, planilhas, navegação na internet e gerenciamento de arquivos. Este curso foi essencial para desenvolver habilidades tecnológicas básicas.",
            imgUrl: InformáticaBásica,
            link: null
        },
        {
            title: "Market Pessoal",
            description: "O curso Marketing Pessoal ensinou estratégias para promover a própria imagem e habilidades no mercado de trabalho. Aprendi a criar uma marca pessoal, utilizar redes sociais de maneira eficaz e técnicas de networking para alavancar minha carreira.",
            imgUrl: MarketPessoal,
            link: null
        },
        {
            title: "NR 12",
            description: "No curso NR 12, adquiri conhecimentos sobre as normas regulamentadoras de segurança no trabalho com máquinas e equipamentos. Aprendi a identificar e prevenir riscos, garantindo um ambiente de trabalho seguro e conforme as regulamentações vigentes.",
            imgUrl: NR12,
            link: null
        },
        {
            title: "Operador De Micro",
            description: "O curso de Operador de Micro proporcionou habilidades práticas no uso de computadores, incluindo operação de sistemas operacionais, softwares de produtividade e navegação na internet. Este curso foi fundamental para o desenvolvimento de competências básicas em informática.",
            imgUrl: OperadorDeMicro,
            link: null
        },        
    ]

    const title = isOriginalText ? "Certificados" : "Certifications";
    const description = isOriginalText 
        ? "Aqui você encontra minhas certificações."
        : "Here you can find my certifications.";

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>{title}</h2>
                        <p>
                            {description}
                            <a className="project-link2" href="https://github.com/ElivanLimaJunior" rel="noreferrer" target="_blank">
                                <em></em>
                            </a>
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Data Science</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Desenv. Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Gestão e inovação</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Outros Cursos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsExcel.map((project, index) => {
                                                return (
                                                    <ProjectCardJS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsWeb.map((project, index) => {
                                                return (
                                                    <ProjectCardReact
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsGestão.map((project, index) => {
                                                return (
                                                    <ProjectsHTMLeCSS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            Outros.map((project, index) => {
                                                return (
                                                    <ProjectCardJS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}