using FaceCheck.webAPI.Interfaces;
using FaceCheck.webAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FaceCheck.webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private IAlunoRepository _alunoRepository { get; set; }

        public AlunosController()
        {
            _alunoRepository = new AlunoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_alunoRepository.Listar());
        }

        [HttpGet("{idAluno}")]
        public IActionResult BuscarPorId(int idAluno)
        {
            return Ok(_alunoRepository.BuscarPorId(idAluno));
        }


        [HttpGet("{nomeAluno}")]
        public IActionResult BuscarPorNome(string nome)
        {
            return Ok(_alunoRepository.BuscarPorNome(nome));
        }

        [HttpGet("{idSala}")]
        public IActionResult BuscarPorSala(int idSala)
        {
            return Ok(_alunoRepository.BuscarPorSala(idSala));
        }




    }
}
