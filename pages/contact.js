import Markdown from 'react-markdown';

import Layout from '../components/layout';
import Header from '../components/header';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

function Contact () {

    const { t, lang } = useTranslation();

    const ContactRow = ({ contact, lang }) => (
        <tr>
        <td>
        {contact.service}:
        </td>
        <td>
        <a href={contact.link}> {contact.text[lang]} </a>
        </td>

        <style jsx>{`
          a {
              text-decoration: none;
              color: blue;
          }

          a:hover {
              opacity: 0.6;
          }
        `}</style>
        </tr>
    );

    function getContactDetails() {
        return [
            {service: 'Linked-in', link: 'https://nl.linkedin.com/in/pim-van-helvoirt',
             text: {nl: 'pim-van-helvoirt',
                    en: 'pim-van-helvoirt'}},
            {service: 'E-mail', link: 'mailto:pim.van.helvoirt@home.nl',
             text: {nl: 'Email mij!',
                    en: 'Email me!'}},
            {service: 'Github', link: 'https://github.com/pimvh',
             text: {nl: 'pimvh',
                    en: 'pimvh'}}
        ];
    }

    return (
        <>

        <Header title={t('contact:title')} description={t('contact:description')} />

        <Layout>
            <div className = "flex-grid">
                <div className = "col-12 padding-xl">
                <div>
                <Markdown
                  children={t("contact:message")} />
                </div>
                <table className='tbl striped-odd'>
                    <tbody>
                    {getContactDetails().map(contact => (
                        <ContactRow key={contact.service} contact={contact} lang={lang}/>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </Layout>
        </>
);
}

export default Contact;
