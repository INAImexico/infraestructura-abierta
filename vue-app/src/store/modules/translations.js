////////////////////////////////////////////////////////////////////////////////
//
// ⭐ STORE DE TRADUCCIÓN
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
// ⭐ CATÁLOGOS
//
////////////////////////////////////////////////////////////////////////////////
import translations from '../../assets/edca-translations.csv'


/*
 * 👾 S T A T E
 * ----------------------------------------------------------------------
 */
const state = {};

/*
 * 👾 G E T T E R S
 * ----------------------------------------------------------------------
 */
const getters = {
    translate: ( ) => (_labels) => { 
      let labels = Array.isArray(_labels) ? _labels : [_labels],
          str    = labels.map(lbl => {
        let item = translations.find(tr => tr.label == lbl);
        return item ? item.translation : lbl;
      })
      
      return str;
    }
};

/*
 * 👾 A C T I O N S
 * ----------------------------------------------------------------------
 */
const actions = {};

/*
 * 👾 M U T A T I O N S
 * ----------------------------------------------------------------------
 */
const mutations = {};


/*
 * ♥️ E X P O R T
 * ----------------------------------------------------------------------
 */
export default {
  //namespaced: true,
  state,
  getters,
  actions,
  mutations
}