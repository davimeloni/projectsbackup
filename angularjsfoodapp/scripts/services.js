
//Services for itens
angular.module('foodapp');

app.service('itemService', itemService);
function itemService($http) {

    //get all itens
    this.getItens = function () {
        return $http.get('https://foodapptestxyz.herokuapp.com/item').then(complete).catch(failed);
    };

    //create item
    this.createItem = function (item) {
        return $http.post('https://foodapptestxyz.herokuapp.com/item', item).then(complete).catch(failed);
    };


    this.updateItem = function (item) {
        return $http.put('https://foodapptestxyz.herokuapp.com/item/' + item._id, item).then(complete).catch(failed);
    };

    this.removeItem = function (itemId) {
        return $http.delete('https://foodapptestxyz.herokuapp.com/item/' + itemId).then(complete).catch(failed);
    };

};

//Services for categories
app.service('categoryService', categoryService);
function categoryService($http) {

    var categories = { content: null };
    //get all categories
    this.getCategories = function () {
        return $http.get('https://foodapptestxyz.herokuapp.com/category').then(complete).catch(failed);
    };
};

//Services for account
app.service('accountService', accountService);
function accountService($http) {
    this.account = {};

    this.createAccount = function (account) {
        return $http.post('https://foodapptestxyz.herokuapp.com/account', account).then(complete).catch(failed);
    };

    this.getAllAccounts = function() {
        return $http.get('https://foodapptestxyz.herokuapp.com/account').then(complete).catch(failed);
    }

    this.getAccountById = function(accountId) {
        return $http.get('https://foodapptestxyz.herokuapp.com/account/' + accountId).then(complete).catch(failed);
    }

    this.getLastAccount = function () {
        return $http.get('https://foodapptestxyz.herokuapp.com/lastaccount').then(complete).catch(failed);
    };

    this.addItemAccount = function (account) {
        return $http.put('https://foodapptestxyz.herokuapp.com/account/' + account._id + '/additem', account).then(complete).catch(failed);
    };

    this.updateItensAccount = function (orderData) {
        return $http.put('https://foodapptestxyz.herokuapp.com/account/' + orderData.accountId + '/updateitens', orderData).then(complete).catch(failed);
    };

    //this.removeItemAccount = function (removeData) {
      //  return $http.delete('/account/' + removeData.accountId + '/item/' + removeData.itemId).then(complete).catch(failed);
    //}

    this.removeItemAccount = function (removeData) {
        return $http.put('https://foodapptestxyz.herokuapp.com/account/' + removeData.accountId + '/deleteitem/' + removeData.itemId, removeData).then(complete).catch(failed);
    }

    this.getAccountsKitchen = function () {
        return $http.get('https://foodapptestxyz.herokuapp.com/accountskitchen').then(complete).catch(failed);
    }

    this.getItensAccountsByStatus = function () {
        return $http.get('https://foodapptestxyz.herokuapp.com/accountstatus').then(complete).catch(failed);
    }

    this.updateAccount = function(account) {
        return $http.put('https://foodapptestxyz.herokuapp.com/account/' + account._id, account).then(complete).catch(failed);
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
            console.log(data);
            $rootScope.$broadcast(msg, data);
        }
    }
});

app.factory('searchService', function(broadcastService) {
    return {
        search: function(searchCriteria) {
            // Do some kind of searching
            // then broadcast the results
            var results = {
                message: searchCriteria
            };
            broadcastService.send('search', results);
        }
    }
});

//user
app.service('userService', userService);
function userService($http) {
    this.getUserByEmail = function (email) {
        return $http.get('https://foodapptestxyz.herokuapp.com/user/' + email).then(complete).catch(failed);
    }
}



//http functions
function complete(response) {
    return response;
}

function failed(error) {
    console.log(error.statusText);
}
