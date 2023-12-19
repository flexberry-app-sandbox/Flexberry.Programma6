import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-programma-6-должность-l');
  this.route('i-i-s-programma-6-должность-e',
  { path: 'i-i-s-programma-6-должность-e/:id' });
  this.route('i-i-s-programma-6-должность-e.new',
  { path: 'i-i-s-programma-6-должность-e/new' });
  this.route('i-i-s-programma-6-отчет-о-сервере-l');
  this.route('i-i-s-programma-6-отчет-о-сервере-e',
  { path: 'i-i-s-programma-6-отчет-о-сервере-e/:id' });
  this.route('i-i-s-programma-6-отчет-о-сервере-e.new',
  { path: 'i-i-s-programma-6-отчет-о-сервере-e/new' });
  this.route('i-i-s-programma-6-расположение-l');
  this.route('i-i-s-programma-6-расположение-e',
  { path: 'i-i-s-programma-6-расположение-e/:id' });
  this.route('i-i-s-programma-6-расположение-e.new',
  { path: 'i-i-s-programma-6-расположение-e/new' });
  this.route('i-i-s-programma-6-сенсоры-l');
  this.route('i-i-s-programma-6-сенсоры-e',
  { path: 'i-i-s-programma-6-сенсоры-e/:id' });
  this.route('i-i-s-programma-6-сенсоры-e.new',
  { path: 'i-i-s-programma-6-сенсоры-e/new' });
  this.route('i-i-s-programma-6-серверная-l');
  this.route('i-i-s-programma-6-серверная-e',
  { path: 'i-i-s-programma-6-серверная-e/:id' });
  this.route('i-i-s-programma-6-серверная-e.new',
  { path: 'i-i-s-programma-6-серверная-e/new' });
  this.route('i-i-s-programma-6-сотрудник-l');
  this.route('i-i-s-programma-6-сотрудник-e',
  { path: 'i-i-s-programma-6-сотрудник-e/:id' });
  this.route('i-i-s-programma-6-сотрудник-e.new',
  { path: 'i-i-s-programma-6-сотрудник-e/new' });
});

export default Router;
