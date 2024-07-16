import React from 'react';

type TelephoneItemProps = {
  number: string;
  index: number;
  code: string;
}

function TelephoneItem ({ number, index, code }:TelephoneItemProps): JSX.Element {
  return (
    <li className="item">
      <strong>
        {index + 1}
        .
        {'   '}
      </strong>
      {`${code} (${number.slice(0, 3)}) ${number.slice(3)}`}
    </li>
  );
};

export default TelephoneItem;