using FaceCheck.webAPI.Context;
using FaceCheck.webAPI.Domains;
using FaceCheck.webAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FaceCheck.webAPI.Repositories
{
    public class AlunoRepository : IAlunoRepository
    {
        CarometroContext ctx = new();

        public void Atualizar(int idAluno, Aluno AlunoAtualizado)
        {
            Aluno alunoBuscado = ctx.Alunos.Find(idAluno);

            if (AlunoAtualizado != null)
            {
                alunoBuscado.IdSala = AlunoAtualizado.IdSala;
                alunoBuscado.Imagem = AlunoAtualizado.Imagem;

                ctx.Alunos.Update(alunoBuscado);

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

        public List<Aluno> BuscarPorSala(int idSala)
        {
            List<Aluno> alunosSala = ctx.Alunos.Where(a => a.IdSala == idSala).ToList();

            return alunosSala;
           // return 
        }

        public void Cadastrar(Aluno novoAluno)
        {
            ctx.Alunos.Add(novoAluno);

            ctx.SaveChanges();
        }

        public string ConsultarImagemlDir(int idAluno)
        {
            string nome_novo = idAluno.ToString() + ".png";
            string caminho = Path.Combine("Perfil", nome_novo);

            if (File.Exists(caminho))
            {
                
                byte[] bytesArquivo = File.ReadAllBytes(caminho);
                return Convert.ToBase64String(bytesArquivo);
            }

            return null;
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

        public void SalvarImagemDir(IFormFile foto, int idAluno)
        {
            string nome_novo = idAluno.ToString() + ".png";

            using (var stream = new FileStream(Path.Combine("perfil", nome_novo), FileMode.Create))
            {
                foto.CopyTo(stream);
            }

        }
    }
}
