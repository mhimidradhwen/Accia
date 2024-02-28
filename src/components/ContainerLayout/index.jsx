import React, { Children } from 'react'
import PropTypes from 'prop-types';

function ContainerLayout({Children}) {
  return (
    <div className="flex flex-col items-start justify-between  container mx-auto ">
        {Children}
</div>
  )
}
export default ContainerLayout