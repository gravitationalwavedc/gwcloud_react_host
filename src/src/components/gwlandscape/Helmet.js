import React from 'react';
import { Helmet } from 'react-helmet';
import icon from '../../assets/gwlandscape/images/logo.png';

const GWLandscapeHelmet = () =>
    <Helmet>
        <title>GW Landscape</title>
        <link rel="icon" href={icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Astrophysical models of GW sources." />
    </Helmet>;

export default GWLandscapeHelmet;
