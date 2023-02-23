const diagCount = $('#mainImageDiag').children().length;
const diagWidth = 100 / diagCount;
const diagWrapWidth = (diagCount + 1) * diagWidth;
const diagTransform = 'sKewX(15deg) translate(-40%, 0px)';

$(()=> {
    setDiagCss(diagWidth, diagWrapWidth, 'row', 'hidden', diagTransform); 
})

function setDiagCss(width, wrapWidth, direction, overflow, transform) {
    $('#mainImageDiag').css('width', wrapWidth + '%');
    $('#mainImageDiag').css('flex-direction', direction);
    $('#mainImageDiag').css('overflow', overflow);
    $('.diagH').css('width', width + '%');
    $('.diagH').css('transform', transform);
}

$(window).on('resize', () => {
    let windowWidth = $(window).width();

    if (windowWidth < 576) {
        setDiagCss(95, 95, 'column', 'scroll', 'unset');
    } else {
        setDiagCss(diagWidth, diagWrapWidth, 'row', 'hidden', diagTransform); 
    }
})
