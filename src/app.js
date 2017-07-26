import $ from 'jquery';
import {toGrammaticalNumber} from './grammatical-number-service.js';

$(function onDocumentReady() {
    $("#inputTax").change(function onChange() {
        const numeral = parseInt($(this).val());

        $("#tax").html(toGrammaticalNumber(numeral));
    });
});