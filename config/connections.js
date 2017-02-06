/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  // localDiskDb: {
  //   adapter: 'sails-disk'
  // },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

  // Custom cloudant install adapter 
  //  npm install sails-couchdb-orm --save

  // couch: {
  //   adapter : 'sails-couchdb-orm',
  //   username: "e23324c6-1287-4ece-9025-0fe31eb0773a-bluemix",
  //   password: "4ddc961b8ae7aece099a0f55402332a8de46e0fb453e2fd8ab1b07f31e26756d",
  //   host: "e23324c6-1287-4ece-9025-0fe31eb0773a-bluemix.cloudant.com",
  //   port: 443,
  //   url: "https://e23324c6-1287-4ece-9025-0fe31eb0773a-bluemix:4ddc961b8ae7aece099a0f55402332a8de46e0fb453e2fd8ab1b07f31e26756d@e23324c6-1287-4ece-9025-0fe31eb0773a-bluemix.cloudant.com"
  // }
  couch: {
     adapter : 'sails-couchdb-orm',
      username: "a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix",
      password: "534c44621147eb8f20e2173e27ceb7f411f26c734132d0c160d593ed77975d03",
      host: "a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix.cloudant.com",
      port: 443,
      url: "https://a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix:534c44621147eb8f20e2173e27ceb7f411f26c734132d0c160d593ed77975d03@a0002eb5-0af4-4fad-8476-ca5aee1bc2bc-bluemix.cloudant.com"
    }
    
};
