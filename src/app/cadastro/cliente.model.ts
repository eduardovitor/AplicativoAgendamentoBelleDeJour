export class Cliente{
  nome: string;
  endereco: string;
  email: string;
  senha: string;
  constructor(nome, endereco, email, senha){
    this.nome=nome;
    this.endereco=endereco;
    this.email=email;
    this.senha=senha;
  }
}