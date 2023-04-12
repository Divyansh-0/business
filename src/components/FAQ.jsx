import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isAnsShown, setIsAnsShown] = useState(false);
  return (
    <article className="faq" onClick={() => setIsAnsShown((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnsShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnsShown && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
