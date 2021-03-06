import React from 'react'
import PropTypes from 'prop-types'

import CenteredMap from '../centered-map'

const SpatialExtent = ({extent}) => (
  <div>
    <div className='map'>
      <CenteredMap small frozen data={{
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: extent
        }]
      }} />
    </div>

    <style jsx>{`
      @import 'colors';

      .map {
        width: 100%;
        position: relative;
        height: 250px;

        @media (max-width: 1480px) {
          height: 230px;
        }

        @media (max-width: 1080px) {
          height: 200px;
        }

        @media (max-width: 768px) {
          height: 250px;
        }
      }
    `}</style>
  </div>
)

SpatialExtent.propTypes = {
  extent: PropTypes.object.isRequired
}

export default SpatialExtent
