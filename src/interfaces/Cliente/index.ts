import { TCoordenada } from '../Coordenada';
import { TEndereco } from '../Endereco';

export type Cliente = {
  codigo: string;
  nome: string;
  endereco: TEndereco;
  coordenada: TCoordenada;
};
