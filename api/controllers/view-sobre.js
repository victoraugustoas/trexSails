/**
 * Module dependencies
 */

// ...


/**
 * view-sobre.js
 *
 * Display "Sobre" page.
 */
module.exports = async function viewSobre(req, res) {
  return res.view('pages/sobre', { released: 2014, title: 'Sobre' });
};