import database from "./firebaseConfig.js"



const clientDb = {

  // Collection Usada
  currentColl : "Clientes",

  /**
   * Essa função Lista Todos Os Clientes.
   * @returns {Array} list - O array de usuarios.
   */
  listClient: async function () {
      const list = [];
      const snapshot = await database.collection(this.currentColl).get();
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      return list;
  },

  /**
   * Essa função Adciona Um Cliente Ao Banco de Dados.
   * @param {Object} client - O Objeto Com as Informações do usuário.
   * @returns {Object} clientR - O usuário e seu id.
   */
  addClient: async function (client){
      const doc = await database.collection(this.currentColl).doc()
      console.log(doc.id)
      clientesRef = doc.set(client).then(function() {
        
      })
        .catch(function(error) {
        return false
      });

      const clientR = {...client,id:doc.id}

      return clientR
  },


    /**
   * Essa função Atualiza Um Cliente No Banco de Dados.
   * @param {number} id - id do cliente.
   * @param {Object} client - O Objeto Com As Informações do cliente.
   * @returns {Boolean} - Estado booleano da operação.
   */
  setClient: async function (id,client){ 
    clientesRef = await database.collection(this.currentColl).doc(id).set(client).then(function() {  
    })
      .catch(function(error) {
      return false
    });
    return true
  },
/**
 * Essa função Deleta Um Cliente No Banco de Dados.
 * @param {number} id - id do cliente.
 * @returns {Boolean} - Estado booleano da operação.
 */
  DeleteClient: async function (id){
      
    clientesRef = await database.collection(this.currentColl).doc(id).delete().then(function() {
    })
      .catch(function(error) {
      return false
    });
    return true
  },
  /**
 * Essa função Deleta Um Cliente No Banco de Dados.
 * @returns {float} - Soma total dos débitos dos clientes.
 */
  GetTotalDebts: async function (){
      
    clientesRef = await database.collection(this.currentColl)
    
    let somaDividas = 0;

    try {
      const snapshot = await clientesRef.get();

      snapshot.forEach((doc) => {
        const dividas = doc.data().divida || 0;
        somaDividas += dividas;
      });

      console.log('Soma das dívidas dos clientes:', somaDividas);
      return somaDividas;
    } catch (error) {
      console.log('Erro ao somar as dívidas dos clientes:', error);
      return 0;
    }

  },

   /**
   * Essa função Adiciona um dependente a um cliente.
   * @param {number} id - id do cliente.
   * @param {string} nome - id do cliente.
   * @returns {Boolean} - Estado booleano da operação.
   */
  AddDependent: async function (id,nome){
           
    try {
      userRef = await database.collection(this.currentColl).doc(id)
      snapshotRef = await userRef.get()

      const array = snapshotRef.data().Dependentes;

      array.push({Nome:nome});
      
      await userRef.update({
        Dependentes: array
      });
      
    } catch (error) {
      console.log('Erro ao verificar documento:', error);
      return false;
    }

    return true
  },

     /**
   * Essa função Remove um dependente de um cliente.
   * @param {number} id - id do cliente.
   * @param {number} index - indice do dependente.
   * @returns {Boolean} - Estado booleano da operação.
   */
     DeleteDependent: async function (id,index){
           
      try {
        userRef = await database.collection(this.currentColl).doc(id)
        snapshotRef = await userRef.get()
  
        var array = snapshotRef.data().Dependentes;
        array.splice(index,1);

        await userRef.update({
          Dependentes: array
        });
        
      } catch (error) {
        console.log('Erro ao verificar documento:', error);
        return false;
      }
      return true
    },

     /**
     * @typedef {Object} User
     * @property {string} nome - O nome do Cliente.
     * @property {number} debito - A débito do Cliente.
     * 
     * @typedef {Object} DadosOrganizados
     * @property {User[]} verde - Clientes em estado verde.
     * @property {User[]} amarelo -Clientes em estado amarelo.
     * @property {User[]} vermelho - Clientes em estado vermelho.
     */


     /**
     * Essa função Lista e Organiza todos os débitos dos clientes.
     *  ```User = {
     *  nome:string
     *  debito:number
     * }```
     * @returns {DadosOrganizados} OrganizedData - Objeto Com Dados Organizados.
     * @property {User[]} verde - Clientes em verde.
     * @property {User[]} amarelo - Clientes em amarelo.
     * @property {User[]} vermelho - Clientes em vermelho.
     */
     ListAndOranizeDebits: async function (){
      const dadosClientes = [];

      const verde = [];
      const amarelo = [];
      const vermelho = [];

    
      try {
        // Obtenha todos os documentos da coleção "Clientes"
        clientesRef = await database.collection(this.currentColl)
        
        const snapshot = await clientesRef.get();
    
        // Percorra cada documento e colete os dados desejados
        snapshot.forEach(doc => {
          const { Nome, Divida, Limite } = doc.data();
          dadosClientes.push({ Nome, Divida, Limite });
        });
        // console.log(dadosClientes);
        dadosClientes.forEach(objeto => {
          const { Nome, Divida } = objeto;
      
          if (Divida <= 50) {
            verde.push({ Nome, Divida });
          } else if (Divida <= 100) {
            amarelo.push({ Nome, Divida });
          } else {
            vermelho.push({ Nome, Divida });
          }
        });

        const DadosOrganizados = {verde:verde,amarelo:amarelo,vermelho:vermelho}

        return DadosOrganizados
      } catch (error) {
        console.error('Erro ao obter dados dos clientes:', error);
      }
     }



}

export { clientDb }