# Orion Portfolio Starter - Meteor [ ![Codeship Status for iamkevingreen/orion-starter](https://codeship.com/projects/2a31afa0-620c-0132-3655-7ece8ab0c7e7/status)](https://codeship.com/projects/51977)

[![Code Climate](https://codeclimate.com/github/iamkevingreen/Orion-Starter/badges/gpa.svg)](https://codeclimate.com/github/iamkevingreen/Orion-Starter)

##Disclaimer

*Not all of the fields in the backend are configured to be functional on the front-end, the additional fields are meant to be a guide*

---

**A Meteor based CMS with Sass & Bower (blog/portfolio/contact)**

### Additional Configuration

#### Kadira

Navigate to `/admin/config/kadira` and enter in your unique creds which can be generated on [Kadira](https://kadira.io/)

#### S3 Uploads

Handled in the admin now under your admin user account settings

#### Contact Form

Navigate to `/admin/config/contact` and configure your sepcific email settings. Also be sure to set a `process.env.MAIL_URL` variable in either your production server or in the `contact.js` file in order to send email.

## Start the App

Run `meteor` in the root to install dependencies and start the server

### Create an Admin user

`/admin/setup` after starting the app to create an admin user

## Deployment

Currently the app is working with Modulus, I intend on experimenting with Digital Ocean and writing up anything that needs to be stated regarding setting this up.

[Deployment Tutorial](Deployment with modulus and CodeShip)

## Based on Orion CMS

This Meteor starter site using the [Orion CMS](https://github.com/orionjs/core) to build a simple portfolio site in using Meteor.

## Forms

Using [Aldeeds](https://github.com/aldeed/meteor-autoform) package for creating forms on the fly, please check the extensive documentation there as well as some the examples in the various post types. The package automatically installs the other 2 package dependences which is the simple schema builder and collection2 package which allows you to create schemas in a controller and attach them to a collection so you can validate on postInsert.

## What's out of the box?

* [Orion CMS](https://github.com/orionjs/core)
* [Bourbon mixin library](http://bourbon.io/)
* [Neat for a grid system](http://neat.bourbon.io/)
* [SASS support via meteor-scss (meteor package)](https://github.com/fourseven/meteor-scss)
* [MixItUp (meteor package)](https://github.com/iamkevingreen/mixitup)
* [bower support via mquandalle (meteor package)](https://github.com/mquandalle/meteor-bower)
* [s3 upload support via lepozep (meteor package)](https://github.com/Lepozepo/S3/)
* [Meteor Accounts-UI and Accounts-Password](https://docs.meteor.com/#/basic/accounts)
* [Form creation with schema builder/collection builder dependencies](https://github.com/aldeed/meteor-autoform)

*please check packages above if any issues arrive*


## License

(The MIT License)

Copyright (c) 2014 Kevin Green

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
