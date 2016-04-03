## Pomegranate-sequelize-core

Adds Sequelize as a merge plugin in the core Pomegranate load layer.

If you are not planning on writing your own model loader, consider using one of these plugins that include `pomegranate-sequelize-core`

* [pomegranate-sequelize-pg](https://github.com/Pomegranate/pomegranate-sequelize-pg)
* all other sequelize supported DBs to come.

## Install

Simply

```shell
npm install --save pomegranate-sequelize-core
```

Pomegranate will automatically load it up and provide
an injectable object named `SQL` with the structure
`{Sequelize: //Sequelize Object}`.

## Usage

`pomegranate-sequelize-core` is a Pomegranate merge plugin, that allows other plugins loaded in later layers to add properties to the object it adds to the dependency injector. The common usage would be to add a plugin to the Pomegranate `data` layer, instantiate Sequelize, load your models into an object, then provide that object to the Pomegranate plugin load function.

```javascript
exports.metadata = {
  name: 'MySequelizeImplementation',
  layer: 'data', // data or higher
  param: 'SQL', // must match
  type: 'merge' // merge the results into the existing object
}

exports.plugin = {
  load: function(inject, loaded) {
    var Sequelize = inject(function(SQL){
    	return SQL.Sequelize
    })
    this.sequelize = new Sequelize(//connection)

    // Find and load your models.
    var models = findModels()

    // add your models object to the SQL injectable
    loaded(null, models);
  },
  start: function(done) {
    // Call authentication etc.
    this.sequelize.authenticate()
    done()
  },
  stop: function(done) {
    this.sequelize.close()
    done()
  }
}

```
