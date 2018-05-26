export default function(module) {
    module.directive('leaflet', [leaflet]);

    function leaflet() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                var map = L.map('map', {
                    center: [51.505, -0.09],
                    zoom: 13
                });
            }
        }
    }
}