import React from 'react';

import hcomLogo from '../../images/brand-logos/logo_Hcom.png';
import bexLogo from '../../images/brand-logos/logo_bex.png';
import vrboLogo from '../../images/brand-logos/logo_vrbo.png';

const Scenario = props => {
    const { title, body, brand } = props.scenario;

    const getBrandLogo = brandString => {
      return {
          'hcom': hcomLogo,
          'bex': bexLogo,
          'vrbo': vrboLogo
      }[brandString] || undefined;
    };

    const logoComponent = brand ?
        <div className={'scenario-logo-wrapper'}>
            <img src={ getBrandLogo(brand) } alt={'brand X logo'} />
        </div>
        : null;

    return (
        <div className={`scenario-wrapper scenario-wrapper-${brand} ${props.className || ''}`}>
            { logoComponent }

            <div className={'scenario-content'}>
                <h1>{ title }</h1>
                <p>{ body }</p>
            </div>
        </div>
    );
};

export default Scenario;