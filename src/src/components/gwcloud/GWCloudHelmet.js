import React from 'react';
import { Helmet } from 'react-helmet';
import icon from '../../assets/gwcloud/images/favicon_io/favicon-32x32.png';

const GWCloudHelmet = () =>
    <Helmet>
        <title>GW Cloud</title>
        <link rel="icon" href={icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Astrophysical models of GW sources." />
    </Helmet>;

export default GWCloudHelmet;
