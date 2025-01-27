import React from 'react';

import Tag from './Tag/Tag';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className=''>
      {tags.slice(0, 2).map((tag, index) => (
      <Tag key={index} name={tag} />
      ))}
      {tags.length > 3 && <Tag key={3} name={`+${tags.length - 2} more`} />}
    </div>
  );
}

export default Tags;