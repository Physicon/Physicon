import React from 'react'

const Footer = () => (
    <div className="footer">
        <div className="footer__col footer__col--legal">
            <p className="footer__info">&copy; ООО «Физикон Лаб», 2013—2017</p>
            <p className="footer__info">Пользовательское соглашение</p>
        </div>
        <div className="footer__col footer__col--social">
            <div className="footer__social footer__social--tw"></div>
            <div className="footer__social footer__social--vk"></div>
            <div className="footer__social footer__social--fb"></div>
            <div className="footer__social footer__social--it"></div>
        </div>
        <div className="footer__col footer__col--legal">
            <p className="footer__info">+7 (498) 744-67-57, info@imumk.ru</p>
            <p className="footer__info">Правила пользования сайтом</p>
        </div>
    </div>
)

export default Footer