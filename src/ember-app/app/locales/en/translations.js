import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProgramma_6ДолжностьLForm from './forms/i-i-s-programma-6-должность-l';
import IISProgramma_6ОтчетОСервереLForm from './forms/i-i-s-programma-6-отчет-о-сервере-l';
import IISProgramma_6РасположениеLForm from './forms/i-i-s-programma-6-расположение-l';
import IISProgramma_6СенсорыLForm from './forms/i-i-s-programma-6-сенсоры-l';
import IISProgramma_6СервернаяLForm from './forms/i-i-s-programma-6-серверная-l';
import IISProgramma_6СотрудникLForm from './forms/i-i-s-programma-6-сотрудник-l';
import IISProgramma_6ДолжностьEForm from './forms/i-i-s-programma-6-должность-e';
import IISProgramma_6ОтчетОСервереEForm from './forms/i-i-s-programma-6-отчет-о-сервере-e';
import IISProgramma_6РасположениеEForm from './forms/i-i-s-programma-6-расположение-e';
import IISProgramma_6СенсорыEForm from './forms/i-i-s-programma-6-сенсоры-e';
import IISProgramma_6СервернаяEForm from './forms/i-i-s-programma-6-серверная-e';
import IISProgramma_6СотрудникEForm from './forms/i-i-s-programma-6-сотрудник-e';
import IISProgramma_6ДолжностьModel from './models/i-i-s-programma-6-должность';
import IISProgramma_6КонтроллерModel from './models/i-i-s-programma-6-контроллер';
import IISProgramma_6ОтчетОСервереModel from './models/i-i-s-programma-6-отчет-о-сервере';
import IISProgramma_6РасположениеModel from './models/i-i-s-programma-6-расположение';
import IISProgramma_6СенсорыModel from './models/i-i-s-programma-6-сенсоры';
import IISProgramma_6СервернаяModel from './models/i-i-s-programma-6-серверная';
import IISProgramma_6СотрудникModel from './models/i-i-s-programma-6-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-programma-6-должность': IISProgramma_6ДолжностьModel,
    'i-i-s-programma-6-контроллер': IISProgramma_6КонтроллерModel,
    'i-i-s-programma-6-отчет-о-сервере': IISProgramma_6ОтчетОСервереModel,
    'i-i-s-programma-6-расположение': IISProgramma_6РасположениеModel,
    'i-i-s-programma-6-сенсоры': IISProgramma_6СенсорыModel,
    'i-i-s-programma-6-серверная': IISProgramma_6СервернаяModel,
    'i-i-s-programma-6-сотрудник': IISProgramma_6СотрудникModel
  },

  'application-name': 'Programma_6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Programma_6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Programma_6',
          title: 'Programma_6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сервер: {
            caption: 'Сервер',
            title: 'Сервер',
            'i-i-s-programma-6-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-programma-6-серверная-l': {
              caption: 'Серверная',
              title: ''
            },
            'i-i-s-programma-6-расположение-l': {
              caption: 'Расположение',
              title: ''
            }
          },
          контроллер: {
            caption: 'Контроллер',
            title: 'Контроллер',
            'i-i-s-programma-6-сенсоры-l': {
              caption: 'Сенсоры',
              title: ''
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-programma-6-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-programma-6-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-programma-6-должность-l': IISProgramma_6ДолжностьLForm,
    'i-i-s-programma-6-отчет-о-сервере-l': IISProgramma_6ОтчетОСервереLForm,
    'i-i-s-programma-6-расположение-l': IISProgramma_6РасположениеLForm,
    'i-i-s-programma-6-сенсоры-l': IISProgramma_6СенсорыLForm,
    'i-i-s-programma-6-серверная-l': IISProgramma_6СервернаяLForm,
    'i-i-s-programma-6-сотрудник-l': IISProgramma_6СотрудникLForm,
    'i-i-s-programma-6-должность-e': IISProgramma_6ДолжностьEForm,
    'i-i-s-programma-6-отчет-о-сервере-e': IISProgramma_6ОтчетОСервереEForm,
    'i-i-s-programma-6-расположение-e': IISProgramma_6РасположениеEForm,
    'i-i-s-programma-6-сенсоры-e': IISProgramma_6СенсорыEForm,
    'i-i-s-programma-6-серверная-e': IISProgramma_6СервернаяEForm,
    'i-i-s-programma-6-сотрудник-e': IISProgramma_6СотрудникEForm
  },

});

export default translations;
