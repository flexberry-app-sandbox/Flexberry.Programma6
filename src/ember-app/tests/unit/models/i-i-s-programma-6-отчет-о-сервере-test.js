import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-6-отчет-о-сервере', 'Unit | Model | i-i-s-programma-6-отчет-о-сервере', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
