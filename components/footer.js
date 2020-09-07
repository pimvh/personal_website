import Link from 'next-translate/Link';

import useTranslation from 'next-translate/useTranslation';

const Footer = () => {

    const { t, lang } = useTranslation();

    return (
        <>
        <div className='panel-footer' >
            <div className="flex-grid">
                <div className= "col-12 padding-xl text-center .fixed">
                <Link href="/contact" >
                    <a> {t("common:footer")} </a>
                </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer
