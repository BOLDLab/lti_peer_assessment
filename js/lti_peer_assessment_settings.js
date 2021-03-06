/**
 * @Author: ps158
 * @Date:   2017-03-28T09:28:19+11:00
 * @Last modified by:   ps158
 * @Last modified time: 2017-05-01T14:02:25+10:00
 */

$(document).ready(function() {
  var app = app || {};
$(".admin").toggle();
// hide Admin only elements - allows super user to see instructor view.
if(document.is_super) {
  			var str = '<button id="hide_admin" class="btn btn-default" style="z-index: 2; position: fixed; top: 100px; right: 5px;">Admin Options</button>';

  			$("body").prepend(str);

  			$("#hide_admin").bind("click", function() {
               $(".admin").toggle();
  			});
}

  app.toggleSelect =
   function() {
      if($('select[name=score_calculation] option:selected').attr("value") == 'standard_mean') {
          $("select[name='spark_plus']").addClass('hide').closest('.btn-group').addClass('hide');
          $("input[name='assignment_score']").addClass('hide').prev('label').addClass('hide');
        //  $("input[name='allow_self_assessment'][value='no']").prop('checked', true);
          $("input[name='allow_self_assessment'][type='radio'], input[name='include_self_in_mean_score'][type='radio']").prop('disabled', false);
          $("input[name='include_self_in_mean_score'][type='hidden']").remove();
          $("input[name='allow_self_assessment'][type='hidden']").remove();
      } else {
          $("select[name='spark_plus']").removeClass('hide').closest('.btn-group').removeClass('hide');
          $("input[name='assignment_score']").removeClass('hide').prev('label').removeClass('hide');
          if($("input[name='allow_self_assessment'][type='hidden']").length === 0) {
              $("input[name='allow_self_assessment'][value='yes'][type='radio']").prop('checked', true).after("<input type='hidden' name='allow_self_assessment' value='yes'/>");
          }

          if($("input[name='include_self_in_mean_score'][type='hidden']").length === 0) {
              $("input[name='include_self_in_mean_score'][value='yes'][type='radio']").prop('checked', true).after("<input type='hidden' name='include_self_in_mean_score' value='yes'/>");
          }

          $("input[name='allow_self_assessment'][type='radio'], input[name='include_self_in_mean_score'][type='radio']").prop('disabled', true);
      }
  };

    $("input[name=allow_self_assessment]").change(function(e) {
        if($(this).val() != "yes") {
            $("input[name=include_self_in_mean_score][value=no][type='radio']").trigger("click");
            $("input[name=include_self_in_mean_score][type='radio']").prop("disabled", true);
        } else {
            $("input[name=include_self_in_mean_score][type='radio']").each(function() { $(this).prop("disabled", false); });
        }
    });

    $("select[name=score_calculation]").change(
      function(e) {
          app.toggleSelect();
      }
    );

    app.toggleSelect();
});
