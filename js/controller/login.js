/**
 * Created by sa on 16-8-3.
 */
define(["require","./controllerModule","../service/services"],function (require,controllerModule) {
    console.log(require.toUrl("./css.css"));
    controllerModule.controller('loginController', function($scope, CalcService) {
        console.log(CalcService);
        $scope.data=CalcService.name;
    });
});
