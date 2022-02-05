import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { useSelector } from 'react-redux';

import './directory.styles.scss';

const Directory = () => {
  const { sections } = useSelector(createStructuredSelector({
    sections: selectDirectorySections
  }))

  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  );
};

export default Directory;