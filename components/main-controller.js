/**
 * Created by M044 on 08-10-2016.
 */
export default function mainController($scope,$http){
    'ngInject';
    $scope.active=1;
    $scope.tabs=["info","booking","result"];
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[3];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.onNext=function(fname,lname,email,pno){
        console.log('vk',fname,lname,email,pno);
        $scope.firstName=fname;
        $scope.lastName=lname;
        $scope.emailId=email;
        $scope.cNo=pno;
        $scope.active++;
    };
    $scope.onSubmit=function(location,toDate,fromDate){
        console.log('vk',location,toDate,fromDate,$scope.firstName);
        $scope.onLocation=location;
        $scope.departDate=toDate;
        $scope.returnDate=fromDate;
        $scope.active++;
        var data={fname:$scope.firstName,lname:$scope.lastName,cno:$scope.cNo,dateTo:toDate,dateFrom:fromDate};
        $http.get("http://192.168.10.70:5000/send?email=" + $scope.emailId + "&fName=" +$scope.firstName+"&lName="+$scope.lastName+"&cNo="+$scope.cNo+"&toDate="+toDate+"&fromDate="+fromDate+"&location="+location).
        success(function (data, status, headers, config) {
            alert("Thanks you, your booking is conform and send details on your mail.");
            console.log('Your full name is - ' + data);
        }).
        error(function (data, status, headers, config) {
            alert("An error occurred during the AJAX request");
        });
    };

    $scope.country = {};
    $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'Andorra', code: 'AD'},
        {name: 'Angola', code: 'AO'},
        {name: 'Anguilla', code: 'AI'},
        {name: 'Antarctica', code: 'AQ'},
        {name: 'Antigua and Barbuda', code: 'AG'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Armenia', code: 'AM'},
        {name: 'Aruba', code: 'AW'},
        {name: 'Australia', code: 'AU'},
        {name: 'Austria', code: 'AT'},
        {name: 'Azerbaijan', code: 'AZ'},
        {name: 'Bahamas', code: 'BS'}
    ];
}