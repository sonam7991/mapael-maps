/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of Greater Manchester administrative divisions
 * 
 * @author rob crowther
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                greater_manchester_administrative_divisions : {
                    width : 1299.1971,
                    height : 936.3606,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : long, "y" : lat};
                    },
                    'elems': {
                        "Metropolitan Borough of Bolton" : "m 522.63,384.06 c -12.56,4.05 -25.75,-4.8 -37.68,-6.33 -8.19,1.69 -21.35,-7.23 -23.52,3.56 -8.6,5.08 -1.09,17.28 -8.88,20.98 -1.32,3.62 -5.86,6.72 -7.2,8.71 -11.62,-3.74 -23.64,-6.75 -34.32,-9.5 -5.89,1.07 -12.1,-5.76 -19.68,-4.36 -11.31,-2.03 -16.93,-8.85 -27.6,-11.88 -5.57,0.03 -11.07,-4.52 -11.76,3.96 -2.3,6.84 -4.07,6.6 -9.12,1.19 -5.01,2.54 -3.43,7.54 -2.88,14.25 -0.57,7.13 -7.34,7.49 -9.12,8.71 -2.07,1.97 -10.03,3.07 -10.08,7.13 -0.57,1.87 -2.31,5.19 -6.96,3.96 -2.23,0.46 -4.63,-2.62 -4.56,-5.94 -1.72,-2.11 -2.76,-7.36 -5.76,-8.31 -4.26,-3.59 -5.81,-6.08 -9.84,-11.48 -3.73,-3.25 -9.79,-5.62 -12,-7.92 -4.38,-3.29 -6.24,-5.8 -13.92,-5.94 -3.23,-6.44 4.25,-10.16 4.08,-15.44 1.88,-7.92 -11.22,-8.44 -16.08,-9.5 -1.63,1.25 1.31,-7.15 2.64,-5.54 -0.23,-3.92 8.12,-3.01 8.4,-8.31 0.62,-2.24 4.97,-7.12 0.48,-9.9 -3.36,-4.56 -3.98,-10.48 2.88,-11.48 -3.3,-4.35 -8.56,-5.79 -13.92,-9.5 1.07,-5.38 8.38,-14.06 -0.24,-17.82 -3.84,-4.45 -8.3,-5.53 -10.56,-13.07 -6.29,-0.93 -6.14,-3.4 -4.32,-8.31 0.93,-5.94 -9.19,-7.1 -11.28,-13.46 -10.74,-4.5 -19.83,-14.23 -30,-7.92 -6.71,-2.03 -14.34,-7.15 -21.36,-7.52 -4.36,-0.66 -17.29,9.89 -17.04,-0.4 0.97,-5.39 5.81,-7.04 9.36,-7.52 3.36,-0.32 8.26,-3.64 7.68,-7.92 5.57,-5.25 0.33,-15.46 8.64,-18.61 3.4,-5.93 12.04,-6.8 15.12,-11.48 7.77,4.1 9.17,-10.19 15.36,-3.56 4.7,3.1 5.39,4.9 9.36,6.33 -2.22,5.74 7.2,5.04 6.48,10.29 1.85,3.85 5.07,3.76 3.36,9.5 3.21,2.34 5.15,6.43 7.44,9.5 0.87,1.42 3.13,7.92 9.12,2.77 8.28,-6.42 20.94,-9.45 21.12,-20.59 2.38,-4.25 9.46,-4.44 7.68,-11.88 4.07,-0.48 9.35,-3.75 14.16,-5.54 10.17,-1.35 10.06,-13.51 20.16,-15.84 8.46,-9.33 20.72,-18.25 30.24,-28.9 15.75,10.68 36,15.48 52.32,26.13 10.85,5.16 10.43,-9.6 18.48,-11.88 5.18,-6.31 9.7,8.17 14.4,1.19 9.39,-1.26 7.17,-8.45 0,-8.31 -1.99,-4.6 6.13,-9.97 9.12,-10.29 4.14,0.66 5.04,-11.02 3.6,-14.65 2.48,-8.59 1.91,-10.65 -1.44,-20.19 3.44,-2.71 10.63,2.52 12.72,-5.94 8.17,-13.39 15.28,7.46 18.96,14.65 15.64,9.22 -3.45,33.97 16.56,38.01 8.83,0.4 19.29,-9.15 26.64,-1.98 9.06,-1.9 -1.35,-23.23 13.99,-20.93 9.12,-3.82 12.22,1.13 18.65,3.11 7.61,-2.25 5.25,10.26 3.84,10.69 -12.84,1.99 5.68,10.24 5.52,13.46 -3.96,3.79 -6.05,2.06 0,7.52 1.36,3.85 2.48,8.6 11.28,9.9 7.4,3.89 10.75,14.76 8.64,22.96 -0.82,8.76 -6.13,17.55 -8.4,24.94 5.16,7.94 -17.01,6.54 -10.8,13.46 5.1,3.54 -2.93,8.12 0,12.27 2.32,7.2 -2.26,14.13 2.4,20.19 -0.16,7.46 5.36,14.38 0.96,21.78 0.7,2.6 8.45,-0.65 10.32,5.15 6.84,2.27 13.42,3.03 14.64,12.27 4.16,5.43 2.55,16.09 2.4,21.78 0.25,11.41 -9.81,8.7 -9.12,-0.4 -4.08,5.65 -8.13,10.69 -15.12,4.75 0.64,7.44 19.19,8.65 28.01,14.99 5.56,2.93 13.18,2.21 16.63,8.76 6.85,-3.27 0.28,13.57 7.68,17.42 4.53,2.84 3.43,18.59 -2.88,8.31 -3.8,-6.63 -15.31,-7.36 -12.72,-0.79 -4.76,0.02 -9.01,1.22 -6.24,5.15 -3.89,0.3 4,11.46 1.68,10.29 0.5,12.91 -16.93,5.83 -26.16,1.58 -4.65,5.83 -20.33,-9.75 -19.92,-3.56 -15.21,-1.03 -17.24,-18.49 -30.72,-20.98 z",
                        "Metropolitan Borough of Bury" : "m 697.11,131.46 c 2.37,8.55 11.99,16.56 8.64,25.74 5.78,5.29 -0.35,15.58 7.2,12.27 4.88,7.57 13.75,2.17 12.72,15.44 5.94,12.79 16.45,29.84 32.4,20.19 1.4,5.43 3.84,13.35 10.08,15.84 1.56,8.81 -10.38,1.37 -13.92,9.11 -9.16,1.28 -3.86,18.18 -14.4,13.07 -4.38,0.99 -5.85,5 -11.28,1.58 2.39,4.81 0.42,10.56 -3.84,3.96 -8.08,-8.93 -11.5,5.69 -8.64,11.48 -1.5,4.28 -8.84,-7.87 -6.96,1.58 -0.4,8.26 6.63,9.48 10.08,14.65 8.77,4.32 14.51,-5.27 13.68,-12.27 3.07,-6.36 8.6,1.69 13.2,-1.98 7.09,5.97 9.68,14.62 13.68,22.17 4.98,7.65 16.12,13.88 7.92,21.38 8.73,4.11 -10.49,14.71 -0.96,18.21 6.24,-2.38 13.79,3.18 14.16,6.73 -14.83,5.26 4.7,15.2 1.92,26.13 2.18,9.06 4.43,19.34 -1.68,24.55 -2.67,5.91 -7.25,-6.74 -13.2,-9.11 -13.42,-9.87 -30.85,4.89 -37.2,17.42 1.76,5.87 5.28,26.13 5.28,26.13 0,0 18.29,-8.53 28.32,-6.73 1.99,8.56 -5.37,15.93 -6.24,12.27 -5.14,-0.32 -1.39,10.32 -6.96,9.9 -1.67,5.78 -1.68,7.88 -8.16,5.94 -12.63,0.57 -22.55,5.39 -33.12,7.52 -3.49,3.82 -11.38,8.22 -14.4,7.52 -0.89,-12.49 -24.31,-5.06 -17.52,-20.59 -4.04,-10.7 -14.37,-23.84 -27.36,-17.42 -10.82,1.62 -15.2,-9.9 -25.44,-11.48 -7.7,-6.11 1.06,-13.6 -5.76,-19 -7.22,-5 -0.53,-20.05 -8.16,-17.82 -8.67,-8.12 -24.25,-9.51 -31.75,-15.36 -9.46,1.07 -19.61,-12.81 -6.16,-4.83 5.86,0.94 10.57,-15.58 11.04,-1.19 5.16,7.69 10.17,-9.04 6.72,-11.88 3.46,-9.82 -2.92,-19.21 -7.68,-26.13 -8.68,2.24 -12.04,-8.82 -18.96,-5.94 1.9,-5.93 1.37,-14.24 -1.2,-20.19 -0.59,-7.07 -4.24,-11.89 -1.2,-19 -3.61,-5.83 -0.54,-8.68 0.72,-13.86 -4.75,-2.34 -3.49,-8.51 3.12,-8.31 4.64,-2.26 8.37,-5.23 6.24,-9.5 3.36,-7.96 8.34,-17.11 8.16,-27.32 1.82,-8.51 -5.63,-21.47 -16.56,-20.98 -3.88,-3.68 -1.06,-10.44 -8.16,-11.09 3.58,-3 7.21,-4.07 0.48,-8.71 -14.33,-7 2.96,-5.85 -0.24,-13.86 -1.86,-9.02 13.95,-6.07 13.92,-7.13 0.71,-4.69 6.3,-15.4 0.48,-17.02 -4.37,-5.66 -5.27,-18.48 4.8,-17.42 -1.31,-9.88 4.72,-20.19 6.72,-29.69 -5.47,-11.13 -23.12,-36.57 0.87,-23.08 18.04,-2.68 3.79,23.63 25,20.07 13.23,6.06 29.66,5.97 41.81,4.59 9.9,7.49 9.36,-10.88 16.32,-12.27 7.45,-2.62 9.05,-15.19 17.04,-16.63 6.8,6.11 7.48,18.86 8.16,27.72 -6.36,2.11 0.02,8.1 -6,11.88 0.62,15.87 2.6,30.31 12.24,42.76 z",
                        "City of Manchester" : "m 659.19,857.2 c 13.67,-0.39 29.96,-8.45 30.48,-23.76 0.29,-10.07 12.05,-20.3 12.96,-25.74 -7.99,-3.45 -9.48,-14.74 -17.76,-17.02 -4.58,-3.03 -3.01,-6.63 -3.12,-10.69 -1.28,-4.67 0.14,-8.87 -1.44,-14.25 -3.86,-3.96 -5.4,-11.98 -10.8,-13.46 -5.32,-11.33 -17.38,-28.7 -18,-36.03 6.44,3.51 15.57,4.63 23.04,3.96 3.4,-0.77 8.31,2.85 10.32,3.17 -1.1,-9.82 9.08,-14.93 15.84,-17.02 3.68,-1.36 6.78,-3.42 11.28,-0.4 7.31,2.03 1.4,-9.78 6.48,-10.69 7.75,-3.2 3.62,-12.86 -5.52,-11.48 -12.67,-2.41 -6.81,-27.29 -23.52,-22.57 -7.93,2.2 -11.33,-10.11 -6.48,-11.88 4.9,4.48 9.5,2.97 5.52,-4.75 10.74,2.3 9.26,-11.83 3.6,-13.86 1.46,-3.15 9.26,-2.57 9.84,-11.09 3.52,-3.28 11.01,-1.19 13.68,-4.75 15.88,1.63 21.96,-17 34.32,-23.76 7.06,-0.33 7.85,-11.12 -0.72,-7.92 -3.46,-5.51 -7.15,-12.79 -12.72,-15.84 0.61,-4.93 -8.35,-2.1 -0.96,-9.11 3.63,-6.55 3.84,-15.76 12.96,-19.8 3.95,-7.51 23.47,-10.1 18,-20.19 -8.61,-2.83 -4.42,-13.49 -11.52,-16.63 3.78,-6.95 -5.49,-11.29 -1.68,-17.02 -0.49,-6.55 7.96,-11.15 12,-7.13 3.34,-6.24 3.07,-10.56 -3.12,-13.07 -4.39,-2.2 4.61,-7.09 5.28,-10.69 0.99,-8.78 -12.76,-13.96 -17.52,-16.63 -0.66,-7.81 7.59,-7.6 5.52,-15.44 3.07,-5.47 8.1,1.19 9.84,-11.09 -3.57,-6.63 -32.7,2.98 -27.84,7.52 -3.64,-8.03 -3.05,-22.45 -6.72,-27.32 4.11,-12.82 20.06,-24.21 32.88,-21.38 10.28,4.05 12.52,17.3 21.6,13.07 1.82,-3.89 9.15,-3.66 12,-6.33 5.82,1.02 11.14,-8.82 14.4,-3.96 1.67,4.65 11.35,1.43 12.24,9.11 3.54,3.58 8.65,6.65 4.8,11.88 3.22,14.6 23.9,4.01 32.4,15.44 8.65,1.58 20.13,6.31 25.68,4.36 -4.11,15.71 12.26,19.34 19.06,16.68 8.05,8.1 3.86,11.7 -0.1,16.19 -3.32,3.41 -4.91,7.67 -12,3.56 -6.66,0.52 -12.57,1.33 -12.72,7.52 0.56,2.38 -1.24,5.11 -4.08,9.11 -2.96,0.21 -4.88,4.98 -0.24,5.15 -5,5.05 8.48,7.17 7.44,6.73 -0.34,1.75 8.27,5.95 9.84,9.9 6.76,-3.85 6.47,5.72 3.84,7.13 -2.87,5.48 3.22,13.3 -5.28,13.07 3.21,6.97 -6.17,6.27 -4.32,10.29 0.37,4.59 1.25,18.6 5.28,19.8 -0.67,5.11 2.13,6.53 6.48,10.29 3.26,3.56 10.49,-1.01 12.96,4.75 6.74,2.49 7.33,11.22 10.8,17.02 -2.83,5.43 -4.23,9.65 -9.36,11.48 0.65,2.94 9.15,7.43 3.36,7.13 8.35,7.2 -16.17,11.13 -14.88,17.82 -4.53,4.9 -12.11,-5.14 -11.76,10.69 -10.45,0.47 -9.22,11.44 -10.56,19.8 -1.25,7.12 0.58,22.03 -5.52,21.78 -3.34,-4.38 -12.21,-5.1 -17.52,-9.11 6.7,9.12 -8.18,0.57 -5.04,10.29 -2.78,5.96 0.98,17.51 -8.16,12.67 -5.3,4.67 -8.01,14.36 -13.44,16.63 -6.72,3.44 3.35,7.26 -5.28,7.52 -7.01,0.21 -9.06,2.69 -8.88,13.07 -2.96,7.75 1.13,11.36 1.68,18.61 -5.93,1.82 -10.91,4.3 -10.32,10.69 -8.32,9.12 -24.63,-0.43 -34.56,7.92 0.33,3.74 -7.51,7.51 -6.96,10.29 6.05,2.97 -4.59,9.66 2.64,11.48 -7.18,6.18 4.33,8.26 2.88,15.84 -2.36,8.18 5.49,10.86 1.2,19.4 0.35,6.4 2.78,12.19 5.28,17.82 4.7,6.36 -2.25,21.95 -4.08,29.69 -5.82,-3.12 -8.16,-4.88 -17.28,-3.17 -12.28,-2.86 -21.25,15.39 -14.64,13.07 -7.15,5.68 -6.45,16.14 -18.24,13.86 -6.86,1.28 -9.9,9.42 -13.68,11.48 -9.6,-5.06 -6.4,10.67 -14.16,9.11 -6.97,-5.06 -12.48,4.43 -18,5.94 -0.4,-3.68 6.59,-9.09 8.16,-11.88 -0.03,-4.35 -3.84,-5.31 -0.72,-10.29 -3.67,-0 -2.35,-6.3 -6.48,-0.4 0.22,-4.79 -5.18,-4.73 -6.48,-9.5 -2.09,-4.27 -11.98,-3.43 -12.48,-9.5 -2.01,-0.75 -2.38,-1.62 -1.2,-3.17 z",
                        "Metropolitan Borough of Oldham" : "m 1178.78,441.87 c -7.41,-6.37 -16.67,-20.85 -27.36,-9.9 -7.51,5.48 -21.71,0.73 -24.48,-5.15 3.45,-8.58 -7.31,-15.47 -12.48,-18.61 -5.78,-1.73 -10.04,-2.6 -13.2,-0.79 -3.08,-5.83 -7.03,4.92 -8.88,-0.79 -8.62,3.54 -21.23,-7.44 -26.88,-0.4 1.9,3.99 10.3,10.04 4.56,17.02 0.76,2.11 -16.7,8.85 -16.32,1.98 -11.08,2.47 -17.19,8.1 -29.04,5.54 -8.14,0.14 -18.21,-2.32 -16.8,7.13 -4.15,0.19 -1.8,8.17 -6.96,10.29 -3.19,0.55 -2.28,8.12 -7.2,9.11 -4.75,6.45 -16.12,4.54 -21.84,11.09 -10.18,0.62 -1.81,14.03 -11.52,15.44 -3.43,8.02 -14.41,1.62 -17.04,11.88 -2.43,6.29 -2.63,12.28 -10.08,12.27 -6.27,0.26 -7.93,-6 -10.8,-6.33 -3.2,2.37 -9.72,2.42 -12.72,0 -3.44,-5.62 -5.26,3.32 -10.56,0.79 -5.62,0.48 -0.5,-10.35 0.72,-12.27 -3.2,-5.72 -8.32,-1.62 -11.76,-8.71 -7.72,-3.24 -1.52,-5.48 -9.6,-3.56 -3.76,-4.33 -2.18,-6.2 -4.8,-9.11 2.21,-2.64 6,-4.9 6.72,-9.11 1.5,0.61 -1.16,-8.12 4.08,-7.52 3.59,-5.37 12.12,-0.78 17.76,-1.19 -0.43,-5.5 8.08,-6.54 8.64,-13.46 -4.33,-19.17 -16.53,2.9 -22.8,-14.25 -0.01,-13.52 -4.51,-9.07 -16.32,-11.88 -16.61,-0.08 -4.61,-9.44 0,-17.82 6.79,-14.04 20.08,-25.4 15.12,-43.16 -6.5,-0.04 -2.42,-13.54 -2.4,-17.82 7.84,-1.88 10.77,-17.6 22.32,-16.63 15.26,-3.32 8.26,-19.52 8.16,-30.09 -7.01,-15.22 -3.84,-21.51 15.84,-19 14.04,3.62 24.52,-7.64 31.44,-15.84 1.34,-6.82 9.26,-9.69 15.6,-8.71 2.62,-7.68 -2.8,-20.49 7.92,-17.02 1.99,8.73 12.43,1.38 15.84,8.71 7.9,-1.62 12.84,-5.7 16.32,0.4 3.98,2.8 6.38,3.75 11.28,1.58 7.66,1.33 19.2,-2.32 20.4,7.52 9.13,3.07 24.96,-5.86 16.56,-13.07 10.06,-7.49 26.07,-6.6 33.84,-15.84 -1.7,-3.61 11.03,-16.01 4.08,-22.96 -1.78,-10.2 7.19,-14.08 5.28,-24.55 3.7,-10.33 6.18,-4.09 5.28,3.17 0.26,11.32 8.18,11.8 16.32,13.07 6.51,-1.01 11.51,-5.76 12.48,2.77 1.89,10.44 18.76,17.78 22.08,30.09 11.6,17.41 17.25,40.51 37.2,50.28 4.9,14.83 26.11,12.99 31.44,25.74 10.27,2.68 10.87,21.13 12.72,31.67 10.14,7.34 21.61,14.11 29.04,23.76 5.87,4.85 20.37,-2.13 19.44,10.69 -0.1,11.48 9.11,25.57 -3.6,31.28 2.05,13.31 -17.48,11.05 -13.2,24.15 2.53,7.18 -5.72,13.96 -5.04,17.82 3.69,6.91 16.29,12.75 12.24,20.19 -7.27,8.74 -19.09,14.57 -29.76,17.02 -11.03,-5.65 -19.54,11.81 -30.24,3.56 -9.18,-3.16 -9.43,-14.53 -19.44,-16.23 -9.36,-5.18 -17.46,-10.3 -27.6,-14.25 z",
                        "Metropolitan Borough of Rochdale" : "m 1107.26,147.3 c 6.02,8.26 6.73,14.5 1.44,22.57 2.08,9.59 -10.29,16.98 -2.16,26.13 -1.98,8.9 -6.64,17.33 -8.64,20.59 -7.64,7.67 -28.22,7.76 -30.24,14.65 6.15,10.96 -16.99,17.42 -19.68,8.31 -4.73,-4.42 -15.98,-4.11 -22.32,-2.38 -5.42,0.92 -9.23,-5.39 -12.96,-6.73 -4.43,4.35 -12.48,3.41 -16.32,-0.4 -8.42,3.91 -12.51,-10.93 -17.52,-2.77 2.21,10.15 -1.43,17.65 -10.08,15.84 -8.35,5.88 -10.47,17.07 -21.36,21.38 -11.78,6.96 -26.5,-2.04 -39.12,5.54 10.75,9.5 4.49,22.31 8.64,34.45 -0.26,14.55 -20.19,8.9 -24.24,20.98 -2.97,4.95 -6.09,5.42 -8.88,8.71 0.7,5.85 -2.76,16.57 3.36,17.82 4.11,18.55 -10.57,29.84 -17.52,45.14 -4.94,17.3 -13.7,6.75 -25.2,4.75 -8.18,2.09 -20.64,-5.76 -13.92,-13.46 -6.38,-5.33 -8.96,-15.13 -18.96,-14.25 -1.03,-9.24 -10.34,4.26 -16.32,2.38 -2.56,3.65 -9.68,3.08 -12,6.73 -6.78,-1.45 7.27,-9.51 1.2,-17.42 -0.87,-11.04 -4.66,-23.34 -9.84,-30.88 13.05,-3.8 2.58,-9.67 -1.44,-11.09 -3.27,-0.18 -13.21,-0.57 -7.68,-5.54 5.02,-7.23 6.27,-20.38 4.32,-16.63 3.51,-9.01 -12.73,-13.97 -11.76,-22.96 -6.1,-4.47 -6.68,-19.61 -16.08,-15.44 -8.4,-6.1 -10.47,4.08 -11.04,10.69 -6.77,7.01 -14.5,1.41 -17.76,-3.56 -5.39,-0.81 -6.39,-19.53 0.96,-9.11 4.68,-1.33 -2.61,-14.92 5.28,-15.44 4.44,1.04 12.23,11.04 9.6,1.19 -1.78,-5.94 8.02,3.13 8.4,-3.96 5.97,1.27 11.18,1.62 9.84,-6.33 4.98,-7.59 13.61,-12.27 20.64,-11.88 2.26,-7.2 -9.02,-6.66 -8.4,-15.05 0.29,-11.5 -15.03,5.13 -19.92,-5.54 -5.79,-3.48 -14.21,-15.46 -11.28,-20.98 5.36,-6.79 4.82,8.41 11.76,-0.4 10.82,-0.42 3.01,-6.86 7.68,-11.09 5.52,-2.88 -6.39,-0.11 -2.64,-5.15 -0.13,-4.04 -4.52,-15.03 -4.56,-11.09 -3.09,-15.68 -2.97,-34.64 -9.6,-45.93 -4.81,-5.74 1.59,-9.75 3.36,-15.05 2.57,-4.12 7.15,-9.07 10.32,-14.65 17.15,-1.84 19.22,-26.86 36.96,-31.28 7.1,-6.69 17.06,-12.79 23.76,-5.15 11.8,-1.88 7.83,12.4 17.52,16.23 8.66,3.65 1.07,16.13 10.8,17.82 -6.82,5.68 10.23,7.84 12,13.46 7.79,2.23 10.53,10.06 18.96,5.94 3.76,0.69 7.19,8.41 1.2,8.71 -0.36,5 8.15,11.66 1.44,13.46 -11.25,8.08 9.62,1.15 13.44,0.79 8.42,-2.7 26.02,-0.29 21,-15.88 0.59,-11.46 -11.8,-22.9 0.24,-33.65 9.73,-14.19 13.12,-31.34 19.56,-46.68 -0.61,-8.49 1.64,-21.31 5.76,-7.92 6.4,11.28 5.6,-7.42 9.12,-9.9 5.54,-3.06 7.52,-9.78 12.24,-0.79 12.06,7.15 1.8,25.28 17.16,29.71 13.3,8.81 33.28,-7.68 43.32,5.53 3.06,-3.31 10.56,0.44 12,-5.15 4.04,-5 -0.49,-21.15 9.84,-15.05 9.37,5.14 14.81,-5.45 22.32,-9.5 7.65,-6.21 14.87,-2.31 22.32,-4.75 8.26,10.25 -12.08,14.56 -5.52,26.92 1.37,10.14 10.6,12.79 16.32,20.59 16,4.43 16.28,23.45 7.2,34.84 -1.2,10.23 -9.82,32.05 8.16,37.22 11.15,2.57 9.54,13.79 5.52,21.78 z",
                        "City of Salford" : "m 415.6,648.15 c -6.88,-4.29 -13.74,-5.25 -16.08,-15.05 -2.97,-5.59 9.19,-13.63 -1.44,-17.82 -3.1,-9.72 -13.82,-11.5 -12.96,-21.38 -8.11,-4.93 -1.1,-7.02 5.52,-6.33 11.56,-8.55 32.47,-1.65 47.76,-7.13 15.27,-2.42 38.59,0.06 27.12,-22.17 -2.32,-12.59 -5.25,-27.24 -0.48,-37.22 4.47,-6.11 -2.53,-13.32 -2.16,-17.82 4.23,-2.82 6.98,-11.56 9.12,-14.25 -6.19,-8.09 7.67,-7.86 2.64,-16.63 7.34,-4.56 18.96,-2.17 13.68,-9.9 0.24,-7.28 11.12,-13.85 9.6,-11.09 4.52,-12.53 -12.87,-22.19 -23.76,-24.15 -10.85,-4.3 -28.62,-6.39 -36.48,-11.48 1.99,-3.7 5.49,-6.4 9.12,-5.15 3.47,-7.46 12.59,-11.21 9.84,-21.38 0.6,-6.54 7.11,-9.81 9.12,-13.86 14.87,3 28.33,1.39 41.04,9.5 12.56,-3.08 25.68,-0.32 32.16,12.67 8.58,8.65 24.99,9.31 33.84,13.07 6.57,-4.53 23.75,13.71 27.12,-2.38 -3.64,-2.48 -5.04,-16.66 -4.08,-11.88 3.47,0.14 -0.44,-6.43 7.44,-4.36 3.46,-1.39 -2.28,-7.45 5.76,-4.75 11.26,4.44 15.21,19.32 28.32,20.98 6.86,14.27 26.93,-3.99 33.12,11.88 9.16,4.56 5.8,14.59 7.92,20.98 7.25,2.58 16.59,4.65 18.48,11.88 8.2,-3.63 14.6,-11.63 24.48,-10.69 9.04,-5.11 22.39,-6.4 31.2,-3.56 10.41,2.34 20.41,15.31 10.08,21.38 -7.15,5.57 7.84,5.49 4.8,12.27 -2.13,4.66 -2.76,7.5 -9.36,2.38 -6.87,8.83 -6.37,15.4 -1.92,23.76 -1.09,4.04 5.09,17.85 4.56,13.07 1.71,5.5 13.15,9.44 3.36,15.44 -10.36,7.62 -25.4,14.28 -26.64,28.11 -12.62,2.29 -17.59,23.36 -29.52,20.98 -21.05,-10.45 -39.13,-26.85 -59.04,-38.8 -19.22,-4.14 -36.64,10.99 -54.72,15.44 -25.43,16.11 -53.96,25.33 -72.96,49.49 -13.23,16.54 -16.55,36.94 -23.04,54.64 -7.25,24.4 -36.17,33.36 -53.28,47.12 -2.86,-3.39 -3.69,-8.55 0.24,-12.27 0.36,-16.53 -14.72,-25.37 -19.92,-40.78 -2.51,-3.23 -7.28,-0.05 -9.6,-2.77 z",
                        "Metropolitan Borough of Stockport" : "m 774.39,799.79 c 0.41,-6.5 -4.94,-9.27 -2.16,-17.02 -5.91,-5.09 -7.63,-16.8 -5.52,-14.25 4.2,-7.56 -4.02,-10.82 3.25,-15.09 2.55,-5.11 6.16,-9.99 14.03,-10.25 10.08,0.93 26.23,2.22 25.2,-10.69 8.53,-1.68 12.92,-5.64 6.24,-13.46 0.94,-3.29 1,-18.25 3.84,-21.78 2.79,3.2 13.47,-1.18 8.88,-3.56 0.52,-4.93 11.22,-9.49 12.96,-18.21 2.86,-6.46 11.58,2.87 9.36,-6.33 2.53,-5.24 -0.71,-17.29 7.44,-14.25 0.54,-5.97 -0.63,-4.1 4.08,-3.17 6.54,3.45 10.24,4.52 14.88,7.52 4.63,-9.3 2.37,-27.24 6.24,-38.01 5.22,-2.45 11.63,-6.76 10.32,-15.44 8.68,8.59 7.28,-0.79 12,-3.17 2.82,9.69 14.41,13.02 15.6,20.19 -0.71,5.85 12.88,4.33 6.96,10.29 4.75,3.64 1.81,14.56 6,10.69 2.4,5.08 5.3,3.23 7.68,-0.4 -0.46,7.53 2.69,3.74 6,1.19 2.62,-6.38 16.12,8.31 13.68,0 -4.78,-8.86 5.25,-4.62 6,0.79 -4.47,5.85 -0.49,5.84 2.88,3.56 3.47,-2.2 6.21,-6.76 0,-5.94 2.83,-8.96 10.37,6.75 12.48,10.69 4.03,5.97 11.01,8.41 15.6,4.75 10.9,4.68 -3.25,-12.78 7.2,-8.31 4.54,-3.7 12.63,-2.4 14.4,5.54 6.42,2.41 -1.41,3.1 1.2,8.71 -4.08,9.02 9.47,16.13 14.88,11.88 3.14,3.72 9.44,-4.53 11.04,-4.36 4.35,-1.89 8.62,-4.1 11.28,-2.77 2.35,-1.73 8.71,-7.22 12.72,-4.75 7.74,2.43 18.85,5.94 23.76,10.69 5.19,1.19 5.24,-4.27 10.32,-3.96 4.47,2.68 11.02,-6.77 12.48,1.58 -0.59,2.74 10.29,1.25 6.72,9.5 -1.25,6.43 -8.72,11.9 -5.52,9.5 10.34,1.86 22.46,15.37 17.28,12.27 9.5,-0.56 19.5,5.2 30.72,2.38 0.36,6.56 -1.71,19.36 -5.04,28.51 -4.05,11.12 -10.83,21.83 -13.68,33.26 3.52,11.14 -1.74,17.27 -12.48,19.4 -2.09,4.63 -2.28,12.06 -6.96,7.52 -4.88,3.94 2.54,11.62 -7.2,13.86 0.52,5.47 -10.22,8.14 -14.4,1.98 -11.66,-5.16 10.54,16.92 0.24,11.88 -0.71,-7.96 -13.26,0.43 -14.16,-7.52 -1.99,-2.14 -3.37,5.78 -6.24,7.13 -3.95,4.55 -11.4,3.08 -13.68,9.11 -8.26,-0.32 -4.97,11.55 -8.16,14.25 -1.7,6.76 -5.16,9.66 -9.6,8.71 -3.92,4.44 -10.45,0.55 -12.48,1.98 -6.85,0.08 -12.67,-1.28 -19.44,-5.54 -6.22,-6.03 -12.55,-12.49 -18.96,-16.23 -7.82,0.04 -12.22,-1.15 -18.48,3.56 -6.26,0.77 -11.82,0.46 -15.12,0.4 -4.67,-0.6 -8.38,7.31 -12,6.33 -3.31,-6.76 -9.06,-7.34 -15.84,-8.71 -1.84,-5.87 -10.33,-4.12 -5.04,-2.77 -4.12,7.81 -3.26,13.71 -1.92,23.36 2.28,5.82 -8.73,10.81 -11.52,15.05 -0.69,5.38 -13.32,7.34 -3.36,16.63 4.43,4.58 9.08,7.8 2.64,13.46 -6.13,4.31 -6.96,10.85 -7.68,20.59 0.21,4.7 -1.27,15.74 -8.4,10.69 -4.11,-4.3 -5.41,5.98 -8.4,1.19 -4.04,-1.13 -6.52,-4.72 -10.56,-6.73 -1.16,-2.84 -1.53,0.19 -2.88,-3.56 -3.03,3.72 -5.51,0.79 -10.32,1.58 -4.36,1.17 -2.93,3.35 -6.96,-1.19 -1.9,0.23 -3.07,-3.31 -6,-3.17 -6.33,-5.1 -7.3,-13.77 -13.68,-15.84 1.72,-6.05 5.54,-9.61 13.2,-9.9 13.25,-0.56 1.95,-10.51 -3.6,-15.44 2.63,-6.26 7.22,-11.72 -2.4,-11.09 -8.72,-6.08 -19.81,-6.21 -30,-5.54 2.44,-8.53 -17.82,-14.29 -14.64,-9.5 -6.49,-3.53 -15.63,-2.63 -24.24,-0.4 2.68,-8.04 -17.31,6.24 -11.04,-7.52 1.97,-10.35 7.68,-22.84 -0.72,-28.9 0.25,-5.55 -4.51,-11.6 -1.2,-17.42 z",
                        "Metropolitan Borough of Tameside" : "m 1178.78,441.87 c 12.87,4.18 22.6,13.62 35.52,17.42 -5.5,8.86 -17.98,13.87 -13.92,25.74 0.96,8.7 3.2,17.58 -1.68,24.15 -0.48,7.34 -6.51,12.7 -14.4,15.84 -6.48,7.03 -11.81,13.48 -10.8,24.94 4.22,6.11 -0.77,12.72 3.6,19 4.95,3.56 15.74,13.63 3.36,16.23 -8.21,0.67 -3.78,7.33 -4.08,13.07 7.85,5.4 -5.35,6.68 -8.16,10.29 -8.09,3.87 1.16,21.01 -10.8,17.82 -4.08,5.64 -10.92,7.85 -14.16,12.27 5.71,2.42 4.71,11.07 6,13.86 -9.95,4.44 -10.68,-18.48 -18.24,-7.13 -3.07,-0.02 -4.38,2.8 -6,7.52 -4.47,3.25 -5.79,8.53 -11.76,8.71 4.35,5.48 -1.96,10.94 -7.92,9.9 -4.79,-1.78 -5.24,4.84 -9.84,3.56 -5.31,-3.67 -15.42,-8.19 -23.04,-10.29 -5.47,-3.22 -12.08,2.5 -14.4,4.75 -4.11,-4.93 -7.17,2.12 -11.28,2.77 -2.33,-0.18 -8.76,8.39 -12.24,3.56 -6.77,5.87 -17.65,-5.35 -13.44,-13.46 -1.67,-3.67 4.68,-4.91 -1.92,-7.52 -1.43,-8.55 -9.74,-7.48 -13.68,-4.75 -10.4,-4.59 3.45,12.65 -6.72,8.31 -4.48,1.94 -8.42,3.04 -13.44,-1.58 -4.94,-3.88 -7.32,-17.66 -14.16,-16.23 -3.88,3.83 8.33,2.11 0.72,6.33 -2.02,3.77 -10.47,5.75 -4.56,-1.58 -0.75,-5.41 -10.78,-9.65 -6,-0.79 1.54,7.51 -12.84,-7.19 -15.84,1.19 -3.8,6.37 -2.32,-1.32 -5.28,-2.38 -0.73,9.09 -5.44,-0.75 -7.68,0.79 -1.13,1.72 -1.3,-9.11 -5.28,-12.27 7.2,-4.82 -11.02,-4.61 -6.72,-11.88 -3.51,-4.26 -16.13,-11.59 -13.44,-18.61 6.71,-4.17 15.22,-8.85 11.76,-12.67 2.49,-0.63 -9.5,-9.71 0,-9.11 2.43,-5.43 7.59,-11.45 0.48,-17.82 0.23,-6.82 -8.08,-9.54 -11.28,-12.27 -7.33,2.51 -18.35,-10.02 -14.4,-6.73 0.89,-5.48 -4.27,-5.85 -3.84,-13.86 -1.22,-8.03 -5.05,-13.88 3.36,-15.44 -2.01,-5.64 0.66,-6.27 4.32,-7.52 0.53,-5.84 8.64,-2.68 9.84,-6.33 4.2,4.28 9.77,4.59 15.12,2.38 2.66,-1.64 3.57,6.43 9.36,5.54 7.17,1.15 10.12,-3.96 10.8,-11.09 3.14,-6 7.53,-8.76 13.44,-8.31 5.77,-4.52 11.01,-7.72 10.56,-14.65 0.4,-5.68 10.57,-5.98 14.88,-10.69 7.71,-0.21 11.58,-4.88 16.56,-8.71 -0.61,-7.05 9.35,-8.76 7.92,-15.84 4.87,-1.76 -0.11,-11.48 10.8,-7.52 9.63,0.33 17.4,1.54 25.2,-1.58 3.96,-1.42 12.48,-6.15 14.16,0 6.59,-7.01 14.99,1.68 15.6,-10.29 2.16,-6.41 -13.2,-14.85 -0.96,-15.05 7.9,2.72 21.44,3.03 24.96,3.96 2.74,-5.87 6.76,2.96 9.36,-1.58 9.88,0.66 18.65,6.37 23.28,16.63 -6.05,8.68 12.49,13.85 19.44,10.29 10.71,-10.22 22.27,-2.67 28.8,7.52 0.27,0.95 1.6,0.5 2.16,1.19 z",
                        "Metropolitan Borough of Trafford" : "m 436.96,713.08 c 18.22,-23.65 58.82,-30.11 64.32,-64.54 4.07,-14.81 9.75,-35.33 21.84,-48.7 19.13,-22.46 46.4,-31.55 71.04,-47.12 21.02,-5.19 46.31,-28.02 66.24,-8.31 15.51,11.69 34.26,27 51.6,32.07 8.97,-4.6 13.62,-18.06 24.48,-19.8 -5.39,6.93 -4.07,6.32 0.96,9.9 0.58,4.04 10.14,9.09 10.8,16.23 4.8,0.28 9.41,0.02 6.48,5.15 -9.24,4.31 -19.86,18.88 -29.76,25.74 -9.87,-1.2 -12.78,5.72 -21.84,3.96 -1.47,8.49 -8.57,10.57 -11.04,13.07 7.46,3.27 4.2,15.33 -3.36,15.05 4.96,10.49 -4.11,4.26 -7.2,3.56 -4.51,11.77 6.91,11.48 14.64,12.67 11.29,2.27 5.24,24.26 20.4,22.57 11.9,1.4 2.28,11.27 -0.96,14.65 3.45,8.03 -4.38,8.24 -9.12,4.36 -4.51,3.36 -8.87,2.62 -14.16,6.73 -6.26,0.6 -6.81,12.19 -8.64,13.07 -7.87,-6.92 -20.61,0.58 -30,-6.73 -9.09,-3.3 6.86,22.34 6,17.42 4.34,7.7 8.67,18.18 14.16,21.38 4.59,7.49 9.43,12.97 6.96,19.8 3.41,2.57 -1.5,9.43 1.92,13.07 5.86,4.61 12.46,9.79 16.56,18.21 11.27,1.96 -7.3,11.16 -6.72,18.61 -3.82,12.26 -7.01,28.72 -22.56,29.69 -6.4,2.74 -10.96,3.38 -12.72,-1.98 -5.43,1.24 -8.16,0.47 -11.52,-0.79 -1.44,8.26 -2.44,-3.74 -4.08,-5.54 -2.99,2.44 -10.41,3.6 -8.64,-2.77 4.28,-5.14 -4.73,-1.92 -3.84,-7.52 -4.09,-1.11 -7.25,-4.41 -9.36,-1.98 -2.63,-6.59 -10.1,2.73 -14.4,-3.96 0.45,9.01 -5.79,2.1 -7.68,-1.19 -3.23,0.29 -8.62,-2.42 -7.92,3.96 -8.14,-2.2 0.57,11.36 -9.12,5.94 -1.33,4.67 -2.29,2.55 -6.48,0.4 -3.93,4.35 -7.05,-5.89 -13.44,-3.17 -6.04,-2.86 -5.83,-7.75 -7.92,-11.48 -3.34,-0.9 -2.14,1.25 -7.2,-0.79 -2.42,-4.2 -8.61,1.19 -8.16,-4.36 -6.08,-3.36 -9.1,-7.76 -15.36,-8.71 0.17,-2.39 3.17,-6.6 -3.6,-8.31 -8.1,0.02 -7.32,-9.83 -10.32,-12.67 -5.84,-4.22 -12.65,-1.8 -15.84,-7.92 -2.41,-1.73 -5.53,0.31 -6.96,-1.98 -4.08,3.72 -5.79,-8.28 -8.4,-3.56 -5.1,3.73 -6.38,-0.68 -8.88,-2.77 -3.33,2.27 -7.25,-1.52 -6.96,-5.54 -3.99,3.91 -7.03,-2.26 -10.32,-2.38 -1.57,-2.01 -4.74,-8.31 -10.32,-5.94 -1.06,-3.14 -3.34,4.34 -5.76,1.58 -4.7,-0.71 -4.2,5 -7.2,-0.4 -2.51,0.87 -4.7,-2.17 -7.2,0 -1.78,-2.82 -3.85,2.31 -5.28,1.98 -2.77,6.74 -8.38,-0.02 -12,-1.58 -6.78,-6 -1.28,-6.43 5.04,-8.71 15.11,-8.04 20.1,-26.16 28.8,-39.59 z",
                        "Metropolitan Borough of Wigan" : "m 461.92,576.88 c -22.27,4.64 -46.7,5.84 -67.68,7.92 -2.97,4.53 -10.52,1.97 -13.44,3.96 0.23,-8.23 -6.93,-13.26 -2.16,-21.38 -3.05,-10.76 8.48,-20.61 -2.64,-28.51 -7.79,-9.6 -21.83,4.16 -34.08,6.33 -19.8,7.54 -41.11,17.62 -60.72,23.76 1.78,7.9 10.93,19.52 -2.64,18.61 -7.47,3.12 -21.39,1.17 -25.44,7.92 -2.89,9.13 -5.04,21.2 -9.6,29.69 -4.53,-3.45 -14.36,-5.1 -11.76,-14.25 2.83,-5.69 -7.33,-13.51 -14.4,-10.29 -7.32,-0.58 -10.88,-9.41 -10.8,-14.25 -7.63,-0.5 -15.31,0.61 -22.08,-2.77 -1.91,-3.09 -3.14,-7.88 -4.32,-11.48 2.25,-3.74 2.28,-5.92 4.08,-9.9 5.76,1.61 13.32,0.27 5.76,-7.52 -7.77,-8.32 6.65,-7.56 -3.36,-11.88 -0.9,-2.37 2.02,-10.97 -4.56,-9.5 -15.28,-3.06 -34.79,5.88 -48.24,1.58 -9.86,-9.66 -15.38,-16.98 -17.52,-30.49 -5.48,2.64 -12.21,-1.35 -8.16,-3.56 -6.66,-2.07 -2.94,-14.29 -10.32,-16.63 -5.52,3.76 -14.82,5.06 -21.36,0.79 -2.6,-3.35 -9.42,-3.68 -13.44,-3.56 -4.12,-5.19 -14.57,1.79 -15.36,-7.52 -3.35,-0.79 -14.41,0.73 -7.92,-1.58 -5.54,-3.36 -1.74,-20.06 -8.16,-25.74 -3.95,2.31 -6.66,6.75 -9.12,10.29 -4.42,-4.26 -7.91,-1.75 -11.76,1.19 0.8,-5.2 -6.99,-13.33 -6.96,-20.19 -9.53,-8.06 5.13,-17.73 12.96,-20.59 5.77,-9.42 4.31,-21 5.28,-31.28 6.08,-1.75 -2.33,-8.03 -2.64,-12.27 -1.78,-6.4 6.65,-12.15 10.32,-17.82 3.34,-4.95 1.04,-12.56 6.24,-15.05 0.1,-6.81 5.62,-11.06 4.08,-17.42 4.61,-8.06 -13.3,-2.86 -10.08,-11.88 -2.27,-6.43 -7.09,-8.99 -9.36,-15.84 -0.59,-2.89 6.07,-11 -3.12,-9.11 2.8,-5.36 8.56,-5.85 7.44,-12.67 0.78,-4.1 7.09,-7.42 7.68,-12.27 2.51,-4.05 13.11,-2.58 12,-9.5 -1.67,-2.27 3.62,-7.01 6.72,-5.15 3.56,4.7 8.89,6.29 6.72,-0.79 1.94,-10.15 1.91,-28.66 8.16,-33.65 3.13,4.17 8.94,0.43 13.68,-0.4 3.74,-1.79 11.01,-2.3 16.08,-0.79 3.99,2.83 12.08,6.29 17.04,1.19 8.85,-0.57 15.56,-8.95 25.2,-8.31 4.82,1.54 10.31,-3.46 14.64,-1.19 7.57,4.54 -1.38,16.86 6.48,23.76 3.19,5.25 2.09,9.52 5.76,13.46 -5.06,3.68 -4.9,14.81 4.32,9.9 7.4,-5.71 15.73,-1.93 23.28,1.19 6.33,7.65 16.63,-4.12 22.8,4.36 11.37,2.39 19.28,12.67 25.92,18.21 -0.01,4.92 -4.21,9.66 2.64,9.5 4.24,6.76 7.26,9.8 12,13.86 10.58,3.82 -2.41,15.12 1.68,19 5.86,3.42 9.94,3.98 12.48,9.11 -11.29,0.75 -1.81,10.34 -0.72,15.05 -2.98,4.79 -2.7,10.89 -10.8,11.48 0.18,2.71 -3.29,4.16 -3.6,8.31 5.27,0.23 16.55,0.58 17.52,8.71 -2.57,3.19 -2.54,7.78 -5.76,11.09 -0.02,9.21 10.95,3 12.48,9.11 5.04,3.28 6.44,4.9 14.16,8.71 1.64,2.2 4.22,7.34 6.48,8.71 2.88,4.73 7.1,4.04 8.16,10.29 1.1,0.11 1.57,5.49 2.88,6.33 0.98,2.49 8.91,1.29 9.12,-0.79 -1.37,-4.47 6.42,-5.98 8.4,-8.31 4.57,-1.1 6.82,-2.28 11.04,-6.33 1.1,-7.16 -1.97,-13.82 2.16,-17.02 4.68,-1.15 7.77,9.32 9.12,0.4 2.15,-6.62 5.02,-9.74 11.76,-5.15 6.03,-1.03 12.97,4.91 17.76,7.13 7.88,5.44 22.02,3.7 29.04,8.71 6.52,-0.76 12.69,3.75 19.92,3.96 8.77,2.86 15.94,4.02 7.92,11.09 22.01,8.51 51.21,6.3 62.64,29.69 -3.02,5 0.57,8.9 -7.68,6.73 -5.17,6.79 0.94,14.32 -7.2,15.44 -12.35,0.54 -9.73,10.9 -14.4,17.02 4.72,5.39 -4.58,9.32 -5.28,15.44 -7.67,4.19 6.16,12.36 -0.24,19.4 -3.97,9.52 -2.89,22.81 0.15,34.86 -1.45,6.55 9.54,23.56 -3.27,21.36 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));