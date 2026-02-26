import { Empresa,Cliente,Tel,Endereco } from "modulo_suporte_de_rl4";

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);

const telEmpresa1 = new Tel("11", "99999-0001");
const telEmpresa2 = new Tel("11", "3333-4444");


const minhaEmpresa = new Empresa(
    "Supermercados Batata Doce S.A.", 
    "Batata Doce Supermercados", 
    "12.345.678/0001-90", 
    enderecoEmpresa
);


minhaEmpresa.telefones.add(telEmpresa1);
minhaEmpresa.telefones.add(telEmpresa2);


const endCli1 = new Endereco("SP", "São Paulo", "Rua Augusta", 500);
const cliente1 = new Cliente("João Silva", "123.456.789-00", endCli1);
cliente1.telefones.add(new Tel("11", "98888-1111"));
cliente1.telefones.add(new Tel("11", "3222-3333"));


const endCli2 = new Endereco("SP", "São Bernardo", "Rua das Flores", 120);
const cliente2 = new Cliente("Maria Oliveira", "987.654.321-00", endCli2);
cliente2.telefones.add(new Tel("11", "97777-2222"));
cliente2.telefones.add(new Tel("11", "3444-5555"));

const endCli3 = new Endereco("SP", "Santo André", "Av. Industrial", 800);
const cliente3 = new Cliente("Pedro Santos", "456.789.123-00", endCli3);
cliente3.telefones.add(new Tel("11", "96666-3333"));
cliente3.telefones.add(new Tel("11", "3666-7777"));

const endCli4 = new Endereco("SP", "São Caetano", "Rua das Palmeiras", 250);
const cliente4 = new Cliente("Ana Costa", "789.123.456-00", endCli4);
cliente4.telefones.add(new Tel("11", "95555-4444"));
cliente4.telefones.add(new Tel("11", "3888-9999"));


const endCli5 = new Endereco("SP", "Osasco", "Av. dos Autonomistas", 1500);
const cliente5 = new Cliente("Carlos Souza", "321.654.987-00", endCli5);
cliente5.telefones.add(new Tel("11", "94444-5555"));
cliente5.telefones.add(new Tel("11", "3777-8888"));


minhaEmpresa.clientes.add(cliente1);
minhaEmpresa.clientes.add(cliente2);
minhaEmpresa.clientes.add(cliente3);
minhaEmpresa.clientes.add(cliente4);
minhaEmpresa.clientes.add(cliente5);


console.log(minhaEmpresa.detalhes)


