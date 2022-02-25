USE FACE_CHECK
GO

INSERT INTO TIPOUSUARIO(nomeTipoU)
VALUES ('Administrador'),('Colaborador')
GO

INSERT INTO PERIODOS(nomePeriodo)
VALUES ('Manha'),('Tarde')
GO

INSERT INTO USUARIO(idTipoU,nomeUsuario,email,senha)
VALUES ('1','Adminstrador','adm@adm.com','adm12345'), ('2','Colaborador','tsukamoto@gmail.com','tsuka123')
GO

INSERT INTO SALAS(idPeriodo, nomeSala)
VALUES ('1','1A'),('2','1B')
GO

INSERT INTO ALUNOS(idSala, nomeAluno, dataNascimento, RA,imagem)
VALUES ('1','Jailson','29/02/2008','1234567',''),('2','Richard','20/04/2005','7654321','')
GO
