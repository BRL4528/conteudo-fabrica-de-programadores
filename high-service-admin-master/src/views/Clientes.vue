<template>
  <v-data-table :headers="headers" :items="clientes" sort-by="nome" class="elevation-1">
    <template v-slot:top>
      <v-expand-transition>
        <v-card v-if="mostraNovoCliente">
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-form @submit="e.keyCode === 13" v-model="valid" ref="form">
            <v-card-text>
              <v-container>
                <v-row>
                  <h3 class="ml-3">Dados:</h3>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.nome"
                      label="Nome Completo"
                      :rules="nameRules"
                      counter
                      :maxlength="30"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-mask="'###.###.###-##'"
                      v-model="editedItem.cpf"
                      class="inputNumeroLimpo"
                      label="CPF"
                      :rules="cpfRules"
                      :maxlength="14"
                      type="text"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.tel"
                      label="Telefone"
                      v-mask="['(##) ####-####', '(##) #####-####']"
                      :rules="telRules"
                      :maxlength="15"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                      :rules="emailRules"
                      type="text"
                      counter
                      :maxlength="30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="2" md="2" lg="1" xl="1">
                    <v-select
                      v-model="editedItem.sexo"
                      :items="sexo"
                      label="Sexo"
                      :rules="sexoRules"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="mt-7">
                  <h3 class="ml-3">Endereço:</h3>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.logradouro"
                      label="Logradouro"
                      :rules="logradouroRules"
                      type="text"
                      counter
                      :maxlength="30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.nr"
                      label="Número"
                      v-mask="'######'"
                      type="text"
                      :maxlength="6"
                      class="inputNumeroLimpo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.complemento"
                      label="Complemento"
                      type="text"
                      counter
                      :maxlength="30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.bairro"
                      label="Bairro"
                      :rules="bairroRules"
                      type="text"
                      counter
                      :maxlength="30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.cep"
                      v-mask="'#####-###'"
                      label="CEP"
                      :rules="cepRules"
                      type="text"
                      :maxlength="9"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" lg="3">
                    <v-text-field
                      v-model="editedItem.cidade"
                      label="Cidade"
                      :rules="cidadeRules"
                      type="text"
                      counter
                      :maxlength="30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="2" md="2" lg="1" xl="1">
                    <v-select v-model="editedItem.uf" :items="uf" label="UF" :rules="ufRules"></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-layout justify-center>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  type="submit"
                  color="primary"
                  dark
                  class="mb-2"
                  @click="save"
                  :disabled="!valid"
                >Salvar</v-btn>
                <v-btn color="primary" dark class="mb-2" @click="reset">Cancelar</v-btn>
              </v-card-actions>
            </v-layout>
          </v-form>
        </v-card>
      </v-expand-transition>
      <v-toolbar flat color="dark-grey">
        <v-toolbar-title>Lista de clientes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" fab dark small @click="mostrarNovocliente">
          <v-icon v-if="!mostraNovoCliente" dark v-bind:title="msnBotaoUser">mdi-plus</v-icon>
          <v-icon v-if="mostraNovoCliente" dark>mdi-minus</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.nome="{ item }">
      <tr v-bind:class="{ clienteInativo: !item.ativo }">
        {{
        item.nome
        }}
      </tr>
    </template>
    <template v-slot:item.cpf="{ item }">
      <tr v-bind:class="{ clienteInativo: !item.ativo }">
        {{
        item.cpf
        }}
      </tr>
    </template>
    <template v-slot:item.tel="{ item }">
      <tr v-bind:class="{ clienteInativo: !item.ativo }">
        {{
        item.tel
        }}
      </tr>
    </template>
    <template v-slot:item.email="{ item }">
      <tr v-bind:class="{ clienteInativo: !item.ativo }">
        {{
        item.email
        }}
      </tr>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="20" @click="detalhaCliente(item)" v-bind:title="msnDetalhar">mdi-magnify</v-icon>
      <v-dialog v-model="dialog" transition="dialog-transition">
        <v-card>
          <v-container>
            <v-row>
              <h3 class="ml-3">Dados:</h3>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.nome"
                  label="Nome Completo"
                  type="text"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.cpf"
                  class="inputNumeroLimpo"
                  label="CPF"
                  :maxlength="14"
                  type="text"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.tel"
                  label="Telefone"
                  v-mask="['(##) ####-####', '(##) #####-####']"
                  :maxlength="11"
                  type="text"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.email"
                  label="E-mail"
                  type="text"
                  :maxlength="30"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="2" lg="1" xl="1">
                <v-select
                  v-model="clienteConsultado.sexo"
                  :items="sexo"
                  label="Sexo"
                  :rules="sexoRules"
                  readonly
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="mt-7">
              <h3 class="ml-3">Endereço:</h3>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.logradouro"
                  label="Logradouro"
                  type="text"
                  :maxlength="30"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.nr"
                  label="Número"
                  type="number"
                  :maxlength="6"
                  class="inputNumeroLimpo"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.complemento"
                  label="Complemento"
                  type="text"
                  :maxlength="30"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.bairro"
                  label="Bairro"
                  type="text"
                  :maxlength="30"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.cep"
                  label="CEP"
                  v-mask="'#####-###'"
                  type="text"
                  :maxlength="8"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5" lg="3">
                <v-text-field
                  v-model="clienteConsultado.cidade"
                  label="Cidade"
                  type="text"
                  :maxlength="30"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="2" lg="1" xl="1">
                <v-select v-model="clienteConsultado.uf" :items="uf" label="UF" readonly></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
      <v-icon
        size="20"
        class="ml-1"
        v-if="item.ativo"
        color="green"
        @click="ativarDesativarCliente(item)"
        v-bind:title="msnDesativar"
      >mdi-check-bold</v-icon>
      <v-icon
        size="20"
        class="ml-1"
        v-if="!item.ativo"
        color="red"
        @click="ativarDesativarCliente(item)"
        v-bind:title="msnAtivar"
      >mdi-cancel</v-icon>
      <v-icon
        size="20"
        class="ml-1"
        v-if="item.ativo"
        @click="editItem(item)"
        v-bind:title="msnEditar"
      >mdi-pencil</v-icon>
      <v-icon size="20" class="ml-1" v-if="!item.ativo">mdi-pencil-remove</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { mask } from "vue-the-mask"; //Fiz esse import do Mask
export default {
  directives: { mask }, //Aqui não usa o mask como um componente
  data: () => ({
    sexo: ["M", "F"],
    cliente: {},
    clientes: [],
    mostraNovoCliente: false,
    valid: true,
    nameRules: [v => (!!v && v.length >= 4) || "Digite o nome do cliente"],
    cpfRules: [v => (!!v && v.length == 14) || "Digite o CPF com 11 dígitos"],
    telRules: [
      v =>
        (!!v && v.length >= 14) || "Digite o telefone com pelo menos 8 números"
    ],
    emailRules: [v => /.+@.+\..+/.test(v) || "Digite um e-mail válido"],
    sexoRules: [v => !!v || "Selecione o sexo"],
    logradouroRules: [v => (!!v && v.length >= 6) || "Digite o logradouro"],
    bairroRules: [v => (!!v && v.length >= 6) || "Digite o bairro"],
    cepRules: [v => (!!v && v.length == 9) || "Digite o CEP com 8 dígitos"],
    cidadeRules: [v => (!!v && v.length >= 4) || "Digite o nome da cidade"],
    ufRules: [v => !!v || "Selecione o estado"],
    headers: [
      { text: "Nome de cliente", value: "nome" },
      { text: "CPF", value: "cpf" },
      { text: "Telefone", value: "tel" },
      { text: "E-mail", value: "email" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    dialog: false,
    editedIndex: -1,
    msnBotaoUser: "Novo cliente",
    msnDetalhar: "Detalhar cliente",
    msnDesativar: "Desativar cliente",
    msnAtivar: "Ativar cliente",
    msnEditar: "Editar cliente",
    clienteConsultado: {
      nome: "",
      cpf: "",
      sexo: "",
      tel: "",
      email: "",
      logradouro: "",
      nr: "",
      complemento: "",
      bairro: "",
      cep: "",
      cidade: "",
      uf: "",
      ativo: Boolean
    },
    editedItem: {
      nome: "",
      cpf: "",
      sexo: "",
      tel: "",
      email: "",
      logradouro: "",
      nr: "",
      complemento: "",
      bairro: "",
      cep: "",
      cidade: "",
      uf: "",
      ativo: Boolean
    },
    defaultItem: {
      nome: "",
      cpf: "",
      sexo: "",
      tel: "",
      email: "",
      logradouro: "",
      nr: "",
      complemento: "",
      bairro: "",
      cep: "",
      cidade: "",
      uf: "",
      ativo: Boolean
    },
    uf: [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RO",
      "RS",
      "RR",
      "SC",
      "SE",
      "SP",
      "TO"
    ]
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo cliente" : "Editar cliente";
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.clientes = [
        {
          nome: "Teste1",
          cpf: "111.111.111-11",
          sexo: "M",
          tel: "(11)11111-1111",
          email: "teste1@teste.com",
          logradouro: "Rua teste1",
          nr: "111",
          complemento: "teste1",
          bairro: "teste1",
          cep: "11111-111",
          cidade: "teste1",
          uf: "MS",
          ativo: true
        },
        {
          nome: "Teste2",
          cpf: "222.222.222-22",
          sexo: "F",
          tel: "(22)22222-2222",
          email: "teste2@teste.com",
          logradouro: "Rua teste2",
          nr: "222",
          complemento: "teste2",
          bairro: "teste2",
          cep: "22222-222",
          cidade: "teste2",
          uf: "MT",
          ativo: false
        }
      ];
    },
    abreNovocliente() {
      this.mostraNovoCliente = true;
    },
    mostrarNovocliente() {
      this.mostraNovoCliente = !this.mostraNovoCliente;
      setTimeout(() => {
        this.reset();
      }, 100);
    },
    ativarDesativarCliente(cliente) {
      confirm("Tem certeza que deseja Ativar/Desativar esse cliente?") &&
        (cliente.ativo = !cliente.ativo);
    },
    reset() {
      if (this.mostraNovoCliente) {
        this.$refs.form.reset();
        this.editedIndex = -1;
      }
    },
    detalhaCliente(item) {
      this.clienteConsultado = Object.assign({}, item);
      this.dialog = true;
    },
    editItem(item) {
      this.abreNovocliente();
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.clientes[this.editedIndex], this.editedItem);
      } else {
        this.editedItem.ativo = true;
        this.clientes.push(Object.assign({}, this.editedItem));
      }
      this.reset();
    }
  }
};
</script>
<style>
.clienteAtivo {
  color: white;
}
.clienteInativo {
  color: #454547;
}
.inputNumeroLimpo input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>