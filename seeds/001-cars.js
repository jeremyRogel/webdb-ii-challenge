exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').del()
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {id: 1, VIN: '123456',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'},
          {id: 2, VIN: '123457',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'},
          {id: 3, VIN: '123458',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'},
          {id: 4, VIN: '123459',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'},
          {id: 5, VIN: '123453',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'},
          {id: 6, VIN: '123452',make:'bmw',model:'328xi',mileage:90000,transmission:'automatic',title:'clean'}
        ]);
      });
  };