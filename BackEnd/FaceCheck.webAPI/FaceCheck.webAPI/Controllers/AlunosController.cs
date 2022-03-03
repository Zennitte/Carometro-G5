using FaceCheck.webAPI.Domains;
using FaceCheck.webAPI.Interfaces;
using FaceCheck.webAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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

        [HttpGet("aluno/{idAluno}")]
        public IActionResult BuscarPorId(int idAluno)
        {
            try
            {       
                return Ok(_alunoRepository.BuscarPorId(idAluno));
            }
            catch (Exception erro) 
            {
                return BadRequest(erro);
           
            }
            
        }


        [HttpGet("nomeAluno")]
        public IActionResult BuscarPorNome(string nome)
        {
            try
            {
            return Ok(_alunoRepository.BuscarPorNome(nome));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);

            }
           
        }

        [HttpGet("sala/{idSala}")]
        public IActionResult BuscarPorSala(int idSala)
        {
            try
            {
             return Ok(_alunoRepository.BuscarPorSala(idSala));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);

            }
           
        }

        [HttpPost]
        public IActionResult Cadastrar(Aluno novoAluno)
        {
            try
            {
            _alunoRepository.Cadastrar(novoAluno);

            return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);

            }
            
        }

        [HttpPut("{idAluno}")]
        public IActionResult Atualizar(short idAluno, Aluno AlunoAtualizada)
        {
            try
            {
             _alunoRepository.Atualizar(idAluno, AlunoAtualizada);

            return StatusCode(204);
            }
            catch (Exception)
            {

                throw;
            }
          
        }


        [HttpDelete("{idAluno}")]
        public IActionResult Deletar(int idAluno)
        {
            try
            {
            _alunoRepository.Deletar(idAluno);

            return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);

            }

        }
        [HttpPost("imagem/dir")]
        public IActionResult postDIR(IFormFile arquivo)
        {
            try
            {
               
                if (arquivo.Length > 50000) 
                    return BadRequest(new { mensagem = "O tamanho máximo da imagem foi atingido." });

                string extensao = arquivo.FileName.Split('.').Last();

                if (extensao != "png")
                    return BadRequest(new { mensagem = "Apenas arquivos .png são permitidos." });


                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                _alunoRepository.SalvarImagemDir(arquivo, idUsuario);

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("imagem/dir")]
        public IActionResult getDIR()
        {
            try
            {

                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                string base64 = _alunoRepository.ConsultarImagemlDir(idUsuario);

                return Ok(base64);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
