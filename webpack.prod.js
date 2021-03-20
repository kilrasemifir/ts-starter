/**
 * Ce fichier permet de configurer webpack pour la mise en production de votre projet.
 * En utilisant le script "npm run build", webpack génére un fichier "./dist/main.js" minimisé
 * Qui permet de lancer votre application correctement.
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  watch: false
});