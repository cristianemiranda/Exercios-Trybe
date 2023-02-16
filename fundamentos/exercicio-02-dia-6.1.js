const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  customer1.lastName = 'Faria';
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  // cria a variável que salva o nome da chave
  let newKey = 'lastName';
  
  // cria a variável que salva o valor da chave
  const lastName = 'Ferreira';
  
  // cria a nova chave com o valor da variável lastName
  customer[newKey] = lastName;

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor;
  };

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor;
  };
  
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
  };
  
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);
  
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  
  adicionaPropriedade(customer, newKey, fullName);
  console.log(customer);