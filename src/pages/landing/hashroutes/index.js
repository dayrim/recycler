import routes from '../../../routes'
import React from 'react';

let HashRoutes = {};

routes.map((route,outerKey)=>{
    if(route.name === 'Landing'){
        route.hashroutes.map((routeName,innerKey)=>{

        HashRoutes[`${routeName}`] = React.lazy(() => import(`./${routeName}/${routeName}.js`))
        })
    }
})


export default HashRoutes