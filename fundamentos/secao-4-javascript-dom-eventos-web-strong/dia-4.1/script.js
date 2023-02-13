const elementoH1 = document.createElement('h1');
  elementoH1.innerText = 'TrybeTrip - Agência de Viagens';
  document.body.appendChild(elementoH1);

  const main1 = document.createElement('main');
    main1.className = 'main-content';
    document.body.appendChild(main1);

  const elementoDoCentro = document.createElement('section');
  elementoDoCentro.className = 'center-content';
  document.appendChild(elementoDoCentro);
  

  const paragrafo1 = document.createElement('p');
  paragrafo1.innerHTML = 'Trybe show';
  elementSectionCenter.appendChild(paragrafo1);

  const elemento1 = document.createElement('section');
  elemento1.className = 'left-content';
  elementMain.appendChild(elemento1);

  const elemento2 = document.createElement('section');
  elemento2.className = 'right-content';
   elementMain.appendChild(elemento2);

  const elementoComImagem = document.createElement('img');
  elementoComImagem.className = 'small-image';
  elementoComImagem.src = 'https://picsum.photos/200';
  

  const elemento3 = document.createElement('ul');
  elementSectionRight.appendChild(elemento3);
  const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez']
  for (let num in arrayNumbers) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[num];
  };

  for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    elementMain.appendChild(elementH3);
  };

const title = document.querySelector('h1');
      title.className = 'title';

