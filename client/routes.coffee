navRoutes = [

# new NavRoute('pages', 'fa-files-o', {label: "Sample Pages"})
#  new NavRoute('blank', '', {parentName: 'pages', label: "Blank Page"})
# new NavRoute('sign-up-ref', '', {redirect: 'sign-up', parentName: 'pages', layoutTemplate: 'loginLayout', label: 'Sign Up'})
# new NavRoute('sign-up', '', {isMainNav: true, template: 'signUp', layoutTemplate: 'loginLayout'})
#  new NavRoute('', '', {isMainNav: false, redirect: 'dashboard'})
#  new NavRoute('index', '', {isMainNav: false, redirect: 'dashboard'})


  new NavRoute('games', 'fa-files-o', {label: "Games"})
  new NavRoute('', 'fa-files-o', {template: 'games', parentName: 'games', label: "Mostrar todos"})

  new NavRoute('metricas', 'fa-files-o', {label: "Métricas"})
  new NavRoute('listar-metricas', 'fa-files-o', {template: 'metricas', parentName: 'metricas', label: "Listar Métricas"})
  new NavRoute('nova-metrica', 'fa-files-o', {template: 'novaMetrica', parentName: 'metricas', label: "Nova métrica"})

#  new NavRoute('novoGame', 'fa-files-o', {parentName: 'games', label: "Novo Game"})
#  new NavRoute('atualizaGame', 'fa-files-o', {label: "Atualiza Game"})
  new NavRoute('participantes', 'fa-files-o', {label: "Participantes"})
  new NavRoute('listar-todos-participantes', 'fa-files-o', {template: 'participantes', parentName: 'participantes', label: "Participantes"})
#  new NavRoute('novoParticipante', 'fa-files-o', {parentName: 'participantes', label: "Novo Participante"})

new NavRoute('times', 'fa-files-o', {label: "Times"})
new NavRoute('listar-todos-times', 'fa-files-o', {template: 'times', parentName: 'times', label: "Mostrar Times"})
new NavRoute('novoTime', 'fa-files-o', {  parentName: 'times', label: "Novo Time"})

]

navRouteList = new NavRouteList(navRoutes)

Session.set('navRoots', navRouteList.rootNavRoutes)