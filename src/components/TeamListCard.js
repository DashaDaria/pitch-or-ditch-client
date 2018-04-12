import React from 'react';

const TeamListCard = ({idea}) =>

  <tr key={idea.author}>
    <td>{idea.author}</td>
    <td>{idea.name}</td>
  </tr>


export default TeamListCard
