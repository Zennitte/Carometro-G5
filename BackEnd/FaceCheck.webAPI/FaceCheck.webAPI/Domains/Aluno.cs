using System;
using System.Collections.Generic;

#nullable disable

namespace FaceCheck.webAPI.Domains
{
    public partial class Aluno
    {
        public int IdAlunos { get; set; }
        public int? IdSala { get; set; }
        public string NomeAluno { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Ra { get; set; }
        public string Imagem { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
    }
}
