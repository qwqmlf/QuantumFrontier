import React from "react";

const Accuracy = props => {
  const { no, content } = props;

  return (
    <tr>
      <th>{no}</th>
      <td className="accuracy" data-row-index={`${no}`}>

      </td>
    </tr>
  );
};

export default Accuracy;