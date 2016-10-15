/**
 * Created by M044 on 08-10-2016.
 */
export default function mainController($scope){
    'ngInject';
    $scope.tabs=["info","booking","result"];

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.onNext=function(fname,lname,email,pno){
        console.log('vk',fname,lname,email,pno);
        $scope.firstName=fname;
        $scope.lastName=lname;
        $scope.emailId=email;
        $scope.cNo=pno;
    };
    $scope.onSubmit=function(location,toDate,fromDate){
        console.log('vk',location,toDate,fromDate);
        $scope.onLocation=location;
        $scope.departDate=toDate;
        $scope.returnDate=fromDate;
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