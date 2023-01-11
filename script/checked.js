$(document).ready(function() {
    $('input:radio[name="contact"]').change(function() {
        if ($(this).val() === 'radioYes') {
            $(".radioYesContainer label input").removeAttr('disabled');
        }
        else {
            $(".radioYesContainer label input").prop("disabled", true);
            $(".radioYesContainer label input").prop('checked', false);
        }
    });


    $('.politicalParticipationPosition input').prop("disabled", true);
    $(".politicalParticipationPosition input").prop('checked', false);
    
    $('input:checkbox[name="politicalParticipation"]').change(function(){
    if($(this).is(":checked")) {
        $('.politicalParticipationPosition input').removeAttr("disabled");
    } else {
        $('.politicalParticipationPosition input').prop("disabled", true);
        $(".politicalParticipationPosition input").prop('checked', false);
    }
});
});
