using FaceCheck.webAPI.Context;
using FaceCheck.webAPI.Domains;
using FaceCheck.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FaceCheck.webAPI.Repositories
{
    public class AlunoRepository : IAlunoRepository
    {
        CarometroContext ctx = new();

        public void Atualizar(short idAluno, Aluno AlunoAtualizado)
        {
            Aluno alunoBuscado = ctx.Alunos.Find(idAluno);

            if (AlunoAtualizado != null)
            {
                alunoBuscado.IdSala = AlunoAtualizado.IdSala;
                alunoBuscado.Imagem = AlunoAtualizado.Imagem;

                ctx.Alunos.Update(AlunoAtualizado);

                ctx.SaveChanges();
            }
        }

        public Aluno BuscarPorId(int idAluno)
        {
            return ctx.Alunos.FirstOrDefault(a => a.IdAlunos == idAluno);
        }

        public Aluno BuscarPorNome(string nome)
        {
            return ctx.Alunos.FirstOrDefault(a => a.NomeAluno == nome);

        }

        public Aluno BuscarPorSala(int idSala)
        {
            return ctx.Alunos.FirstOrDefault(a => a.IdSala == idSala);
        }

        public void Cadastrar(Aluno novoAluno)
        {
            ctx.Alunos.Add(novoAluno);

            ctx.SaveChanges();
        }

        public void Deletar(int idAluno)
        {
            ctx.Alunos.Remove(BuscarPorId(idAluno));

            ctx.SaveChanges();
        }

        public List<Aluno> Listar()
        {
            return ctx.Alunos.ToList();
        }
    }
}
