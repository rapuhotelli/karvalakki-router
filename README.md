# karvalakki-router
A shit "router" for browserside javascript hacks

Sometimes you have a bunch of hacky shit you don't want to fire on every page load. Useful when using baked-in CMS platforms like Wordpress and Drupal with their own "dependency management" mechanics and you have a ton of random jQuery or such. Not for single page apps, obviously.

No dependencies. Funny tests included. Also without dependencies.

## Usage

    import * as router from './karvalakki-router/index.js'
    
    router.is('/', function() { console.log('we are on the frontpage'} );
    router.beginsWith('/admin/', function() { console.log('we are on the admin pages'} );
