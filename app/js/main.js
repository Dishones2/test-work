$(function () {

    setInterval(function () {
        $('.form__item').each(function () {
            $(this).find('.form__input').each(function () {
                if ($(this).val() != '') {
                    $(this).removeClass('form__input--empty');
                } else {
                    $(this).addClass('form__input--empty');
                }
            })
        })
    });

    $('.form__range-input').ionRangeSlider({
        grid: true,
        values: [
            "Не владею", "Использую готовые <br> решения", "Использую готовые решения и умею и переделывать", "sd", "Пишу сложный JS с нуля"
        ],
        force_edges: true,
        hide_min_max: true,
        hide_from_to: true,
    });

    $('.header__nav-btn').on('click', function () {
        $('.header__nav-btn').toggleClass('header__nav-btn--close');
        $('.header__menu').toggleClass('header__menu--active');
    })

    
    $('input, select').styler({
        onFormStyled: function () {
            _dropdown = $('.jq-selectbox__dropdown');
            _dropdown.find('ul').wrap('<div class="scroll-pane" />');
        },
        onSelectOpened: function () {
            var _ul = $(this).find('.jq-selectbox__dropdown ul');
            _ul.jScrollPane()
        }
    });

})