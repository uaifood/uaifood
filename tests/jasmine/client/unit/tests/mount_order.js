describe('mountOrder', () => {
  'use strict';
  
  let items = [
  {
    name: "Barbara Sanches",
    what: "Fitness",
    cost: 12.99
  },
  {
    name: "Agda",
    what: "Integral",
    cost: 8.99
  },
  {
    name: "Megale",
    what: "Tropical 400g",
    cost: 8.99
  },
  {
    name: "Marcos Brizeno",
    what: "Baião 400g",
    cost: 8.99
  },
  {
    name: "Adriano Domeniconi",
    what: "Baião de Dois",
    cost: 8.99
  },
  {
    name: "João",
    what: "Feijão Tropeiro",
    cost: 8.99
  },
  {
    name: "leguimas",
    what: "Fitness",
    cost: 12.99
  },
  {
    name: "Patrick Prado",
    what: "Baiao de Dois 400g",
    cost: 8.99
  },
  {
    name: "Tiago V",
    what: "Galinhada 400grs",
    cost: 8.99
  },
  {
    name: "Michel",
    what: "Oriental",
    cost: 8.99
  },
  {
    name: "Gustavo Gama",
    what: "Salada Premium",
    cost: 9.99
  },
  {
    name: "Serena",
    what: "Oriental",
    cost: 8.99
  },
  {
    name: "Ganine",
    what: "Fitness",
    cost: 12.99
  },
  {
    name: "Henrique",
    what: "Feijão Tropeiro",
    cost: 8.99
  },
  {
    name: "Grazi",
    what: "Baião de Dois",
    cost: 8.99
  },
  {
    name: "Lucas Avila",
    what: "Feijão Tropeiro 400g",
    cost: 8.99
  },
  {
    name: "Dawnson Israel",
    what: "Feijão Tropeiro 400g",
    cost: 8.99
  },
  {
    name: "Adriano Lisboa",
    what: "Nhoque (molho Bolonhesa)",
    cost: 8.99
  },
  {
    name: "Gregorio",
    what: "Mexidão 400g",
    cost: 8.99
  }];
  

  it('should merge the equal items to make the order more easy', () => {
    let result = [
      {
        name: "Fitness",
        amount: 3,
        who: ["Barbara Sanches", "leguimas", "Ganine"],
        titles: ["Fitness", "Fitness", "Fitness"]
      },
      {
        name: "Integral",
        amount: 1,
        who: ["Agda"],
        titles: ["Integral"]
      },
      {
        name: "Tropical 400g",
        amount: 1,
        who: ["Megale"],
        titles: ["Tropical 400g"]
      },
      {
        name: "Baião 400g",
        amount: 1,
        who: ["Marcos Brizeno"],
        titles: ["Baião 400g"]
      },
      {
        name: "Baião de Dois",
        amount: 3,
        who: ["Adriano Domeniconi", "Patrick Prado", "Grazi"],
        titles: ["Baião de Dois", "Baiao de Dois 400g", "Baião de Dois"]
      },
      {
        name: "Feijão Tropeiro",
        amount: 4,
        who: ["João", "Henrique", "Lucas Avila", "Dawnson Israel"],
        titles: ["Feijão Tropeiro", "Feijão Tropeiro", "Feijão Tropeiro 400g", "Feijão Tropeiro 400g"]
      },
      {
        name: "Galinhada 400grs",
        amount: 1,
        who: ["Tiago V"],
        titles: ["Galinhada 400grs"]
      },
      {
        name: "Oriental",
        amount: 2,
        who: ["Michel", "Serena"],
        titles: ["Oriental", "Oriental"]
      },
      {
        name: "Salada Premium",
        amount: 1,
        who: ["Gustavo Gama"],
        titles: ["Salada Premium"]
      },
      {
        name: "Nhoque (molho Bolonhesa)",
        amount: 1,
        who: ["Adriano Lisboa"],
        titles: ["Nhoque (molho Bolonhesa)"]
      },
      {
        name: "Mexidão 400g",
        amount: 1,
        who: ["Gregorio"],
        titles: ["Mexidão 400g"]
      }      
    ];
    expect(mountOrder(items)).toEqual(result);
  })

});
