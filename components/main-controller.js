/**
 * Created by M044 on 08-10-2016.
 */
var req = require.context('!json!../', true, /app-data\.json$/);
export default function mainController($scope, $http) {
    'ngInject';

    var appData = {};
    $scope.addData=appData;
    var sorted = _.sortBy(req.keys(), function(o) {
        return (o.match(/\//g) || []).length;
    });
    _.forEach(sorted, function(file) {
        appData = _.merge({}, appData, req(file));
    });

    $scope.active = 1;
    $scope.tabs = appData.tabs;
    $scope.dateOptions = {
        dateDisabled: disabled,
        minDate: new Date()
    };

    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === date.getDay();
    }

    $scope.onNext = function (fname, lname, email, pno) {
        $scope.firstName = fname;
        $scope.lastName = lname;
        $scope.emailId = email;
        $scope.cNo = pno;
        $scope.active=2;
    };

    $scope.onSubmit = function (fromLocation,toLocation, toDate, fromDate) {
        $scope.fromLocation = fromLocation;
        $scope.toLocation = toLocation;
        $scope.departDate = toDate;
        $scope.returnDate = fromDate;
        $scope.active=3;

        $http.get("http://192.168.10.70:5000/send?email=" + $scope.emailId + "&fName=" + $scope.firstName + "&lName="
            + $scope.lastName + "&cNo=" + $scope.cNo + "&toDate=" + toDate + "&fromDate=" + fromDate + "&fromLocation="
            + fromLocation+"&toLocation="+toLocation).success(function (data, status, headers, config) {
            alert("Thanks you, your booking is conform and send details on your mail.");
            console.log('Your full name is - ' + data);
        }).error(function (data, status, headers, config) {
            alert("An error occurred during the AJAX request");
        });
    };
    angular.element('#title').click(function () {
        $scope.active=1;
        console.log('titleClick',$scope.active);
    });

    $scope.countryFrom = {};
    $scope.countryTo = {};
    $scope.countries =appData.countries;

}