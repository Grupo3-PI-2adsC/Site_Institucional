CREATE database netmed;
USE netmed;
CREATE TABLE empresa(
idEmpresa int primary key auto_increment,
nome varchar(45),
cnpj char(14),
email varchar(45),
senha varchar(45));

CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(255),
    bairro VARCHAR(255),
    cidade VARCHAR(255)
);

CREATE TABLE tecnico (
    idTecnico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    hospital VARCHAR(255),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE atendente (
    idAtendente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    hospital VARCHAR(255),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);
CREATE TABLE servico (
    idServico INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    nome VARCHAR(255),
    estado VARCHAR(50)
);
CREATE TABLE maquina_monitorada (
    idMaquinaMonitorada INT PRIMARY KEY AUTO_INCREMENT,
    nomeMaquina VARCHAR(255),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);
CREATE TABLE cpu (
    idCpu INT PRIMARY KEY AUTO_INCREMENT,
    numPacotesFisicos INT,
    qtdCpuFisicos INT,
    qtdCpuLogicos INT,
    frequencia FLOAT,
    porcentagemDeUso FLOAT,
    maquinaMonitorada_idMaquinaMonitorada INT,
    FOREIGN KEY (maquinaMonitorada_idMaquinaMonitorada) REFERENCES maquina_monitorada(idMaquinaMonitorada)
);
CREATE TABLE memoria (
    idMemoria INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    totalThreads INT,
    totalProcessosAtivos INT,
    porcentagemDeUso FLOAT,
    maquinaMonitorada_idMaquinaMonitorada INT,
    FOREIGN KEY (maquinaMonitorada_idMaquinaMonitorada) REFERENCES maquina_monitorada(idMaquinaMonitorada)
);
CREATE TABLE disco (
    idDisco INT PRIMARY KEY AUTO_INCREMENT,
    leituras INT,
    bytesDeLeitura BIGINT,
    bytesDeEscrita BIGINT,
    tempoTransferencia FLOAT,
    maquinaMonitorada_idMaquinaMonitorada INT,
    FOREIGN KEY (maquinaMonitorada_idMaquinaMonitorada) REFERENCES maquina_monitorada(idMaquinaMonitorada)
);
CREATE TABLE rede (
    idRede INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    nomeExibicao VARCHAR(255),
    enderecoIpv4 VARCHAR(15),
    enderecoIpv6 VARCHAR(45),
    enderecoMac VARCHAR(17),
    hostname VARCHAR(255),
    nomeDominio VARCHAR(255),
    servidoresDns VARCHAR(255),
    pacotesEnviados INT,
    maquinaMonitorada_idMaquinaMonitorada INT,
    FOREIGN KEY (maquinaMonitorada_idMaquinaMonitorada) REFERENCES maquina_monitorada(idMaquinaMonitorada)
);



