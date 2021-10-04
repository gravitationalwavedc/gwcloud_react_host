import React from 'react';
import { Helmet } from 'react-helmet';
import icon from '../../assets/gwlab/images/gwlab-icon.png';
import appIcon from '../../assets/gwlab/images/gwlab_icon_96.png';

const GWLabHelmet = () => 
    <Helmet>
        <title>GW Lab</title>
        <link rel="icon" href={icon} />
        <link rel="apple-touch-icon" href={appIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Perform high-priority continuous wave searches for 
            low-mass x-ray binaries using the Viterbi pipeline." />
    </Helmet>;

export default GWLabHelmet;
