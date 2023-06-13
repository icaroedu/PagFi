import database from "./firebaseConfig.js";

const userDb = {
  // Collection Usada
  userColl : "Usuarios",

/**
 * Essa função Lista Todos Os Usuarios.
 * @returns {Array} list - O array de usuarios.
 */
  listUser: async function() {
    const list = [];
    const snapshot = await database.collection(this.userColl).get();
    snapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    return list;
  },

/**
 * Essa função Adciona Um Usuário Ao Banco de Dados.
 * @param {Object} user - O Objeto Com As Informações do usuário.
 * @returns {Object} userR - O usuário e seu id.
 */
  addUser: async function (user){
      const doc = await database.collection(this.userColl).doc()
      console.log(doc.id)
      userRef = doc.set(user).then(function() {
        
      })
        .catch(function(error) {
        return false
      });

      const userR = {...user,id:doc.id}

      return userR
  },

  /**
 * Essa função Atualiza Um Usuário No Banco de Dados.
 * @param {number} id - id do usuário.
 * @param {Object} user - O Objeto Com As Informações do usuário.
 * @returns {Boolean} - Estado booleano da operação.
 */
  setUser: async function(id,user){
    userRef = await database.collection(this.userColl).doc(id).set(user).then(function() {})
      .catch(function(error) {
      return false
    });
    return true
  },
/**
 * Essa função Deleta Um Usuário No Banco de Dados.
 * @param {number} id - id do usuário.
 * @returns {Boolean} - Estado booleano da operação.
 */
  DeleteUser : async function(id){ 
    userRef = await database.collection(this.userColl).doc(id).delete().then(function() {
    })
      .catch(function(error) {
      return false
    });
    return true
  },
  /**
 * Essa função É Reponsável Pelo Login do Usuário.
 * @param {String} nome - nome do usuário.
 * @param {String} senha - nome do usuário.
 * @returns {Boolean} - Estado booleano da operação.
 */
  LoginUser :async function(nome,senha){
      
    userRef = await database.collection(this.userColl)
    
    try {
      const querySnapshot = await userRef
        .where('Nome', '==', nome)
        .where('Senha', '==', senha)
        .get();
      
      if (!querySnapshot.empty) {
        // Documento encontrado com o mesmo nome e senha
        console.log('Documento encontrado!');
        return true;
      } else {
        // Documento não encontrado com o mesmo nome e senha
        console.log('Documento não encontrado.');
        return false;
      }
    } catch (error) {
      console.log('Erro ao verificar documento:', error);
      return false;
    }
  }

}

export { userDb }