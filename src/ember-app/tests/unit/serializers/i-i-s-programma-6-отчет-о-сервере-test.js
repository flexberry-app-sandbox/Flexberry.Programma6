import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-6-отчет-о-сервере', 'Unit | Serializer | i-i-s-programma-6-отчет-о-сервере', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-programma-6-отчет-о-сервере',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-programma-6-режим-сервера',

    'model:i-i-s-programma-6-должность',
    'model:i-i-s-programma-6-контроллер',
    'model:i-i-s-programma-6-отчет-о-сервере',
    'model:i-i-s-programma-6-расположение',
    'model:i-i-s-programma-6-сенсоры',
    'model:i-i-s-programma-6-серверная',
    'model:i-i-s-programma-6-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
