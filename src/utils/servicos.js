
import Bpa from '../assets/BPA_LOGO.png';
import cnes from '../assets/CNES_LOGO.png';
import sia from '../assets/SIA_LOGO.png';
import fpo from '../assets/FPO_LOGO.png';
import esus from '../assets/ESUS_LOGO.png';

const cnesDescription1 = "O Cadastro Nacional de Estabelecimentos de Saúde (CNES) é o sistema de informação oficial de cadastramento de informações de todos os estabelecimentos de saúde no país, independentemente de sua natureza jurídica ou de integrarem o Sistema Único de Saúde (SUS). Trata-se do cadastro oficial do Ministério da Saúde (MS) no tocante à realidade da capacidade instalada e mão-de-obra assistencial de saúde no Brasil em estabelecimentos de saúde públicos ou privados, com convênio SUS ou não.";
const cnesDescription2 = "O CNES é a base cadastral para operacionalização de mais de 90 (noventa)  sistemas de base nacional, tais como: Sistema de Informação Ambulatorial (SIA), Sistema de Informação Hospitalar (SIH), e- SUS Atenção Primária (e-SUS APS), entre outros. É uma ferramenta auxiliadora, que proporciona o conhecimento da realidade da rede assistencial existente e suas potencialidades, de forma a auxiliar no planejamento em saúde das três esferas de Governo, para uma gestão eficaz e eficiente.";

const bpaDescription1 = "O Boletim de Produção Ambulatorial (BPA) é um instrumento de captação de atendimentos ambulatoriais que não necessitam, obrigatoriamente, de autorização prévia do gestor. Há duas modalidades de registro: (1) consolidada (BPA-C), que não identifica o indivíduo atendido; e (2) individualizada (BPA-I) que identifica o indíviduo atendido. O instrumento de registro de cada procedimento é definido pela Tabela de Procedimentos, Órteses, Próteses e Materiais Especiais do SUS.";
const bpaDescription2 = "Vale ressaltar que todos os procedimentos correspondentes a atendimentos em indivíduos e que são passíveis de registro em BPA-C, podem também ser registrados em BPA-I. Recomenda-se que os estabelecimentos de saúde optem por registrar sua produção por meio do BPA-I, tanto pela maior qualidade da informação, quanto pela futura substituição do BPA pelo CMD, no qual todos os atendimentos deverão ser registrados de forma individualizada.";

const fpoDescription1 = "A Ficha de Programação Orçamentária (FPO) foi implantada no início da década de 1990,  quando instituído o Sistema de Informação Ambulatorial — SIA/SUS. A Ficha de Programação Orçamentária foi o instrumento de programação do SIA/SUS que substituiu o sistema GAP — Guia de Autorização de Pagamento.";
const fpoDescription2 = "No início, a FPO era feita por item de programação e o código dos procedimentos tinha 4 (quatro) dígitos e representava um conjunto de procedimentos, o que dificultava a precisão da programação física e orçamentária e, principalmente, a avaliação da produção, uma vez que agregava vários procedimentos em um só código. O gestor não podia, por  exemplo, deixar de programar algum procedimento daquele conjunto de procedimentos agregados, pois estavam todos no mesmo código.";

const siaDescription1 = "O Sistema de Informação Ambulatorial (SIA) foi instituído pela Portaria GM/MS n.º 896 de 29 de junho de 1990. Originalmente, o SIA foi concebido a partir do projeto SICAPS (Sistema de Informação e Controle Ambulatorial da Previdência Social), em que os conceitos, os objetivos e as diretrizes criados para o desenvolvimento do SICAPS foram extremamente importantes e amplamente utilizados para o desenvolvimento do SIA, tais como: (i) o acompanhamento das programações físicas e orçamentárias; (ii) o acompanhamento das ações de saúde produzidas; (iii) a agilização do pagamento e controle orçamentário e financeiro; e (iv) a formação de banco de dados para contribuir com a construção do SUS.";
const siaDescription2 = "A implantação do SIA em todo território nacional aconteceu em 1995 e o sistema entrou em funcionamento com o Boletim de Produção Ambulatorial Consolidado (BPA-C), registrando apenas o procedimento realizado e sua quantidade conforme profissional executante, sem identificação do paciente.";

const esusDescription1 = "O e-SUS Atenção Primária (e-SUS APS) é uma estratégia para reestruturar as informações da Atenção Primária em nível nacional. Esta ação está alinhada com a proposta mais geral de reestruturação dos Sistemas de Informação em Saúde do Ministério da Saúde, entendendo que a qualificação da gestão da informação é fundamental para ampliar a qualidade no atendimento à população.";
const esusDescription2 = "...";


const services = [
    {
        "id":"1",
        "titulo":"Boletim de Produção Ambulatorial",
        "sigla":"BPA",
        "descricao1":`${bpaDescription1}`,
        "descricao2":`${bpaDescription2}`,
        "icone":`${Bpa}`
    },
    {
        "id":"2",
        "titulo":"Cadastro Nacional de Estabelecimentos de Saúde",
        "sigla":"CNES",
        "descricao1":`${cnesDescription1}`,
        "descricao2":`${cnesDescription2}`,
        "icone":`${cnes}`
    },
    {
        "id":"3",
        "titulo":"Ficha de Programação Orçamentária",
        "sigla":"FPO",
        "descricao1":`${fpoDescription1}`,
        "descricao2":`${fpoDescription2}`,
        "icone":`${fpo}`
    },
    {
        "id":"4",
        "titulo":"Sistema de Informação Ambulatorial",
        "sigla":"SIA",
        "descricao1":`${siaDescription1}`,
        "descricao2":`${siaDescription2}`,
        "icone":`${sia}`
    },
    {
        "id":"5",
        "titulo":" e-SUS Atenção Primária",
        "sigla":"ESUS",
        "descricao1":`${esusDescription1}`,
        "descricao2":`${esusDescription2}`,
        "icone":`${esus}`
    },
]

export default services;