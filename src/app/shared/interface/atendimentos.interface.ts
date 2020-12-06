export interface ListarAtendimentos {
  id: number;
  cliente: string;
  pet: string;
  servico: string;
  data: Date;
  dataCriacao: Date;
  status: number;
  observacoes: string;
}
