portifolioApp.controller('ResumeCtrl', ['$scope', function ($scope) {

	var createFormacao = function(_universidade, _curso, _periodo){
		return {
			universidade: _universidade,
			curso: _curso,
			periodo: _periodo
		};
	};

	var createCurso = function(_nome, _empresa, _periodo){
		return {
			nome: _nome,
			empresa: _empresa,
			periodo: _periodo
		};
	};

	var createExperiencia = function(_empresa, _cargo, _periodo, _descricao){
		return{
			empresa: _empresa,
			cargo: _cargo,
			periodo: _periodo,
			descricao: _descricao
		};
	};

	var createSkill = function(_nome, _title, _conhecimento){
		return {
			nome: _nome,
			title: _title,
			conhecimento: _conhecimento
		};
	};

	$scope.formacoes = [];
	$scope.formacoes.push(createFormacao('Universidade do sul de Santa Catarina (Unisul)', 'Sistemas de informação', 'Julho 2008 - Temporariamente trancado'));

	$scope.cursos = [];
	$scope.cursos.push(createCurso('Desenvolvimento de aplicações web com JavaScript e AngularJS', 'V.Office', '2014'));
	$scope.cursos.push(createCurso('Clean code', 'V.Office', '2014'));
	$scope.cursos.push(createCurso('Academia do Web Developer', 'Globalcode/V.Office', '2011'));
	$scope.cursos.push(createCurso('Academia do Java', 'Globalcode/V.Office', '2009'));

	$scope.experiencias = [];
	$scope.experiencias.push(createExperiencia('Netprecision', 'Desenvolvedor', 'Abril 2015 - Atualmente', 'Análise, desenvolvimento e manutenção de plataforma web, com linguagem java para gestão de documentos online.'));
	$scope.experiencias.push(createExperiencia('Instituto Stela', 'Desenvolvedor / Líder Técnico', 'Agosto 2013 - Abril 2015', 'Responsável pelo desenvolvimento de aplicação java web para gerenciamento de projetos públicos. Líder técnico de equipe de desenvolvimento, atuando como responsável por duas equipes de desenvolvimento, de forma estratégica e técnica.'));
	$scope.experiencias.push(createExperiencia('Paradigma Business Solution', 'Desenvolvedor', 'Maio 2012 - Agosto 2013', 'Análise e desenvolvimento da plataforma de e-procurement com linguagem C#, trabalhando com Javascript, JQuery, Utilizando metodoligia Scrum. Desenvolvimento de componentes visuais para o Framework da empresa.'));
	$scope.experiencias.push(createExperiencia('Instituto Stela', 'Estágiario em desenvolvimento', 'Setembro 2010 - Maio 2012', 'Análise, desenvolvimento e manutenção de plataforma web, com linguagem java. Responsável por atender demandas reportadas pelo cliente.'));

	$scope.skills = [];
	$scope.skills.push(createSkill('Java', 'Avançado', 'avancado'));
	$scope.skills.push(createSkill('JavaScript', 'Avançado', 'avancado'));
	$scope.skills.push(createSkill('HTML', 'Avançado', 'avancado'));
	$scope.skills.push(createSkill('C#', 'Avançado', 'avancado'));
	$scope.skills.push(createSkill('Clean Code', 'Avançado', 'avancado'));
	$scope.skills.push(createSkill('AngularJS', 'Intermediário', 'intermediario'));
	$scope.skills.push(createSkill('JQuery', 'Intermediário', 'intermediario'));

}]);