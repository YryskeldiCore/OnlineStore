import React from 'react'

function FAQ({faq, index, toggleFAQ}) {
    return (
        <div 
            className={"faq" + (faq.isOpen? ' open': '')}
            onClick={() => toggleFAQ(index)}
            key={faq.index}>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ;
