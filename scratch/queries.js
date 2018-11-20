'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let id = 1002;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where('notes.id', `${id}`)
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let updateID = 1007;
// let updateObj = {id: 1007, title: 'foo', content: 'bar'};
// let updateObj = {id: '1007', title: 'foo', content: 'bar'};
// knex
//   // .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where('notes.id', updateObj.id)
//   // .update(updateObj)
//   .update({
//     title: `${updateObj.title}`,
//     content: `${updateObj.content}`
//   })
//   .returning(['notes.id', 'title', 'content'])
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });


// let newNote = {title: 'test', content: 'america'};
// knex
//   .from('notes')
//   .insert(newNote)
//   .returning(['notes.id', 'title', 'content'])
//   .then (results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// let deleteId = 1011;
// knex
//   .from('notes')
//   .where('notes.id', `${deleteId}`)
//   .del()
//   .then(console.log);

// let id = 1011;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where('notes.id', `${id}`)
//   .then(results => {
//     console.log(JSON.stringify(results[0], null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });


