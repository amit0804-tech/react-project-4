import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [readmore, setreadmore] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setreadmore(!readmore)}>
          {readmore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {readmore && <p>{info}</p>}
    </article>
  );
};

export default Question;
