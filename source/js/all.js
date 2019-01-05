$(document).ready(function () {
    $('.btn-e-invoice').click(function (event) { 
        event.preventDefault();
        $('.invoice-form').toggleClass('d-none');
        $('.invoice-form-addr').toggleClass('d-none');
        $('.btn-e-invoice').toggleClass('active');
        $('.btn-invoice-addr').toggleClass('active');
    });
    $('.btn-invoice-addr').click(function (event) { 
        event.preventDefault();
        $('.invoice-form').toggleClass('d-none');
        $('.invoice-form-addr').toggleClass('d-none');
        $('.btn-e-invoice').toggleClass('active');
        $('.btn-invoice-addr').toggleClass('active');
    });
});