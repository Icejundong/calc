angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '养老费',
    value: '8%'
  }, {
    id: 1,
    name: '医疗费率',
    value: '5%'
  }, {
    id: 2,
    name: '失业费率',
    value :'0.5%'
  }, {
    id: 3,
    name: '工伤费率',
    value: '0%'
  }, {
    id: 4,
    name: '生育费率',
    value: '0%'
  }, {
    id: 5,
    name: '公积金费率',
    value: '8%'
  }, {
    id: 6,
    name: '社保统筹',
    value: '20'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
