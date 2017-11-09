import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { withRouter } from 'next/router'

import Facet from '../facet'

class FacetGroup extends React.Component {
  static propTypes = {
  }

  render () {
    const { name, values, t } = this.props

    return (
      <div className='main'>
        <h4>{t(`common:facets.types.${name}`)}</h4>
        {values.map(facet => (
          <div className='facet' key={facet.value}>
            <Facet
              facet={{ name, value: facet.value }}
              count={facet.count}
            />
          </div>
        ))}

        <style jsx>{`
          .main {
            margin-bottom: 15px;
          }

          h4 {
            font-variant: small-caps;
            line-height: 1em;
            margin: 0 0 10px 0;
          }

          .facet {
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    )
  }
}

export default translate('search')(withRouter(FacetGroup))