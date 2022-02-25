using FaceCheck.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FaceCheck.webAPI.Interfaces
{
    interface ISalaRepository
    {
        List<Sala> Listar();

        Sala BuscarPorId(int idSala);

        void Cadastrar(Sala novaSala);

        void Atualizar(short idSala, Sala SalaAtualizada);

        void Deletar(int idSala);
    }
}
