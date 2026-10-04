window.COURSE = {
  slug: 'word',
  name: 'Word',
  modules: [
    {
      number: 'Módulo 1', title: 'Primeiros passos',
      lessons: [
        {
          id: 'word-01', title: 'Criar o primeiro documento', level: 'Iniciação', duration: '8 min',
          intro: 'Comece pelo essencial: criar um documento em branco, escrever, guardar e reconhecer a página onde trabalha.',
          objectives: ['Criar um documento em branco', 'Introduzir texto e guardar em formato .docx'],
          steps: ['Abra o Word e escolha <strong>Documento em branco</strong>.', 'Escreva o título <code>O meu primeiro documento</code> e uma frase na linha seguinte.', 'Prima <kbd>Ctrl</kbd> + <kbd>S</kbd>, dê o nome <code>primeiro_documento.docx</code> e guarde.'],
          tip: 'Guarde logo no início e use nomes descritivos. O formato normal e editável do Word é <code>.docx</code>.',
          practice: { intro: 'Crie um documento muito simples.', tasks: ['Escrever um título', 'Escrever dois parágrafos', 'Guardar como primeiro_documento.docx'] },
          quiz: { question: 'Qual é o formato normal de um documento Word editável?', options: ['.docx', '.xlsx', '.jpg'], answer: 0, explain: '.docx é o formato moderno predefinido do Microsoft Word.' }
        },
        {
          id: 'word-02', title: 'Conhecer o Friso e a página', level: 'Iniciação', duration: '12 min',
          intro: 'O Friso organiza comandos por separadores. A página mostra o documento tal como ficará na impressão.',
          objectives: ['Localizar os separadores Ficheiro, Base e Inserir', 'Reconhecer grupos e comandos no Friso'],
          steps: ['No separador <strong>Base</strong>, localize os grupos Área de Transferência, Tipo de Letra e Parágrafo.', 'Abra <strong>Inserir</strong> e encontre Tabela, Imagens e Cabeçalho.', 'Volte a Base e use <kbd>Ctrl</kbd> + <kbd>F1</kbd> para recolher e mostrar o Friso.'],
          tip: 'Não precisa decorar tudo. Pense primeiro na tarefa e depois no separador: inserir algo, rever texto, alterar o esquema.',
          image: { file: 'images/friso-word.jpg', alt: 'Friso do Word em português com separador Base e grupo Tipo de Letra', caption: 'No Friso, cada separador contém grupos; dentro de cada grupo estão os comandos.', source: 'https://support.microsoft.com/pt-pt/word/word-for-new-users' },
          practice: { intro: 'Faça uma visita guiada à interface.', tasks: ['Abrir o separador Base', 'Abrir Inserir', 'Recolher e mostrar o Friso'] },
          quiz: { question: 'Em que separador encontra normalmente Negrito e tamanho da letra?', options: ['Base', 'Referências', 'Correspondências'], answer: 0, explain: 'As ferramentas mais comuns de texto estão no separador Base.' }
        },
        {
          id: 'word-03', title: 'Guardar, abrir e exportar', level: 'Iniciação', duration: '12 min',
          intro: 'Guardar mantém o documento editável; exportar para PDF cria uma versão estável para leitura e envio.',
          objectives: ['Usar Guardar e Guardar Como', 'Exportar uma cópia em PDF'],
          steps: ['Use <kbd>Ctrl</kbd> + <kbd>S</kbd> para guardar alterações.', 'Abra <strong>Ficheiro → Guardar Como</strong> para criar uma segunda versão.', 'Escolha <strong>Ficheiro → Exportar → Criar Documento PDF/XPS</strong> e confirme a pré-visualização.'],
          tip: 'Mantenha o ficheiro .docx para editar e use PDF para entregar uma versão cujo aspeto não deve mudar.',
          practice: { intro: 'Crie uma versão editável e uma versão final.', tasks: ['Guardar o .docx', 'Criar uma cópia v2', 'Exportar um PDF'] },
          quiz: { question: 'Qual formato é mais adequado para entregar uma versão que não deve ser facilmente alterada?', options: ['.docx', '.pdf', '.txt'], answer: 1, explain: 'O PDF preserva a paginação e o aspeto em diferentes dispositivos.' }
        }
      ]
    },
    {
      number: 'Módulo 2', title: 'Escrever e editar',
      lessons: [
        {
          id: 'word-04', title: 'Selecionar texto com precisão', level: 'Básico', duration: '10 min',
          intro: 'Quase todas as alterações começam por selecionar o conteúdo certo.',
          objectives: ['Selecionar palavra, linha, parágrafo e documento', 'Mover o cursor com teclado e rato'],
          steps: ['Faça duplo clique numa palavra para a selecionar.', 'Faça triplo clique dentro de um parágrafo para selecionar o parágrafo completo.', 'Use <kbd>Ctrl</kbd> + <kbd>A</kbd> para selecionar todo o documento.'],
          tip: 'Use <kbd>Shift</kbd> com as setas para aumentar ou reduzir a seleção sem perder o ponto inicial.',
          practice: { intro: 'Pratique quatro tipos de seleção.', tasks: ['Selecionar uma palavra', 'Selecionar um parágrafo', 'Selecionar todo o documento'] },
          quiz: { question: 'Que atalho seleciona todo o documento?', options: ['Ctrl + S', 'Ctrl + A', 'Ctrl + D'], answer: 1, explain: 'Ctrl + A seleciona todo o conteúdo na maioria das aplicações.' }
        },
        {
          id: 'word-05', title: 'Copiar, cortar e colar', level: 'Básico', duration: '10 min',
          intro: 'Copiar duplica; cortar move. As opções de colagem controlam se a formatação acompanha o texto.',
          objectives: ['Usar os atalhos de edição', 'Escolher Manter Formatação ou Manter Apenas Texto'],
          steps: ['Selecione uma frase e prima <kbd>Ctrl</kbd> + <kbd>C</kbd>.', 'Coloque o cursor noutra posição e prima <kbd>Ctrl</kbd> + <kbd>V</kbd>.', 'Abra as Opções de Colagem e experimente <strong>Manter Apenas Texto</strong>.'],
          tip: 'Quando cola texto vindo de um site, Manter Apenas Texto evita trazer tipos de letra, cores e espaçamentos indesejados.',
          practice: { intro: 'Reorganize três parágrafos.', tasks: ['Copiar uma frase', 'Mover um parágrafo com Cortar', 'Colar como texto simples'] },
          quiz: { question: 'Qual atalho corta o texto selecionado?', options: ['Ctrl + X', 'Ctrl + C', 'Ctrl + V'], answer: 0, explain: 'Ctrl + X remove a seleção e coloca-a na área de transferência.' }
        },
        {
          id: 'word-06', title: 'Desfazer, refazer, localizar e substituir', level: 'Básico', duration: '12 min',
          intro: 'Estas ferramentas permitem experimentar sem medo e corrigir muitas ocorrências de uma só vez.',
          objectives: ['Desfazer e refazer ações', 'Localizar e substituir texto com controlo'],
          steps: ['Faça uma alteração e use <kbd>Ctrl</kbd> + <kbd>Z</kbd> para a desfazer.', 'Use <kbd>Ctrl</kbd> + <kbd>Y</kbd> para refazer.', 'Prima <kbd>Ctrl</kbd> + <kbd>H</kbd>, procure uma palavra e substitua uma ocorrência antes de usar Substituir Tudo.'],
          tip: 'Antes de Substituir Tudo, teste uma ocorrência e verifique maiúsculas, acentos e palavras semelhantes.',
          practice: { intro: 'Corrija um pequeno texto repetitivo.', tasks: ['Desfazer uma alteração', 'Localizar uma palavra', 'Substituir todas as ocorrências verificadas'] },
          quiz: { question: 'Que atalho abre Localizar e Substituir?', options: ['Ctrl + F', 'Ctrl + H', 'Ctrl + R'], answer: 1, explain: 'Ctrl + H abre diretamente a caixa de substituição.' }
        }
      ]
    },
    {
      number: 'Módulo 3', title: 'Formatação de texto e parágrafos',
      lessons: [
        {
          id: 'word-07', title: 'Tipo de letra, tamanho e destaque', level: 'Básico', duration: '14 min',
          intro: 'Formate com hierarquia: títulos visíveis, corpo confortável e destaque apenas no que importa.',
          objectives: ['Aplicar negrito, itálico, tamanho e cor', 'Limpar formatação inconsistente'],
          steps: ['Selecione o título e aplique 20 pt e Negrito.', 'No corpo, escolha 11 ou 12 pt e mantenha uma cor escura.', 'Selecione texto irregular e use <strong>Limpar Toda a Formatação</strong>.'],
          tip: 'Evite sublinhar texto que não é uma hiperligação; use negrito para ênfase e mantenha poucas cores.',
          practice: { intro: 'Crie uma hierarquia simples.', tasks: ['Título a 20 pt', 'Corpo a 11 ou 12 pt', 'Uma expressão em negrito'] },
          quiz: { question: 'Qual prática melhora a legibilidade?', options: ['Usar cinco tipos de letra', 'Manter tipos e tamanhos coerentes', 'Escrever tudo em maiúsculas'], answer: 1, explain: 'A consistência visual reduz esforço e torna a estrutura previsível.' }
        },
        {
          id: 'word-08', title: 'Alinhamento, avanços e espaçamento', level: 'Básico', duration: '15 min',
          intro: 'Parágrafos claros dependem mais do espaçamento e da largura da linha do que de efeitos decorativos.',
          objectives: ['Alinhar parágrafos e ajustar avanço', 'Definir espaçamento antes, depois e entre linhas'],
          steps: ['Selecione um parágrafo e experimente alinhar à esquerda, centrar e justificar.', 'Abra as opções de Parágrafo e defina 1,15 de espaçamento entre linhas.', 'Adicione 6 pt depois de cada parágrafo em vez de inserir linhas vazias.'],
          tip: 'Não use a barra de espaços para alinhar texto. Use tabulações, avanços, tabelas ou alinhamento.',
          practice: { intro: 'Normalize três parágrafos.', tasks: ['Alinhar à esquerda', 'Definir 1,15 entre linhas', 'Definir 6 pt depois'] },
          quiz: { question: 'Qual é a melhor forma de criar espaço entre parágrafos?', options: ['Premir Enter várias vezes', 'Usar Espaçamento Depois', 'Adicionar espaços no fim da linha'], answer: 1, explain: 'O espaçamento de parágrafo é consistente e adapta-se ao texto.' }
        },
        {
          id: 'word-09', title: 'Listas com marcas e numeração', level: 'Básico', duration: '14 min',
          intro: 'Listas tornam sequências e grupos mais fáceis de percorrer. Numere passos; use marcas para itens sem ordem.',
          objectives: ['Criar listas com marcas e numeradas', 'Alterar nível e reiniciar numeração'],
          steps: ['Selecione três itens e escolha <strong>Marcas</strong>.', 'Para uma sequência, escolha <strong>Numeração</strong>.', 'Use <kbd>Tab</kbd> para criar um subnível e Shift + Tab para regressar.'],
          tip: 'Se a ordem for importante, use números. Se os itens forem equivalentes, use marcas.',
          practice: { intro: 'Crie duas listas.', tasks: ['Lista de materiais com marcas', 'Procedimento com números', 'Um subitem com nível inferior'] },
          quiz: { question: 'Que tipo de lista é mais adequado para instruções passo a passo?', options: ['Marcas', 'Numeração', 'Nenhuma'], answer: 1, explain: 'A numeração torna a sequência explícita.' }
        }
      ]
    },
    {
      number: 'Módulo 4', title: 'Páginas e esquema',
      lessons: [
        {
          id: 'word-10', title: 'Margens, orientação e tamanho', level: 'Básico', duration: '14 min',
          intro: 'O separador Esquema controla a página física: margens, orientação, tamanho e colunas.',
          objectives: ['Configurar uma página A4', 'Escolher Retrato ou Paisagem'],
          steps: ['Abra <strong>Esquema → Tamanho</strong> e confirme A4.', 'Escolha margens Normais ou defina margens personalizadas.', 'Mude para Paisagem quando a página tiver uma tabela muito larga.'],
          tip: 'Evite margens demasiado pequenas: podem cortar conteúdo na impressão e dificultar a leitura.',
          practice: { intro: 'Prepare dois documentos.', tasks: ['Documento A4 em Retrato', 'Margens Normais', 'Segunda versão em Paisagem'] },
          quiz: { question: 'Onde altera margens e orientação?', options: ['Esquema', 'Rever', 'Correspondências'], answer: 0, explain: 'O separador Esquema reúne as definições de página e parágrafo.' }
        },
        {
          id: 'word-11', title: 'Quebras de página e de secção', level: 'Intermédio', duration: '18 min',
          intro: 'Uma quebra cria uma mudança intencional. Premir Enter muitas vezes cria um documento frágil.',
          objectives: ['Inserir uma quebra de página', 'Usar secções para mudar cabeçalho, orientação ou numeração'],
          steps: ['Coloque o cursor antes de um novo capítulo e prima <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.', 'Ative <strong>¶ Mostrar Tudo</strong> para ver a quebra.', 'Use <strong>Esquema → Quebras → Página Seguinte</strong> para iniciar uma nova secção.'],
          tip: 'Use secções apenas quando uma parte precisa de configuração diferente; para um novo capítulo simples, basta uma quebra de página.',
          practice: { intro: 'Estruture um documento com três capítulos.', tasks: ['Quebra antes do capítulo 2', 'Quebra antes do capítulo 3', 'Mostrar marcas de formatação'] },
          quiz: { question: 'Qual atalho insere uma quebra de página?', options: ['Ctrl + Enter', 'Shift + Enter', 'Alt + Enter'], answer: 0, explain: 'Ctrl + Enter inicia a página seguinte sem linhas vazias.' }
        },
        {
          id: 'word-12', title: 'Colunas e hifenização', level: 'Intermédio', duration: '15 min',
          intro: 'Colunas são úteis em boletins e folhetos, mas exigem texto curto e largura suficiente.',
          objectives: ['Aplicar colunas a uma secção', 'Controlar passagem de texto entre colunas'],
          steps: ['Selecione apenas a parte que ficará em colunas.', 'Escolha <strong>Esquema → Colunas → Duas</strong>.', 'Insira uma <strong>Quebra de Coluna</strong> para controlar onde começa a coluna seguinte.'],
          tip: 'Não use colunas estreitas para texto longo. Teste a leitura e ative hifenização apenas se melhorar o espaçamento.',
          practice: { intro: 'Crie um boletim de uma página.', tasks: ['Título a toda a largura', 'Corpo em duas colunas', 'Uma quebra de coluna controlada'] },
          quiz: { question: 'Como deve aplicar colunas apenas a parte do documento?', options: ['Selecionar o texto ou usar uma secção', 'Alterar o zoom', 'Usar espaços'], answer: 0, explain: 'A seleção ou uma secção limita a alteração à parte pretendida.' }
        }
      ]
    },
    {
      number: 'Módulo 5', title: 'Estilos e estrutura',
      lessons: [
        {
          id: 'word-13', title: 'Usar estilos corretamente', level: 'Intermédio', duration: '18 min',
          intro: 'Estilos aplicam aparência e significado. Permitem alterar todo o documento e criar índices automáticos.',
          objectives: ['Aplicar Título 1, Título 2 e Normal', 'Modificar um estilo para atualizar todas as ocorrências'],
          steps: ['Aplique <strong>Título 1</strong> aos capítulos.', 'Aplique <strong>Título 2</strong> às subseções e <strong>Normal</strong> ao corpo.', 'Clique com o botão direito em Título 1, escolha <strong>Modificar</strong> e altere a cor.'],
          tip: 'Não formate cada título manualmente. Use estilos para garantir consistência e navegação.',
          practice: { intro: 'Estruture um relatório curto.', tasks: ['Três Títulos 1', 'Duas subseções com Título 2', 'Corpo com estilo Normal'] },
          quiz: { question: 'Qual é a principal vantagem dos estilos?', options: ['Aumentar o ficheiro', 'Aplicar estrutura e formatação consistentes', 'Bloquear o documento'], answer: 1, explain: 'Os estilos centralizam o aspeto e criam uma hierarquia reconhecida pelo Word.' }
        },
        {
          id: 'word-14', title: 'Temas e identidade visual', level: 'Intermédio', duration: '15 min',
          intro: 'Um tema coordena cores, tipos de letra e efeitos em todo o documento.',
          objectives: ['Aplicar um tema', 'Escolher cores e tipos de letra coerentes'],
          steps: ['Abra <strong>Estrutura → Temas</strong> e pré-visualize opções.', 'Escolha um conjunto de Cores adequado ao documento.', 'Escolha Tipos de Letra e verifique títulos, corpo, tabelas e gráficos.'],
          tip: 'Um tema não corrige estrutura fraca. Aplique primeiro os estilos, depois ajuste o tema.',
          practice: { intro: 'Crie duas versões visuais do mesmo relatório.', tasks: ['Aplicar um tema sóbrio', 'Trocar as cores', 'Confirmar contraste'] },
          quiz: { question: 'O que um tema coordena?', options: ['Cores e tipos de letra', 'A ortografia', 'As permissões do ficheiro'], answer: 0, explain: 'Temas definem escolhas visuais partilhadas em todo o documento.' }
        },
        {
          id: 'word-15', title: 'Índice automático e painel de navegação', level: 'Intermédio', duration: '20 min',
          intro: 'Quando os títulos usam estilos, o Word pode criar e atualizar um índice em segundos.',
          objectives: ['Inserir um índice automático', 'Navegar e reorganizar títulos'],
          steps: ['Confirme que os capítulos usam Título 1 e as subseções Título 2.', 'Coloque o cursor no início e escolha <strong>Referências → Índice → Automático</strong>.', 'Ative <strong>Ver → Painel de Navegação</strong> e clique nos títulos.'],
          tip: 'Depois de editar, clique no índice e escolha Atualizar Tabela; atualize a tabela inteira se os títulos mudaram.',
          practice: { intro: 'Crie um documento com índice.', tasks: ['Aplicar estilos de título', 'Inserir índice automático', 'Atualizar a tabela inteira'] },
          quiz: { question: 'De onde o Word obtém as entradas do índice automático?', options: ['Dos estilos de título', 'Das palavras em negrito', 'Dos comentários'], answer: 0, explain: 'O índice usa a hierarquia de estilos Título 1, Título 2 e seguintes.' }
        }
      ]
    },
    {
      number: 'Módulo 6', title: 'Tabelas, imagens e objetos',
      lessons: [
        {
          id: 'word-16', title: 'Criar e formatar tabelas', level: 'Intermédio', duration: '18 min',
          intro: 'Tabelas organizam dados relacionados. Não devem ser usadas apenas para empurrar elementos pela página.',
          objectives: ['Inserir uma tabela com cabeçalhos', 'Ajustar largura, alinhamento e estilo'],
          steps: ['Escolha <strong>Inserir → Tabela</strong> e crie 4 colunas por 6 linhas.', 'Escreva cabeçalhos claros na primeira linha e ative <strong>Linha de Cabeçalho</strong>.', 'Use <strong>Distribuir Colunas</strong> e ajuste a largura ao conteúdo.'],
          tip: 'Não funda muitas células. Tabelas simples são mais fáceis de editar, ler e tornar acessíveis.',
          practice: { intro: 'Crie uma tabela de contactos.', tasks: ['Quatro cabeçalhos', 'Cinco registos', 'Estilo com boa legibilidade'] },
          quiz: { question: 'Porque é importante marcar a primeira linha como cabeçalho?', options: ['Para acessibilidade e repetição em páginas', 'Para aumentar o zoom', 'Para converter em imagem'], answer: 0, explain: 'Cabeçalhos ajudam leitores e podem repetir-se quando a tabela ocupa várias páginas.' }
        },
        {
          id: 'word-17', title: 'Inserir e redimensionar imagens', level: 'Intermédio', duration: '17 min',
          intro: 'Insira imagens com boa resolução, redimensione pelos cantos e adicione texto alternativo.',
          objectives: ['Inserir uma imagem a partir do dispositivo', 'Redimensionar sem deformar e escrever texto alternativo'],
          steps: ['Abra <strong>Inserir → Imagens → Este Dispositivo</strong>.', 'Selecione a imagem e arraste uma alça de canto para manter as proporções.', 'Clique com o botão direito e escolha <strong>Editar Texto Alternativo</strong>.'],
          tip: 'O texto alternativo deve explicar a informação ou função da imagem, não apenas dizer “imagem”.',
          image: { file: 'images/inserir-imagem.png', alt: 'Separador Inserir do Word em português com o botão Imagens realçado', caption: 'O botão Imagens encontra-se no separador Inserir, no grupo Ilustrações.', source: 'https://support.microsoft.com/pt-pt/word/insert-scanned-text-or-images-into-word' },
          practice: { intro: 'Insira uma fotografia num relatório.', tasks: ['Inserir do dispositivo', 'Redimensionar pelo canto', 'Adicionar texto alternativo'] },
          quiz: { question: 'Que alça deve usar para redimensionar sem deformar?', options: ['Uma alça de canto', 'Apenas a alça lateral', 'A barra de estado'], answer: 0, explain: 'As alças de canto preservam mais facilmente a proporção original.' }
        },
        {
          id: 'word-18', title: 'Moldar texto e posicionar objetos', level: 'Intermédio', duration: '18 min',
          intro: 'A moldagem define a relação entre imagem e texto. “Em Linha com o Texto” é a opção mais estável.',
          objectives: ['Escolher uma opção de moldagem', 'Fixar ou mover uma imagem com o texto'],
          steps: ['Selecione a imagem e abra <strong>Opções de Esquema</strong>.', 'Escolha <strong>Quadrado</strong> para colocar texto à volta ou <strong>Em Linha com o Texto</strong> para máxima estabilidade.', 'Teste <strong>Mover com texto</strong> e <strong>Fixar posição na página</strong>.'],
          tip: 'Se um objeto desaparece ou é difícil de selecionar, abra <strong>Base → Selecionar → Painel de Seleção</strong>.',
          practice: { intro: 'Compare três opções de posição.', tasks: ['Em Linha com o Texto', 'Quadrado', 'Fixar posição na página'] },
          quiz: { question: 'Qual opção trata a imagem como um caráter no parágrafo?', options: ['Em Linha com o Texto', 'À Frente do Texto', 'Quadrado'], answer: 0, explain: 'Em Linha com o Texto integra a imagem no fluxo do parágrafo.' }
        }
      ]
    },
    {
      number: 'Módulo 7', title: 'Cabeçalhos e paginação',
      lessons: [
        {
          id: 'word-19', title: 'Cabeçalhos e rodapés', level: 'Intermédio', duration: '16 min',
          intro: 'Cabeçalhos e rodapés repetem informação útil sem ocupar o corpo do documento.',
          objectives: ['Criar e editar cabeçalho e rodapé', 'Usar uma primeira página diferente'],
          steps: ['Faça duplo clique no topo da página para abrir o cabeçalho.', 'Escreva o nome do documento e use tabulações de alinhamento.', 'Ative <strong>Primeira Página Diferente</strong> para manter a capa limpa.'],
          tip: 'Evite colocar informação essencial apenas no cabeçalho: alguns leitores podem não a anunciar no fluxo principal.',
          image: { file: 'images/cabecalho-word.png', alt: 'Friso de Cabeçalho do Word em português com Informações do Documento', caption: 'No modo Cabeçalho pode inserir data, nome do ficheiro e outras propriedades.', source: 'https://support.microsoft.com/pt-pt/word/add-the-file-name-date-author-or-other-word-document-properties-to-a-header-or-footer' },
          practice: { intro: 'Crie um cabeçalho profissional.', tasks: ['Título curto no cabeçalho', 'Data automática no rodapé', 'Primeira página diferente'] },
          quiz: { question: 'Como abre rapidamente a área de cabeçalho?', options: ['Duplo clique no topo da página', 'Ctrl + H', 'Clique na barra de estado'], answer: 0, explain: 'Um duplo clique na margem superior entra diretamente no cabeçalho.' }
        },
        {
          id: 'word-20', title: 'Números de página', level: 'Intermédio', duration: '16 min',
          intro: 'A numeração pode começar depois da capa ou reiniciar em diferentes secções.',
          objectives: ['Inserir números de página', 'Começar a numeração numa secção posterior'],
          steps: ['Escolha <strong>Inserir → Número de Página</strong> e selecione uma posição.', 'Para começar depois da capa, crie uma quebra de secção.', 'Desative <strong>Ligar ao Anterior</strong> e use <strong>Formatar Números de Página → Iniciar em 1</strong>.'],
          tip: 'Ocultar o número na primeira página não é o mesmo que iniciar a página seguinte em 1; para isso, use uma secção.',
          practice: { intro: 'Numere um relatório com capa.', tasks: ['Criar secção depois da capa', 'Desligar Ligar ao Anterior', 'Iniciar em 1'] },
          quiz: { question: 'O que permite reiniciar a numeração no meio do documento?', options: ['Uma quebra de secção', 'Uma linha vazia', 'Um comentário'], answer: 0, explain: 'Secções podem ter cabeçalhos, rodapés e numeração independentes.' }
        },
        {
          id: 'word-21', title: 'Campos e propriedades automáticas', level: 'Avançado', duration: '18 min',
          intro: 'Campos inserem informação que o Word pode atualizar: data, autor, nome do ficheiro, referências e resultados.',
          objectives: ['Inserir uma propriedade do documento', 'Atualizar campos antes da entrega'],
          steps: ['No cabeçalho, escolha <strong>Informações do Documento</strong> e insira Nome do Ficheiro.', 'Altere o nome do ficheiro e atualize o campo com <kbd>F9</kbd>.', 'Selecione todo o documento com Ctrl + A e prima F9 antes de exportar.'],
          tip: 'Campos podem mostrar informação antiga até serem atualizados; faça sempre a atualização final.',
          practice: { intro: 'Crie um rodapé automático.', tasks: ['Inserir autor', 'Inserir nome do ficheiro', 'Atualizar todos os campos'] },
          quiz: { question: 'Que tecla atualiza um campo selecionado?', options: ['F9', 'F2', 'F12'], answer: 0, explain: 'F9 atualiza campos, índices, legendas e outras referências automáticas.' }
        }
      ]
    },
    {
      number: 'Módulo 8', title: 'Revisão e colaboração',
      lessons: [
        {
          id: 'word-22', title: 'Ortografia, gramática e Editor', level: 'Intermédio', duration: '16 min',
          intro: 'O Editor ajuda a encontrar erros, mas a decisão final continua a ser humana.',
          objectives: ['Definir o idioma de revisão', 'Analisar sugestões sem aceitar alterações cegamente'],
          steps: ['Selecione o texto e confirme <strong>Rever → Idioma → Português (Portugal)</strong>.', 'Abra o <strong>Editor</strong> e reveja primeiro Ortografia e depois Gramática.', 'Leia cada frase no contexto antes de aceitar uma sugestão.'],
          tip: 'Nomes próprios e termos técnicos podem ser corretos mesmo quando aparecem sublinhados.',
          practice: { intro: 'Reveja uma página de texto.', tasks: ['Definir pt-PT', 'Corrigir erros reais', 'Ignorar ou adicionar termos corretos'] },
          quiz: { question: 'Porque deve confirmar o idioma do texto?', options: ['Para aplicar o corretor adequado', 'Para mudar as margens', 'Para proteger o ficheiro'], answer: 0, explain: 'As regras de ortografia e gramática dependem do idioma definido.' }
        },
        {
          id: 'word-23', title: 'Comentários e @menções', level: 'Intermédio', duration: '15 min',
          intro: 'Comentários permitem discutir uma passagem sem alterar o texto principal.',
          objectives: ['Criar e responder a comentários', 'Resolver uma conversa concluída'],
          steps: ['Selecione uma frase e escolha <strong>Rever → Novo Comentário</strong>.', 'Escreva uma observação específica, por exemplo “Confirmar esta data”.', 'Responda ao comentário e use <strong>Resolver</strong> quando a questão estiver tratada.'],
          tip: 'Um bom comentário indica o problema e a ação desejada. Evite apenas “ver isto”.',
          practice: { intro: 'Faça uma revisão colaborativa simulada.', tasks: ['Adicionar dois comentários', 'Responder a um', 'Resolver a conversa concluída'] },
          quiz: { question: 'Um comentário altera diretamente o texto do documento?', options: ['Sim', 'Não', 'Apenas em PDF'], answer: 1, explain: 'O comentário fica associado à passagem, mas não muda o conteúdo por si só.' }
        },
        {
          id: 'word-24', title: 'Registar alterações', level: 'Avançado', duration: '20 min',
          intro: 'Registar Alterações torna inserções, eliminações e formatação visíveis para revisão.',
          objectives: ['Ativar o controlo de alterações', 'Aceitar ou rejeitar alterações individualmente'],
          steps: ['Ative <strong>Rever → Registar Alterações</strong>.', 'Edite uma frase e elimine outra; observe as marcas.', 'Use <strong>Seguinte</strong>, <strong>Aceitar</strong> ou <strong>Rejeitar</strong> para tratar cada alteração.'],
          tip: '“Sem Marcação” esconde temporariamente as marcas, mas não as aceita. Verifique o estado final antes de enviar.',
          practice: { intro: 'Simule uma revisão editorial.', tasks: ['Ativar registo', 'Fazer três alterações', 'Aceitar duas e rejeitar uma'] },
          quiz: { question: 'Escolher “Sem Marcação” aceita todas as alterações?', options: ['Sim', 'Não, apenas muda a visualização', 'Só aceita formatação'], answer: 1, explain: 'As alterações continuam no documento até serem aceites ou rejeitadas.' }
        }
      ]
    },
    {
      number: 'Módulo 9', title: 'Referências e documentos longos',
      lessons: [
        {
          id: 'word-25', title: 'Notas de rodapé e citações', level: 'Avançado', duration: '18 min',
          intro: 'Notas explicam; citações identificam fontes. O Word pode guardar fontes e gerar bibliografias.',
          objectives: ['Inserir uma nota de rodapé', 'Adicionar uma citação e bibliografia'],
          steps: ['Coloque o cursor após uma afirmação e escolha <strong>Referências → Inserir Nota de Rodapé</strong>.', 'Use <strong>Inserir Citação → Adicionar Nova Fonte</strong> e preencha os campos.', 'No final, escolha <strong>Bibliografia</strong> e selecione um formato automático.'],
          tip: 'Confirme sempre o estilo exigido pela escola ou organização e reveja os dados de cada fonte.',
          practice: { intro: 'Crie uma página académica curta.', tasks: ['Inserir uma nota', 'Adicionar duas fontes', 'Gerar bibliografia'] },
          quiz: { question: 'Em que separador encontra Citações e Bibliografia?', options: ['Referências', 'Base', 'Ver'], answer: 0, explain: 'O separador Referências reúne notas, citações, legendas e índices.' }
        },
        {
          id: 'word-26', title: 'Legendas e referências cruzadas', level: 'Avançado', duration: '20 min',
          intro: 'Legendas numeram figuras e tabelas; referências cruzadas criam ligações que se atualizam.',
          objectives: ['Inserir uma legenda automática', 'Referir uma figura sem escrever o número manualmente'],
          steps: ['Selecione uma imagem e escolha <strong>Referências → Inserir Legenda</strong>.', 'Escreva uma descrição curta depois de “Figura 1”.', 'No texto, use <strong>Referência Cruzada</strong> para inserir o número da figura.'],
          tip: 'Atualize todos os campos com Ctrl + A e F9 depois de mover ou adicionar figuras.',
          practice: { intro: 'Crie duas figuras numeradas.', tasks: ['Duas legendas', 'Uma referência cruzada', 'Atualizar numeração'] },
          quiz: { question: 'Porque não deve escrever “ver Figura 3” manualmente?', options: ['A numeração pode mudar', 'O texto fica a vermelho', 'O Word bloqueia a página'], answer: 0, explain: 'Uma referência cruzada acompanha alterações de numeração automaticamente.' }
        },
        {
          id: 'word-27', title: 'Impressão em série', level: 'Avançado', duration: '24 min',
          intro: 'A impressão em série combina um documento modelo com uma lista para criar cartas, etiquetas ou mensagens personalizadas.',
          objectives: ['Ligar uma lista de destinatários', 'Inserir campos e pré-visualizar resultados'],
          steps: ['Abra <strong>Correspondências → Iniciar Impressão em Série → Cartas</strong>.', 'Escolha <strong>Selecionar Destinatários</strong> e ligue uma lista com Nome e Morada.', 'Insira os campos, use <strong>Pré-visualizar Resultados</strong> e verifique vários registos.'],
          tip: 'Nunca conclua a fusão sem testar o primeiro, um registo intermédio e o último.',
          practice: { intro: 'Crie três cartas personalizadas.', tasks: ['Ligar uma lista de 3 pessoas', 'Inserir Nome e Morada', 'Pré-visualizar todos os registos'] },
          quiz: { question: 'Que separador contém a Impressão em Série?', options: ['Correspondências', 'Estrutura', 'Desenhar'], answer: 0, explain: 'Correspondências reúne a fusão, os destinatários e os campos.' }
        }
      ]
    },
    {
      number: 'Módulo 10', title: 'Projeto orientado',
      lessons: [
        {
          id: 'word-28', title: 'Acessibilidade e leitura', level: 'Avançado', duration: '20 min',
          intro: 'Um documento acessível usa estrutura real, texto alternativo, contraste e uma ordem de leitura previsível.',
          objectives: ['Executar o Verificador de Acessibilidade', 'Corrigir problemas frequentes'],
          steps: ['Aplique estilos de título em vez de apenas aumentar letras.', 'Adicione texto alternativo às imagens e cabeçalhos às tabelas.', 'Abra <strong>Rever → Verificar Acessibilidade</strong> e trate Erros antes de Avisos.'],
          tip: 'Não use apenas cor para transmitir significado. Acrescente texto, símbolos ou rótulos.',
          practice: { intro: 'Faça uma auditoria de acessibilidade.', tasks: ['Hierarquia de títulos correta', 'Texto alternativo em imagens', 'Sem erros no verificador'] },
          quiz: { question: 'O que deve usar para marcar capítulos?', options: ['Estilos de título', 'Apenas negrito e tamanho', 'Caixas de texto'], answer: 0, explain: 'Estilos de título dão aparência e estrutura reconhecida por tecnologias de apoio.' }
        },
        {
          id: 'word-29', title: 'Construir um relatório completo', level: 'Projeto final', duration: '40 min',
          intro: 'Combine capa, estilos, secções, tabela, imagem, cabeçalhos, índice e referências num único documento coerente.',
          objectives: ['Criar um relatório profissional de 5 a 8 páginas', 'Aplicar as ferramentas do curso numa estrutura real'],
          steps: ['Crie capa, resumo, três capítulos e conclusão; use Título 1 e Título 2.', 'Adicione uma tabela, uma imagem com legenda, cabeçalho, rodapé e numeração a partir da segunda página.', 'Insira índice automático, duas citações e uma bibliografia.'],
          tip: 'Construa primeiro a estrutura, depois o conteúdo e só no fim faça o acabamento visual.',
          practice: { intro: 'Produza a primeira versão do relatório.', tasks: ['Estrutura e estilos completos', 'Tabela e imagem legendada', 'Índice, citações e paginação'] },
          quiz: { question: 'Qual é a ordem de trabalho mais segura?', options: ['Decoração, estrutura, conteúdo', 'Estrutura, conteúdo, acabamento', 'Exportar antes de escrever'], answer: 1, explain: 'A estrutura orienta o conteúdo; o acabamento vem depois de o documento estar estável.' }
        },
        {
          id: 'word-30', title: 'Revisão final e entrega', level: 'Projeto final', duration: '25 min',
          intro: 'A última etapa verifica conteúdo, consistência, campos, acessibilidade e a versão exportada.',
          objectives: ['Executar uma revisão final sistemática', 'Entregar .docx e PDF verificados'],
          steps: ['Atualize campos com Ctrl + A e F9; atualize também o índice inteiro.', 'Execute Editor e Verificador de Acessibilidade; confirme comentários e alterações pendentes.', 'Exporte para PDF, abra o PDF e confirme páginas, hiperligações, imagens e numeração.'],
          tip: 'Guarde uma cópia editável final antes de aceitar alterações ou remover comentários em massa.',
          practice: { intro: 'Conclua a lista de verificação de entrega.', tasks: ['Campos e índice atualizados', 'Zero alterações pendentes', 'DOCX e PDF abertos e verificados'] },
          quiz: { question: 'Porque deve abrir o PDF depois de exportar?', options: ['Para confirmar que a versão entregue ficou correta', 'Para aumentar o tamanho do ficheiro', 'Para converter de volta para Word'], answer: 0, explain: 'A verificação do ficheiro final revela quebras, cortes ou elementos ausentes.' }
        }
      ]
    },
    {
      number: 'Módulo 11', title: 'Modelos e formulários',
      lessons: [
        {
          id: 'word-31', title: 'Criar um modelo reutilizável', level: 'Básico', duration: '20 min',
          intro: 'Transforme um documento bem preparado num ponto de partida seguro para cartas, atas ou relatórios futuros.',
          objectives: ['Distinguir documento de modelo', 'Guardar e reutilizar um ficheiro .dotx'],
          steps: ['Crie o documento-base com margens, tema, logótipo, estilos e texto de instrução.', 'Escolha <strong>Ficheiro → Guardar Como</strong> e selecione <strong>Modelo do Word (.dotx)</strong>.', 'Feche o ficheiro e crie um novo documento a partir do modelo para confirmar que o original permanece intacto.'],
          tip: 'Coloque no modelo apenas conteúdo estável; dados de uma pessoa ou de um mês pertencem ao novo documento.',
          practice: { intro: 'Crie um modelo de ata com título, data, participantes e decisões.', tasks: ['Estrutura e estilos preparados', 'Modelo guardado em .dotx', 'Novo documento criado a partir do modelo'] },
          quiz: { question: 'Qual é a principal vantagem de um modelo?', options: ['Cria documentos novos com estrutura consistente', 'Impede escrever texto', 'Substitui todas as cópias'], answer: 0, explain: 'O modelo conserva estrutura e formatação, mas cada utilização gera um documento independente.' }
        },
        {
          id: 'word-32', title: 'Controlos de conteúdo e listas', level: 'Intermédio', duration: '22 min',
          intro: 'Crie campos claros para escrever texto, escolher uma opção, selecionar uma data ou marcar uma caixa.',
          objectives: ['Ativar o separador Programador', 'Inserir e configurar controlos de conteúdo'],
          steps: ['Em <strong>Ficheiro → Opções → Personalizar Friso</strong>, ative <strong>Programador</strong>.', 'No local desejado, insira um controlo de Texto, Seletor de Data, Caixa de Verificação ou Lista Pendente.', 'Abra <strong>Propriedades</strong>, escreva um título claro e adicione opções quando usar uma lista.'],
          tip: 'Use um texto de exemplo que diga exatamente o que a pessoa deve introduzir.',
          practice: { intro: 'Crie uma ficha com nome, departamento, data e estado do pedido.', tasks: ['Separador Programador ativado', 'Quatro tipos de controlo inseridos', 'Títulos e opções configurados'] },
          quiz: { question: 'Onde se adicionam as opções de uma lista pendente?', options: ['Nas Propriedades do controlo', 'No rodapé', 'No corretor ortográfico'], answer: 0, explain: 'As Propriedades permitem definir o título, as opções e o comportamento do controlo.' }
        },
        {
          id: 'word-33', title: 'Proteger e preencher um formulário', level: 'Intermédio', duration: '22 min',
          intro: 'Permita que as pessoas preencham apenas os campos certos, sem alterar títulos, instruções ou disposição.',
          objectives: ['Restringir a edição de um formulário', 'Testar a experiência de preenchimento'],
          steps: ['Termine todos os campos e guarde uma cópia editável antes de proteger.', 'Abra <strong>Rever → Restringir Edição</strong>, permita apenas Preenchimento de formulários e inicie a proteção.', 'Teste todos os campos, a tecla Tab e a impressão; depois guarde uma cópia pronta a distribuir.'],
          tip: 'Se usar palavra-passe, guarde-a num local seguro; sem ela pode perder a capacidade de editar a estrutura.',
          practice: { intro: 'Proteja a ficha criada e peça a outra pessoa para a preencher.', tasks: ['Cópia editável guardada', 'Edição limitada aos campos', 'Percurso com Tab testado'] },
          quiz: { question: 'O que deve fazer antes de ativar a proteção?', options: ['Guardar uma cópia editável', 'Apagar todos os campos', 'Converter para imagem'], answer: 0, explain: 'A cópia editável permite corrigir a estrutura mesmo se a versão distribuída estiver protegida.' }
        }
      ]
    },
    {
      number: 'Módulo 12', title: 'Composição visual avançada',
      lessons: [
        {
          id: 'word-34', title: 'Capas e identidade visual', level: 'Intermédio', duration: '24 min',
          intro: 'Crie uma primeira página profissional que identifica o documento sem o transformar num cartaz confuso.',
          objectives: ['Construir uma capa equilibrada', 'Aplicar cores e tipos de letra consistentes'],
          steps: ['Defina título, subtítulo, autor, organização, data e versão; retire elementos que não ajudam a identificar o documento.', 'Use <strong>Inserir → Página de Rosto</strong> ou construa uma capa com uma imagem e estilos do tema.', 'Aplique um Tema em <strong>Estrutura</strong>, verifique contraste e insira uma quebra de página antes do conteúdo.'],
          tip: 'Use no máximo duas famílias tipográficas e dê mais destaque ao título do que ao logótipo.',
          practice: { intro: 'Crie uma capa para um relatório trimestral e compare-a com a primeira página do conteúdo.', tasks: ['Informação essencial incluída', 'Tema e contraste coerentes', 'Conteúdo começa numa nova página'] },
          quiz: { question: 'Qual elemento deve ter maior destaque numa capa?', options: ['O título do documento', 'O número da página', 'Todas as informações por igual'], answer: 0, explain: 'A hierarquia visual deve permitir identificar imediatamente o documento.' }
        },
        {
          id: 'word-35', title: 'Caixas de texto, formas e SmartArt', level: 'Intermédio', duration: '25 min',
          intro: 'Apresente processos e destaques visualmente sem perder alinhamento, legibilidade ou acessibilidade.',
          objectives: ['Posicionar objetos com segurança', 'Escolher entre forma, caixa de texto e SmartArt'],
          steps: ['Insira uma <strong>Caixa de Texto</strong> para uma chamada ou uma Forma para um elemento simples.', 'Para um processo, use <strong>Inserir → SmartArt</strong> e escolha apenas o número de etapas necessário.', 'Abra Opções de Esquema, escolha a moldagem de texto e use <strong>Alinhar</strong> para organizar os objetos.'],
          tip: 'Para documentos longos, Em Linha com o Texto é a opção de posicionamento mais previsível.',
          practice: { intro: 'Crie uma página com uma chamada e um processo de quatro passos.', tasks: ['Caixa de texto legível criada', 'SmartArt com quatro passos', 'Objetos alinhados e texto alternativo revisto'] },
          quiz: { question: 'Qual opção costuma ser mais estável num documento longo?', options: ['Em Linha com o Texto', 'À Frente do Texto em todos os casos', 'Sem moldagem'], answer: 0, explain: 'O objeto em linha acompanha o parágrafo e reduz deslocações inesperadas.' }
        },
        {
          id: 'word-36', title: 'Secções com orientações diferentes', level: 'Avançado', duration: '26 min',
          intro: 'Coloque uma tabela larga em orientação horizontal sem rodar o resto do documento.',
          objectives: ['Criar quebras de secção', 'Alterar a orientação apenas numa parte'],
          steps: ['Coloque o cursor antes da página larga e escolha <strong>Esquema → Quebras → Página Seguinte</strong> na área de Quebras de Secção.', 'Repita depois da página larga para a isolar numa secção própria.', 'Com o cursor nessa secção, escolha <strong>Orientação → Horizontal</strong> e confirme cabeçalhos, rodapés e numeração.'],
          tip: 'Ative o símbolo ¶ para ver claramente onde começam e terminam as secções.',
          practice: { intro: 'Insira uma tabela horizontal entre duas páginas verticais.', tasks: ['Duas quebras de secção inseridas', 'Só a página da tabela está horizontal', 'Cabeçalhos e numeração confirmados'] },
          quiz: { question: 'Porque precisa de duas quebras de secção?', options: ['Para isolar a parte com orientação diferente', 'Para duplicar a tabela', 'Para corrigir a ortografia'], answer: 0, explain: 'Uma quebra inicia a secção especial e a outra permite regressar à configuração anterior.' }
        }
      ]
    },
    {
      number: 'Módulo 13', title: 'Produção em série',
      lessons: [
        {
          id: 'word-37', title: 'Etiquetas e envelopes', level: 'Intermédio', duration: '24 min',
          intro: 'Prepare moradas para impressão sem escrever ou copiar cada destinatário manualmente.',
          objectives: ['Configurar etiquetas ou envelopes', 'Ligar uma lista de destinatários'],
          steps: ['Em <strong>Correspondências</strong>, escolha Iniciar Impressão em Série e selecione Etiquetas ou Envelopes.', 'Escolha o fabricante e o código exato da folha, depois ligue uma lista com Nome, Morada, Código Postal e Localidade.', 'Insira os campos, atualize todas as etiquetas e use <strong>Pré-visualizar Resultados</strong> antes de imprimir numa folha de teste.'],
          tip: 'Imprima primeiro em papel normal e sobreponha-o à folha de etiquetas contra a luz.',
          practice: { intro: 'Crie uma folha de etiquetas para oito contactos fictícios.', tasks: ['Formato físico correto selecionado', 'Campos de morada inseridos', 'Pré-visualização e folha de teste verificadas'] },
          quiz: { question: 'Porque deve fazer uma impressão de teste?', options: ['Para confirmar alinhamento antes de gastar etiquetas', 'Para apagar a lista', 'Para aumentar as margens automaticamente'], answer: 0, explain: 'Uma diferença pequena no formato pode deslocar todas as etiquetas.' }
        },
        {
          id: 'word-38', title: 'Regras numa impressão em série', level: 'Avançado', duration: '26 min',
          intro: 'Mostre texto diferente conforme os dados, como uma saudação personalizada ou uma mensagem para valores em atraso.',
          objectives: ['Inserir uma regra Se... Então... Senão', 'Testar diferentes registos antes de concluir'],
          steps: ['Abra o documento de impressão em série e coloque o cursor onde a frase deve mudar.', 'Escolha <strong>Correspondências → Regras → Se... Então... Senão</strong> e defina o campo, a comparação e os dois textos.', 'Percorra registos que cumpram e não cumpram a condição; conclua para um novo documento e reveja o resultado.'],
          tip: 'Use condições simples e mantenha uma frase completa nos dois resultados.',
          practice: { intro: 'Crie uma carta que mostre uma mensagem especial quando Estado for Pendente.', tasks: ['Regra condicional criada', 'Dois tipos de registo testados', 'Documento combinado revisto'] },
          quiz: { question: 'Quando deve testar a regra?', options: ['Com registos dos dois resultados possíveis', 'Apenas com o primeiro registo', 'Só depois de imprimir'], answer: 0, explain: 'Testar ambos os casos confirma que a condição e os textos estão corretos.' }
        },
        {
          id: 'word-39', title: 'Criar um diretório ou catálogo', level: 'Avançado', duration: '28 min',
          intro: 'Transforme uma lista de pessoas, produtos ou eventos num documento contínuo e organizado.',
          objectives: ['Usar o tipo Diretório na impressão em série', 'Formatar blocos repetidos de informação'],
          steps: ['Escolha <strong>Correspondências → Iniciar Impressão em Série → Diretório</strong> e ligue a origem de dados.', 'Crie um bloco com campos como Nome, Função, Telefone e Email; formate apenas esse bloco.', 'Conclua a impressão em série para um novo documento, adicione título e cabeçalho, e reveja quebras entre registos.'],
          tip: 'Não insira uma quebra de página dentro do bloco se quiser vários registos por página.',
          practice: { intro: 'Gere um diretório de equipa com dez registos.', tasks: ['Bloco repetido criado', 'Diretório combinado num novo documento', 'Quebras e campos vazios corrigidos'] },
          quiz: { question: 'Para que serve o tipo Diretório?', options: ['Para reunir muitos registos num documento contínuo', 'Para criar apenas um envelope', 'Para bloquear comentários'], answer: 0, explain: 'O Diretório repete o mesmo bloco para cada registo sem começar necessariamente uma nova página.' }
        }
      ]
    },
    {
      number: 'Módulo 14', title: 'Documentos longos',
      lessons: [
        {
          id: 'word-40', title: 'Organizar com o Painel de Navegação', level: 'Intermédio', duration: '22 min',
          intro: 'Veja a estrutura completa de um documento e reorganize capítulos sem cortar e colar grandes blocos de texto.',
          objectives: ['Usar estilos de título como estrutura', 'Mover secções no Painel de Navegação'],
          steps: ['Aplique <strong>Título 1</strong>, <strong>Título 2</strong> e <strong>Título 3</strong> conforme a hierarquia real.', 'Ative <strong>Ver → Painel de Navegação</strong> e abra o separador Títulos.', 'Arraste um título para outra posição e confirme que o respetivo conteúdo se moveu com ele.'],
          tip: 'Não use apenas tamanho e negrito para simular títulos; o Word precisa dos estilos para compreender a estrutura.',
          practice: { intro: 'Estruture e reorganize um documento com pelo menos seis títulos.', tasks: ['Hierarquia de estilos aplicada', 'Painel de Navegação aberto', 'Uma secção movida e conferida'] },
          quiz: { question: 'O que faz aparecer um título no Painel de Navegação?', options: ['Um estilo de Título', 'Apenas texto em maiúsculas', 'Uma cor azul'], answer: 0, explain: 'Os estilos de Título comunicam a estrutura do documento ao Word e às tecnologias de apoio.' }
        },
        {
          id: 'word-41', title: 'Índice de figuras e tabelas', level: 'Avançado', duration: '25 min',
          intro: 'Num relatório longo, liste imagens e tabelas com página correta e atualização automática.',
          objectives: ['Adicionar legendas automáticas', 'Criar e atualizar um índice de ilustrações'],
          steps: ['Selecione cada imagem ou tabela e use <strong>Referências → Inserir Legenda</strong>; escolha o rótulo correto.', 'Coloque o cursor na página do índice e escolha <strong>Referências → Inserir Índice de Ilustrações</strong>.', 'Depois de alterar o documento, clique no índice e escolha <strong>Atualizar Campo → Atualizar o índice inteiro</strong>.'],
          tip: 'Não escreva o número da figura manualmente; a legenda automática mantém a sequência correta.',
          practice: { intro: 'Crie legendas para duas figuras e duas tabelas e gere os respetivos índices.', tasks: ['Quatro legendas automáticas inseridas', 'Índices gerados', 'Campos atualizados depois de mover um elemento'] },
          quiz: { question: 'Porque deve usar Inserir Legenda?', options: ['Para numerar e atualizar referências automaticamente', 'Para comprimir imagens', 'Para proteger o documento'], answer: 0, explain: 'As legendas criam campos que alimentam índices e referências cruzadas.' }
        },
        {
          id: 'word-42', title: 'Propriedades, versões e estrutura', level: 'Avançado', duration: '24 min',
          intro: 'Prepare um documento longo para trabalho em equipa, pesquisa e entrega controlada.',
          objectives: ['Preencher propriedades do documento', 'Aplicar uma estratégia segura de versões'],
          steps: ['Abra <strong>Ficheiro → Informações → Propriedades</strong> e preencha Título, Autor, Assunto e Palavras-chave.', 'Defina uma convenção como Relatorio_2026-10-02_v03.docx e guarde versões importantes numa pasta controlada ou no OneDrive.', 'Use uma estrutura única com estilos, secções e ligações; antes de entregar, inspecione o documento e confirme a versão no rodapé.'],
          tip: 'Evite vários ficheiros chamados final, final2 e final_mesmo; data e número de versão reduzem enganos.',
          practice: { intro: 'Organize três versões de um relatório e identifique claramente a versão aprovada.', tasks: ['Propriedades preenchidas', 'Nomes de versão consistentes', 'Versão aprovada identificada e inspecionada'] },
          quiz: { question: 'Qual nome de ficheiro é mais claro?', options: ['Relatorio_final_final2.docx', 'Relatorio_2026-10-02_v03.docx', 'Documento1.docx'], answer: 1, explain: 'A data e o número de versão permitem ordenar e identificar o estado do ficheiro.' }
        }
      ]
    },
    {
      number: 'Módulo 15', title: 'Projetos por objetivo',
      lessons: [
        {
          id: 'word-43', title: 'Projeto: criar um CV e carta de apresentação', level: 'Projeto final', duration: '50 min',
          intro: 'Crie dois documentos coerentes que destacam experiência, competências e motivação com leitura rápida.',
          objectives: ['Produzir um CV claro e adaptável', 'Escrever uma carta ligada a uma oportunidade concreta'],
          steps: ['No CV, organize Contacto, Perfil, Experiência, Formação e Competências com estilos e datas alinhadas.', 'Na carta, identifique a função, relacione dois exemplos concretos com as necessidades e termine com um pedido de conversa.', 'Reveja ortografia, consistência e acessibilidade; exporte ambos para PDF e teste hiperligações e seleção de texto.'],
          tip: 'Evite barras de nível vagas e elementos gráficos que dificultem a leitura automática; prefira exemplos concretos.',
          practice: { intro: 'Entregue um CV de uma ou duas páginas e uma carta de uma página.', tasks: ['Conteúdo adaptado ao objetivo', 'Hierarquia e datas consistentes', 'DOCX e PDF verificados'] },
          quiz: { question: 'O que torna uma carta mais convincente?', options: ['Exemplos concretos ligados à função', 'Repetir todo o CV', 'Usar o maior tipo de letra'], answer: 0, explain: 'Exemplos relevantes mostram como a experiência pode responder às necessidades da função.' }
        },
        {
          id: 'word-44', title: 'Projeto: criar um manual ou relatório profissional', level: 'Projeto final', duration: '60 min',
          intro: 'Construa um documento longo, navegável e pronto para atualização, revisão e impressão.',
          objectives: ['Integrar estilos, secções, referências e elementos visuais', 'Executar uma verificação de entrega completa'],
          steps: ['Planeie capa, controlo de versão, índice, capítulos e anexos; aplique estilos desde o início.', 'Adicione cabeçalhos, numeração, tabelas, imagens com legendas, referências cruzadas e quebras de secção quando necessárias.', 'Atualize todos os campos, use Editor e Verificador de Acessibilidade, aceite apenas alterações aprovadas e verifique o PDF final.'],
          tip: 'Crie primeiro duas páginas-modelo e valide-as antes de formatar dezenas de páginas.',
          practice: { intro: 'Produza um manual ou relatório de pelo menos seis páginas.', tasks: ['Estrutura e navegação automáticas', 'Elementos visuais legendados e referenciados', 'Revisão e PDF final concluídos'] },
          quiz: { question: 'Porque deve usar estilos desde o início?', options: ['Para controlar estrutura e formatação globalmente', 'Para impedir imagens', 'Para aumentar o número de páginas'], answer: 0, explain: 'Os estilos permitem navegar, gerar índices e atualizar a aparência de forma consistente.' }
        },
        {
          id: 'word-45', title: 'Projeto: criar um boletim informativo', level: 'Projeto final', duration: '55 min',
          intro: 'Combine texto breve, imagens e chamadas numa publicação visual que continua legível no ecrã e em papel.',
          objectives: ['Criar uma grelha visual coerente', 'Equilibrar hierarquia, imagens e texto'],
          steps: ['Defina público, objetivo e três notícias; escolha tamanho de página, margens, tema e uma grelha de uma ou duas colunas.', 'Construa cabeçalho, destaque principal e secções com estilos; insira imagens comprimidas, legendas e texto alternativo.', 'Verifique alinhamentos, contraste, quebras e hiperligações; exporte para PDF e teste em 100% de zoom e numa página impressa.'],
          tip: 'Uma boa página tem um ponto de entrada principal e espaço em branco; não preencha todos os cantos.',
          practice: { intro: 'Crie um boletim de duas páginas para uma associação ou equipa.', tasks: ['Hierarquia e grelha consistentes', 'Imagens com legendas e texto alternativo', 'PDF e impressão de teste verificados'] },
          quiz: { question: 'O que melhora mais a leitura de um boletim?', options: ['Hierarquia clara e espaço em branco', 'Muitos tipos de letra', 'Texto muito pequeno'], answer: 0, explain: 'Hierarquia e espaço ajudam o leitor a perceber por onde começar e como percorrer a página.' }
        }
      ]
    }
  ]
};
