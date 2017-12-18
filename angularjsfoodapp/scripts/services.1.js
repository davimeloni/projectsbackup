
//Services for itens
angular.module('foodapp').service('itemService', itemService);
function itemService($http) {

    //get all itens
    this.getItens = function () {
        return $http.get('/item').then(complete).catch(failed);
    };

    //create item
    this.createItem = function (item) {
        return $http.post('/item', item).then(complete).catch(failed);
    };


    this.updateItem = function (item) {
        return $http.put('/item/' + item._id, item).then(complete).catch(failed);
    };

    this.removeItem = function (itemId) {
        return $http.delete('/item/' + itemId).then(complete).catch(failed);
    };

};

//Services for categories
angular.module('foodapp').service('categoryService', categoryService);
function categoryService($http) {

    var categories = { content: null };
    //get all categories
    this.getCategories = function () {
        return $http.get('category').then(complete).catch(failed);
    };
};

//Services for account
angular.module('foodapp').service('accountService', accountService);
function accountService($http) {
    this.account = {};

    this.createAccount = function (account) {
        return $http.post('/account', account).then(complete).catch(failed);
    };

    this.getAllAccounts = function() {
        return $http.get('/account').then(complete).catch(failed);
    }

    this.getAccountById = function(accountId) {
        return $http.get('/account/' + accountId).then(complete).catch(failed);
    }

    this.getLastAccount = function () {
        return $http.get('/lastaccount').then(complete).catch(failed);
    };

    this.addItemAccount = function (account) {
        return $http.put('/account/' + account._id + '/additem', account).then(complete).catch(failed);
    };

    this.updateItensAccount = function (orderData) {
        return $http.put('/account/' + orderData.accountId + '/updateitens', orderData).then(complete).catch(failed);
    };

    //this.removeItemAccount = function (removeData) {
      //  return $http.delete('/account/' + removeData.accountId + '/item/' + removeData.itemId).then(complete).catch(failed);
    //}

    this.removeItemAccount = function (removeData) {
        return $http.put('/account/' + removeData.accountId + '/deleteitem/' + removeData.itemId, removeData).then(complete).catch(failed);
    }

    this.getAccountsKitchen = function () {
        return $http.get('/accountskitchen').then(complete).catch(failed);
    }

    this.getItensAccountsByStatus = function () {
        return $http.get('/accountstatus').then(complete).catch(failed);
    }

    this.updateAccount = function(account) {
        return $http.put('/account/' + account._id, account).then(complete).catch(failed);
    }


    this.setAccount = function (account) {
        this.account = account;
    }

    this.getAccount = function () {
        console.log("cheguei no getAccount");
        console.log(this.account);
        return this.account;
    }
}

app.factory('broadcastService', function($rootScope) {
    return {
        send: function(msg, data) {
            $rootScope.$broadcast(msg, data);
        }
    }
});

app.factory('searchService', function($scope, broadcastService) {
    return {
        search: function(searchCriteria) {
            // Do some kind of searching
            // then broadcast the results
            var results = {};
            broadcastService.send('search', results);
        }
    }
});

//user
angular.module('foodapp').service('userService', userService);
function userService($http) {
    this.getUserByEmail = function (email) {
        return $http.get('/user/' + email).then(complete).catch(failed);
    }
}



//http functions
function complete(response) {
    return response;
}

function failed(error) {
    console.log(error.statusText);
}
