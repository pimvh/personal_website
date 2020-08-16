import Markdown from 'react-markdown'
import useTranslation from '../../hooks/useTranslation'
import Head from 'next/head'

function Contact () {

    const { translate, locale } = useTranslation();

    const ContactRow = ({ contact, lang }) => (
        <tr>
        <td>
        {contact.service}:
        </td>
        <td>
        <a href={`${contact.link}`} >{contact.text[lang]}</a>
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
            {service: 'MeetMe', link: 'https://doodle.com/pimvanhelvoirt',
             text: {nl: 'Maak hier een afspraak met mij.',
                    en: 'You can make an appointment with me using this service'}},
            {service: 'Linked-in', link: 'https://nl.linkedin.com/in/pim-van-helvoirt',
             text: {nl: 'pim-van-helvoirt',
                    en: 'pim-van-helvoirt'}},
            {service: 'E-mail', link: 'mailto:pim.van.helvoirt@home.nl',
             text: {nl: 'pim.van.helvoirt@home.nl',
                    en: 'pim.van.helvoirt@home.nl'}},
            {service: 'Github', link: 'https://github.com/pimvh',
             text: {nl: 'pimvh',
                    en: 'pimvh'}}
        ];
    }

    return (
    <>
    <Head>
    <title>
        Pim van Helvoirt - Contact
    </title>
    </Head>

    <div className = "flex-grid">
        <div className = "col-12 padding-xl">
        <div>
        <Markdown
          source={translate('contact')['message']} />
        </div>
        <table className='tbl striped-odd'>
            <tbody>
            {getContactDetails().map(contact => (
                <ContactRow key={contact.service} contact={contact} lang={locale}/>
            ))}
            </tbody>
        </table>
        </div>
    </div>

    </>
);
}

export default Contact
