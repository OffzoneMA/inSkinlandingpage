import React from "react";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";
import { useEffect } from "react";
export default function TermsOfUse() {
  const { language } = useLanguage();
  function createMarkup(text) {
    // uses the text assuming it might contain HTML-like strings.
    // Ensure to sanitize `text` here to prevent XSS attacks.
    return { __html: text };
  }
  useEffect(() => {
    document.getElementById("TermsOfUse").scrollIntoView();
  }, []);
  return (
    <Wrapper>
      <div className="container" id="TermsOfUse">
        <h1>{doc[language].header}</h1>
        {doc[language].content.map((section, index) => (
          <>
            <div className="title">{section.title}</div>
            <p>
              {section.text.map((element, index) => (
                <>
                  <p
                    key={index}
                    dangerouslySetInnerHTML={createMarkup(element)}
                  ></p>
                </>
              ))}
            </p>
          </>
        ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 5rem auto;
  max-width: var(--max-width);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.01rem;
  color: var(--dark);
  h1 {
    color: var(--Neutral-900);
    font-family: Inter;
    text-transform: capitalize;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.075rem;
  }
  .title {
    color: var(--pink);
    margin: 2rem 0;
  }
  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.01rem;
  }
  ul {
    padding-left: 2rem;
  }
  li {
    list-style-type: disc;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h1 {
      text-align: center;
    }
  }
`;
const doc = {
  en: {
    header: "Terms of Use",
    content: [
      {
        title: "",
        text: [
          "Access to the InSkin application (hereinafter referred to as the 'Application'), browsing through it, and the use of services provided by InSkin are governed by the terms of use (the 'Terms') detailed below.",
          "The Application is the exclusive property of the company OFFZONE, registered with the Trade and Companies Register of Taza under number 6429, and with its registered office located at Avenue Tarik Bouhadli TAHLA, Taza.",
        ],
      },
      {
        title: "Preamble",
        text: [
          "Every user of the Application acknowledges having read these Terms and agrees to them. The use of the Application constitutes an unconditional acceptance of the Terms.",
          "In the event of disagreement with any or part of the Terms, you must immediately refrain from using the Application. OFFZONE reserves the right to modify the Terms at any time and without prior notice. The modifications become effective immediately after the publication of the modified terms on the Application.",
        ],
      },
      {
        title: "Definitions",
        text: [
          "Application: refers to the mobile application edited and operated by OFFZONE.",
          "<strong>Terms:</strong> refers to these General Terms of Use of the Application.",
          "<strong>User Content:</strong> refers to the data transmitted by the User in the various sections of the Application.",
          "<strong>Browsing Data:</strong> refers to information related to your device's connection to the Application. We may use this browsing data for statistical purposes.",
          "<strong>Personal Data:</strong> refers to information related to Users.",
          "<strong>Partners:</strong> refers to all e-commerce websites or IT companies with which we have a direct or indirect partnership agreement.",
          "<strong>Services:</strong> refers to all services, paid or free, accessible to Users.",
          "<strong>User(s):</strong> refers to one (or all) person(s) registered on the Application.",
          "<strong>InSkin:</strong> refers to the product or brand of the company OFFZONE that publishes the Application.",
        ],
      },
      {
        title: "Access to Services",
        text: [
          "The services offered by InSkin via the Application include, among others:",
          "Consultation of information on cosmetic products through barcode scanning.",
          "The ability for Users to create and share posts, stories, and interact with other Users.",
          "Personalized recommendations for cosmetic products.",
          "Personalized promotions for cosmetic products.",
          "The Services are accessible for free to any User with internet access. All costs associated with accessing the Services, whether hardware, software, or internet access fees, are solely the responsibility of the user. The user is solely responsible for the proper functioning of their computer equipment and internet access.",
          "InSkin reserves the right to refuse access to the Services, unilaterally and without prior notice, to any User not complying with these terms of use.",
          "InSkin makes all reasonable efforts to ensure quality access to the Services but is not obliged to achieve this.",
          "Furthermore, InSkin cannot be held responsible for any malfunction of the network or servers or any other event beyond reasonable control that would prevent or degrade access to the Services.",
          "InSkin reserves the right to interrupt, temporarily suspend, or modify without notice access to all or part of the Services, in order to ensure maintenance or for any other reason, without such interruption giving rise to any obligation or compensation.",
        ],
      },
      {
        title: "Limitation of Liability",
        text: [
          "The User acknowledges having read and accepted these conditions, as well as having the skills to navigate the mobile application.",
          "The User is solely responsible for the User Content they upload via the Services, as well as for the texts and/or opinions they express. They undertake, in particular, that this data does not infringe on the legitimate interests of any third parties. In this regard, they indemnify InSkin against any claims, whether directly or indirectly based on such statements and/or data, that may be brought by anyone against InSkin. They specifically undertake to pay any sums, regardless of their nature, resulting from a third party's claim against InSkin, including attorney's fees and court costs.",
          "InSkin reserves the right to delete all or part of the User Content at any time and for any reason, without prior notice or justification. The User cannot make any claims in this regard.",
          "InSkin reserves the right to exclude a User if their behavior on the Application is not appropriate.",
          "InSkin also reserves the right to access, read, retain, or disclose any information deemed necessary to comply with any law, regulation, legal process, or governmental request in order to enforce these terms, including an investigation into potential violations of these terms, to detect, prevent, or report fraud, security, or technical issues, respond to user support requests, or protect the rights, property, or safety of InSkin, its users, and the public.",
          "InSkin provides certain information about cosmetic products, sourced from reputable sources. However, InSkin cannot guarantee the accuracy or relevance of this data. The information provided by the Application is for informational purposes only and should not be interpreted as advice or recommendations.",
          "InSkin cannot be held responsible for disputes between users of the Services and Partners.",
          "The information and/or documents available on the application may be changed at any time and may have been updated. Consequently, the user is solely responsible for the use of the information made available on the Application.",
          "The user agrees to indemnify InSkin for any harmful consequences directly or indirectly related to their use of the Service.",
          "InSkin undertakes to implement all necessary means to ensure the security and confidentiality of transmitted data.",
          "The user acknowledges the limitations and constraints inherent in the internet network and acknowledges in particular the impossibility of fully guaranteeing the security of data exchanges. InSkin cannot be held responsible for damages arising from the transmission of any information via the Service.",
          "To the extent permitted by applicable law, InSkin shall not be liable for any damages and/or losses, direct or indirect, material or immaterial, resulting from the unavailability of the Service or any Use of the Service.",
          "The User undertakes to comply with all laws and regulations in force in their country.",
        ],
      },
      {
        title: "Personal Data and Confidentiality",
        text: [
          "The personal data collected on InSkin is collected in accordance with the user and aims to improve their experience on the Application as well as when using the Services.",
          "InSkin reserves the right to collect various personal and non-personal data, including through the collection of cookies, in order to improve the customer experience, the ergonomics of the Application and Services, to conduct statistical analysis, and to personalize the Services.",
          "The Application may also display targeted advertisements and offers. The advertising formats and scope are subject to change. By using the Services, you consent to InSkin, as well as its third-party suppliers and partners, displaying advertisements on the Application.",
          "<br><strong>This processing has been the subject of a normal declaration to the CNDP under number D-W-148/2024.</strong>",
          "<br>In accordance with Law No. 09-08 promulgated by Dahir 1-09-15 of February 18, 2009, each user has the right to access, rectify, and delete their personal information, and may object to their processing and commercial exploitation.",
          "<br>To exercise these rights, you can contact InSkin via the following means:",
          "<ul><li>Email address: dataprivacy@inskin.io </li><li>Mail to the following address: Sté OFFZONE AVENUE TARIK BOUHADLI TAHLA, Taza</li></ul>",
        ],
      },
    ],
  },
  fr: {
    header: "Conditions Générales d'Utilisation",
    content: [
      {
        title: "",
        text: [
          "L'accès à l'application InSkin (ci-après,l'«Application»), la navigation sur celle-ci, et l'utilisation des servicesfournis par InSkin sont régis par les conditions générales d'utilisation (« CGU») détaillées ci-dessous.",
          "L'Application est la propriété exclusivede la société OFFZONE, immatriculée au Registre du Commerce et des Sociétés de Taza sous le numéro 6429, et dont le siège social situé à Avenue Tarik Bouhadli TAHLA, Taza.",
        ],
      },
      {
        title: "Préambule",
        text: [
          "Tout utilisateur de l'Application reconnaît avoir pris connaissance des présentes CGU et les accepter. L'utilisation de l'Application vaut acceptation sans réserve des CGU.",
          "En cas de désaccord avec tout ou partiedes CGU, vous devez immédiatement vous abstenir d'utiliser l'Application. Offzone se réserve le droit de modifier à tout moment et sans préavis les termes des CGU. Les modifications entrent en vigueur immédiatement après la publication des conditions modifiées sur l'Application.",
        ],
      },
      {
        title: "Définitions",
        text: [
          "<strong>Application :</strong> désigne l'application mobile éditée et exploitée par OFFZONE.",
          "<strong>CGU :</strong> désigne les présentes Conditions Générales d'Utilisation de l'Application.",
          "<strong>Contenu Utilisateur :</strong> désigne les données transmises par l'Utilisateur dans les différentes rubriques de l'Application.",
          "<strong>Données de navigation :</strong> désigne les informations liées à la connexion de votre terminal à l’Application. Nous sommes susceptibles d’utiliser ces données de navigation à des fins statistiques.",
          "<strong>Données personnelles :</strong> désigneles informations liées aux Utilisateurs.",
          "<strong>Partenaires :</strong> désigne l’ensemble des sites e-commerce ou sociétés informatiques avec lesquels nousavons un contrat de partenariat direct ou indirect.",
          "<strong>Services :</strong> désigne l’ensemble des services, payants ou gratuits, accessibles aux Utilisateurs.",
          "<strong>Utilisateur(s) :</strong> désigne une (ou l’ensemble des) personne(s) inscrite(s) sur l'Application.",
          "<strong>InSkin :</strong> désigne le produit ou la marque de la société OFFZONE qui édite l'Application.",
        ],
      },
      {
        title: "Accès aux services",
        text: [
          "Les services proposés par InSkin via l'Application comprennent, entre autres :",
          "<ul><li>La consultation des informations sur les produits cosmétiques par le biais du scanner de codes-barres.<li>La possibilité pour les Utilisateurs de créer et de partager des publications, des stories, et d'interagir avec d'autres Utilisateurs.<li>Les recommandations personnalisées de produits cosmétiques.<li>Les promotions personnalisées des produits cosmétiques.</ul>",
          "Les Services sont accessibles gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès aux Services, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de l'utilisateur. Il est seul responsable du bon fonctionnement de son équipement informatique ainsi que deson accès à internet.",
          "InSkin se réserve le droit de refuser l'accès aux Services, unilatéralement et sans notification préalable, à tout Utilisateur ne respectant pas les présentes conditions d'utilisation.",
          "InSkin met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité aux Services, mais n'est tenu à aucune obligation d'y parvenir.",
          "InSkin ne peut, en outre, être tenue responsable de tout dysfonctionnement du réseau ou des serveurs ou de tout autre événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait l'accès aux Services.",
          "<br>InSkin se réserve la possibilité d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie des Services, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.",
        ],
      },
      {
        title: "Limitation de responsabilité",
        text: [
          "L'Utilisateur reconnaît avoir pris connaissance et accepté ces conditions, ainsi que de disposer des compétences pour naviguer sur l'application mobile.",
          "L'Utilisateur est seul responsable du Contenu Utilisateur qu'il met en ligne via les Services, ainsi que des textes et/ou opinions qu'il formule. Il s'engage notamment à ce que ces données ne soient pas de nature à porter atteinte aux intérêts légitimes de tiers quelsqu'ils soient. A ce titre, il garantit InSkin contre tous recours, fondés directement ou indirectement sur ces propos et/ou données, susceptibles d'être intentés par quiconque à l'encontre d’InSkin. Il s'engage en particulier à prendre en charge le paiement des sommes, quelles qu'elles soient, résultant du recours d'un tiers à l'encontre d’InSkin, y compris les honoraires d'avocat et frais de justice.",
          "InSkin se réserve le droit de supprimer tout ou partie du Contenu Utilisateur, à tout moment et pour quelque raison que ce soit, sans avertissement ou justification préalable. L'Utilisateur ne pourra faire valoir aucune réclamation à ce titre.",
          "InSkin se réserve le droit d'exclure un Utilisateur si son comportement sur l'Application n’est pas approprié.",
          "InSkin se réserve aussi le droit d’accéder, de lire, de conserver ou divulguer toute information considérée comme nécessaire afin de satisfaire à toute loi, réglementation, processus légal ou demande gouvernementale dans le but de faire respecter les présentes conditions, y compris une enquête sur les potentielles violations de ces conditions, afin de détecter, prévenir ou déclarer une fraude, un problème de sécurité ou technique, répondre aux demandes de support des utilisateurs, ou protéger les droits, la propriété ou la sécurité d’InSkin, ses utilisateurs et le public.",
          "InSkin fournit certaines informations sur les produits cosmétiques, provenant de sources réputées fiables. Toute fois, InSkin ne peut garantir l'exactitude ou la pertinence de ces données. Les informations fournies par l'Application sont uniquement à titre informatif etne doivent pas être interprétées comme des conseils ou des recommandations.",
          "InSkin ne peut être tenu responsable des litiges entre les utilisateurs des Services et les Partenaires.",
          "Les informations et/ou documents disponibles sur l'application sont susceptibles d’être modifiés à tout moment,et peuvent avoir fait l’objet de mises à jour. En conséquence, l'utilisateurest seul responsable de l'utilisation des informations mises à sa disposition sur l'Application.",
          "L'utilisateur s'engage à indemniser InSkin de toutes conséquences dommageables liées directement ou indirectement à l'usage qu'il fait du Service.",
          "InSkin s'engage à mettre en place tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données transmises.",
          "L'utilisateur reconnaît les limitations et contraintes propres au réseau internet et admet notamment l'impossibilité d'une garantie totale de la sécurisation des échanges de données. InSkin ne peut être tenue responsable des préjudices découlant de la transmission de toute information via le Service.",
          "Dans la limite du droit applicable, InSkin ne pourra être tenu responsable des dommages et/ou préjudices, directs ou indirects, matériels ou immatériels, résultant d'une indisponibilité du Service ou de toute Utilisation du Service.",
          "L'Utilisateur s'engage à se conformer à toutes les lois et réglementations en vigueur dans son pays.",
        ],
      },
      {
        title: "Données Personnelles et Confidentialité",
        text: [
          "Les données personnelles collectées sur InSkin sont recueillies en accord avec l'utilisateur et visent à améliorer son expérience sur l'Application ainsi quelors de l'utilisation des Services.",
          "InSkinse réserve le droit de collecter différentes données nominatives et non nominatives, notamment par le biais de collecte de cookies, dans le but d'améliorer l'expérience client, l'ergonomie de l'Application et des Services,de réaliser des analyses statistiques et de personnaliser les Services.",
          "L'Application peut également présenter des publicités et des offres ciblées. Les formats et la portée publicitaire sont susceptibles d'évoluer. En utilisant les Services,vous consentez à ce que InSkin, ainsi que ses fournisseurs et partenaires tiers,diffusent des publicités sur l'Application.",
          "<br><strong>Ce traitement a fait l’objet d’une déclaration normale auprès de la CNDP sous le numéro D-W-148/2024.</strong>",
          "<br>Conformément à laloi n°09-08 promulguée par le Dahir 1-09-15 du 18 février 2009, chaque utilisateur aun droit d'accès, de rectification et de suppression de ses informations personnelles, et peut s'opposer à leur traitement et exploitation commerciale.",
          "<br>Pour exercer ces droits, vous pouvez contacter InSkin via les moyens suivants :",
          "<ul><li>E-mail à l’adresse : dataprivacy@inskin.io</li><li>Courrier à l'adresse suivante: Sté OFFZONE AVENUE TARIK BOUHADLI TAHLA, Taza</li></ul>",
        ],
      },
    ],
  },
};
