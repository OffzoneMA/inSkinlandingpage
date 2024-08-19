import React, { useEffect } from "react";
import styled from "styled-components";
import { useLanguage } from "../LanguageContext";
export default function PrivacyPolicy() {
  const { language } = useLanguage();
  function createMarkup(text) {
    // uses the text assuming it might contain HTML-like strings.
    // Ensure to sanitize `text` here to prevent XSS attacks.
    return { __html: text };
  }
  useEffect(() => {
    document.getElementById("PrivacyPolicy").scrollIntoView();
  }, []);
  return (
    <Wrapper>
      <div className="container" id="PrivacyPolicy">
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
                  {index < section.text.length - 1 && <br />}
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
    header: "Privacy Policy",
    content: [
      {
        title: "Preamble",
        text: [
          "The protection and confidentiality of your data are of paramount importance to us. We are committed to scrupulously respecting the rules regarding the protection of personal data. Therefore, we invite you to carefully read this Privacy Policy. Its purpose is to present to you how we process your data when you use the InSkin application, as well as how you can exercise your rights. OFFZONE is committed to complying with Moroccan regulations on the protection of personal data, in accordance with Law No. 09-08 promulgated by Dahir 1-09-15 of February 18, 2009.",
        ],
      },
      {
        title: "Definitions",
        text: [
          "<strong>Content:</strong> All elements constituting the information present on the application, including texts, images, videos, and documents. <br /> <strong>User</strong> Internet user connecting to, using the aforementioned application.<br /><strong>Services:</strong> refers to the operational functions made available to Users and/or a potential client under the contract. <br /> <strong>CGU:</strong> General Terms of Use.",
        ],
      },
      {
        title: "Why are we processing your data?",
        text: [
          "We process your personal data in order to facilitate your use of the InSkin application and all its features. More specifically, we use your data to: ",
          "<ul><li>Allow you to create a user account on InSkin;</li><li>Create posts/stories on the dedicated page provided by InSkin;</li><li>Add/follow your friends or share posts and recommendations withthem on InSkin and on your social networks; Respond to your questions;</li><li>Provide you with offers and inform you of news related to the InSkin application;</li> <li>Improve our service; Perform statistical analyses.</li></ul>",
        ],
      },
      {
        title: "On what basis do we process your data?",
        text: [
          "The processing we implement is mainly based on the contractual relationship between you and us, following your acceptance of the general conditions of the InSkin application when creating your account. In some cases, the basis may also be our legitimate interest.",
        ],
      },
      {
        title: "Who is responsible for the processing?",
        text: [
          "The company OFFZONE, owner of the InSkin application, is responsible for processing your data. As such, it is responsible for determining the purposes and means of processing aimed at allowing you to use all the features of the InSkin application.",
          "<strong>This processing has been the subject of a normal declaration to the CNDP under number D-W-148/2024.<strong>",
        ],
      },
      {
        title: "What categories of data do we process?",
        text: [
          "We only collect the strictly necessary data about you in order to allow you to use all the features of the InSkin application. This mainly includes your username, your first and last name, possibly your Facebook profile name, your email address, your profile picture, as well as the city and country in which you reside.",
        ],
      },
      {
        title: "Who are your data intended for?",
        text: [
          "We do not sell your personal data to third parties. The economic model of the InSkin application is not based on the sale of your personal data to third parties. Therefore, only a few employees of the technical service of the company OFFZONE are authorized to use your data in the context of your use of the InSkin application. We would like to inform you that all our employees are bound by a specific confidentiality commitment regarding your data. We collaborate with certain suppliers to whom we may transmit anonymized data concerning you. These data recipients include: Data hosting: Sté Contabo located at Aschauer Straße 32a 81549 Munich, Germany",
          "<strong>This transfer has been the subject of a normal declaration to the CNDP under number  T-W-61/2024.<strong>",
        ],
      },
      {
        title: "How long do we keep your data?",
        text: [
          "Your data is processed for an unlimited period as long as your account remains active and is not deleted by yourself. However, in the event of account deletion on your part, considered to render the account inactive, the data is retained for a period of 12 months.",
        ],
      },
      {
        title: "Your rights",
        text: [
          "You have the following rights regarding your personal data:",
          "<ul><li>The right to request confirmation that data about you is being processed, to access this data, and to obtain a copy of it;</li><li>The right to have corrected any data about you that is incorrect or outdated;</li><li>The right to obtain the deletion of your data if you have objected to their processing for commercial prospecting purposes or if you request the deletion of your account via the application;</li><li>The right to object to any profiling by us;</li><li>The right to obtain the portability of your data.</li></ul>",
          "Please note that only the user concerned by the processing can exercise the rights mentioned above. Therefore, your request must be sent by registered mail with acknowledgment of receipt to the address of the data controller, OFFZONE. Otherwise, your request will be denied. The data controller reserves the right to respond to you within a period of two months from the receipt of your request.",
        ],
      },
      {
        title: "How do we protect your data?",
        text: [
          "We implement technical and organizational measures that we deem appropriate to prevent the destruction, loss, alteration, or unauthorized disclosure of your personal data. In the event of a data breach, we undertake to notify the National Commission for the Control of Personal Data Protection (CNDP) in accordance with the provisions of Law No. 09-08 promulgated by Dahir 1-09-15 of February 18, 2009. If this breach poses a high risk to our users, we undertake to inform the individuals concerned and to provide them with the necessary information and recommendations.",
        ],
      },
      {
        title: "Modification of this Policy",
        text: [
          "OFFZONE reserves the right to modify and/or improve this Policy at any time, without prior notification of these modifications to Users and without providing reasons for these modifications. OFFZONE may update this Policy from time to time in response to developments in legal, technical, or commercial developments. When OFFZONE updates this Policy, it will take appropriate measures to inform the User, in accordance with the importance of the modifications made and in accordance with applicable law.",
        ],
      },
      {
        title: "How to contact us?",
        text: [
          "If you have specific requests regarding your data, do not hesitate to contact us by email at the following address:",
          "<ul><li>Email address: dataprivacy@inskin.io</li></ul>",
          "Our team is committed to providing you with a response within a reasonable time frame, depending on the nature of your request or the information required.",
        ],
      },
    ],
  },
  fr: {
    header: "Politique de Confidentialité",
    content: [
      {
        title: "Préambule",
        text: [
          "La protection et la confidentialité de vos données revêtent pour nous uneimportance capitale. Nous nous engageons à respecter scrupuleusement les règles en matière de protection des données à caractère personnel.",
          "Nous vous invitons donc à lire attentivement la présente Politique de confidentialité. Elle a pour objectif de vous présenter la manière dont nous traitons vos données lorsque vous utilisez l'application InSkin, ainsi que la façon dont vous pouvez exercer vos droits.",
          "OFFZONE s’engage à respecter la réglementation marocaine sur la protection des données à caractère personnel, conformément à la loi n° 09-08 promulguée par le Dahir 1-09-15 du 18 février 2009.",
        ],
      },
      {
        title: "Définitions",
        text: [
          "<strong>Contenu :</strong> Ensemble des éléments constituants l’information présente sur l’application, notamment textes, images, vidéos et documents.<br /><strong>Utilisateur :</strong> Internaute se connectant, utilisant l’application susnommée.<br /><strong>Services :</strong>désigne les fonctions opérationnelles mises à disposition des Utilisateurs et/ou d’un client potentiel dans le cadre du contrat.<br /><strong>CGU :</strong> Conditions Générales d’Utilisation.",
        ],
      },
      {
        title: "Pourquoi traitons-nous vos données ?",
        text: [
          "Nous traitons vos données à caractère personnel dans le but de faciliter votre utilisation de l'application InSkin et de toutes ses fonctionnalités.Plus précisément, nous utilisons vos données pour :",
          "<ul><li>Vous permettre de créer un compte utilisateur sur InSkin ;</li><li>Créer des poste/stories sur la page dédiée fournie par InSkin ;</li><li>Ajouter/suivre vos amis ou partager des postes et recommandations avec eux sur InSkin et sur vos réseaux sociaux ; Répondre à vos questions ;</li><li>Vous proposez des offres et vous informer de l'actualité liée à l'application InSkin ;</li><li>Améliorer notre service ; Effectuer des analyses statistiques.</li></ul>",
        ],
      },
      {
        title: "Sur quels fondements traitons-nous vos données ?",
        text: [
          "Les traitements que nous mettons en œuvre reposent principalement sur la relation contractuelle existant entre vous et nous, suite à votre acceptation des conditions générales de l'application InSkin lors de la création de votre compte. Dans certains cas, le fondement peut également être notre intérêt légitime.",
        ],
      },
      {
        title: "Qui est en charge des traitements ?",
        text: [
          "La société OFFZONE, propriétaire de l'application InSkin, assume la responsabilité du traitement de vos données. Entant que tel, elle est chargée de déterminer les finalités et les moyens du traitement visant à vous permettre d'utiliser toutes les fonctionnalités de l'application InSkin.",
          "<strong>Ce traitement a fait l’objet d’une déclaration normale auprès de la CNDP sous le numéro D-W-148/2024.</strong>",
        ],
      },
      {
        title: "Quelles catégories de données traitons-nous ?",
        text: [
          "Nous collectons uniquement les données strictement nécessaires vous concernant dans le but de vous permettre d'utiliser toutes les fonctionnalités de l'application InSkin. Il s'agit principalement de votre nom d’utilisateur, de votre nom et prénom, éventuellement de votre nom de profil Facebook, de votre adressee-mail, de votre photo de profil, ainsi que de la ville et du pays dans lesquels vous résidez.",
        ],
      },
      {
        title: "À qui sont destinées vos données ?",
        text: [
          "Nous ne revendons pas vos données personnelles à destiers. Le modèle économique de l'application InSkin ne repose en aucun cas sur la vente de vos données personnelles à des tiers. Par conséquent, quelques  employés du service technique de la société OFFZONE, sont autorisés à utiliser vos données dans le cadre de votre utilisation de l'application InSkin. Nous tenons à vous informer que tous nos employés sont tenus par un engagement de confidentialité spécifique concernant vos données.",
          "Nous collaborons avec certains fournisseurs aux quels nous pouvons transmettre des données anonymisées vous concernant. Ces destinataires de données comprennent : Hébergement des données : Sté Contabo situé à Aschauer Straße 32a 81549 Munich, Allemagne",
          "<strong>Ce transfert a fait l’objet d’une déclaration auprès de la CNDP sous le numéro T-W-61/2024.</strong>",
        ],
      },
      {
        title: "Combien de temps conservons-nous vos données ?",
        text: [
          "Vos données sont traitées pour une durée illimitée tant que votre compte demeure actif et n'est pas supprimé par vous-même. Cependant, en cas de suppression de compte de votre part, considérée comme rendant le compte inactif, les données sont conservées pendant une période de12 mois.",
        ],
      },
      {
        title: "Vos droits",
        text: [
          "Vous disposez des droits suivants concernant vos données à caractère personnel :",
          "<ul><li>Le droit de demander la confirmation que des données vous concernant sont traitées, d'accéder à ces données et d'en obtenir une copie ;</li><li>Le droit de faire rectifier toute donnée vous concernant qui serait erronée ou obsolète ;</li><li>Le droit d'obtenir l'effacement de vos données si vous vous êtes opposé àleur traitement à des fins de prospection commerciale ou si vous demandez la suppression de votre compte via l'application ;</li><li>Le droit de vous opposer à tout profilage de notre part ;</li><li>Le droit d'obtenir la portabilité de vos données.</li></ul>",
          "Veuillez noter que seul l'utilisateur concerné par le traitement peut exercer les droits mentionnés ci-dessus.",
          "Par conséquent, votre demande doit être adressée par courrier recommandé avec avis de réception à l'adresse du responsable du traitement, OFFZONE. À défaut, votre demande sera refusée.",
          "Le responsable du traitement se réserve le droit de vous répondre dans un délai de deux mois à compter de la réception de votre demande.",
        ],
      },
      {
        title: "Comment protégeons-nous vos données ?",
        text: [
          "Nous mettons en œuvre des mesures techniques et organisationnelles que nous jugeons appropriées pour prévenir la destruction,la perte, l'altération ou la divulgation non autorisée de vos données personnelles.",
          "En cas de violation de données, nous nous engageons à notifier la Commission Nationale de Contrôle de Protection des Données à Caractère Personnel (CNDP) conformément aux dispositions de la loi n° 09-08promulguée par le Dahir 1-09-15 du 18 février 2009.",
          "Si cette violation présente un risque élevé pour nos utilisateurs, nous nous engageons à informer les personnes concernées et à leur fournir les informations et recommandations nécessaires.",
        ],
      },
      {
        title: "Modification de la présente Politique",
        text: [
          "OFFZONE se réserve le droit de modifier et/ou améliorer la présente Politique à tout moment, sans notification préalable de ces modifications aux Utilisateurs et sans donner les raisons de ces modifications.",
          "OFFZONE peut mettre à jour la présente Politique de temps à autre en réponse à l'évolution des développements juridiques, techniques ou commerciaux.",
          "Lorsqu’OFFZONE met à jour la présente Politique, elle prendra les mesures appropriées pour informer l’Utilisateur, conformément à l'importance des modifications apportées et conformément à la loi applicable.",
        ],
      },
    ],
  },
};
