import React, {useState} from 'react'
import FAQ from './FAQ';
import './accordion.css';

const Accordion = () => {
    const [faqs, setfaqs] = useState([
        {
            question:'What is programming?',
            answer: 'Programming is the actually implementing things from real world to  Virtual',
            isOpen: true,
            index: 'sadasd'
        },
        {
            question:'What is JavaScript?',
            answer: 'JS is the programming language which let DOM-elems be interactive',
            isOpen: false,
            index: 'asdasdsdas'
        },
        {
            question:'What is React?',
            answer: 'React is a open-source JS-library, which we can create a SPA',
            isOpen: false,
            index: 'asdasdasd'
        }
    ])

    const toggleFAQ = (index) => {
        setfaqs(faqs.map((faq, i) => {
            if(i === index){
                faq.isOpen = !faq.isOpen
            } else {
                faq.isOpen = false
            }

            return faq
        }))
    }

    return (
        <div className="faq-main">
            <h1 className="faq-title">FAQ</h1>
            <div className="faqs">
                {
                faqs.map((faq, i) => (
                    <FAQ key={faq.index} faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))
                }
            </div>
        </div>
    )
}

export default Accordion;
