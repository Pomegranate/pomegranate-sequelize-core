/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pomegranate-sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var Sequelize = require('sequelize')
/**
 *
 * @module index
 */

exports.metadata = {
  name: 'Sequelize',
  param: 'SQL',
  type: 'merge'
}

exports.plugin = {
  load: function(inject, loaded) {
    loaded(null, {Sequelize: Sequelize})
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}

exports.errors = {
  ValidationError: Sequelize.ValidationError,
  UniqueConstraintError: Sequelize.UniqueConstraintError,
  ExclusionConstraintError: Sequelize.ExclusionConstraintError,
  ForeignKeyConstraintError: Sequelize.ForeignKeyConstraintError
}