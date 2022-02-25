using FaceCheck.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FaceCheck.webAPI.Interfaces
{
    interface IAlunoRepository
    {
        List<Aluno> Listar();

        Aluno BuscarPorId(int idAluno);

        Aluno BuscarPorNome(string nome);

        Aluno BuscarPorSala(int idSala);

        void Cadastrar(Aluno novoAluno);

        void Atualizar(short idAluno, Aluno AlunoAtualizada);

        void Deletar(int idAluno);
    }
}
