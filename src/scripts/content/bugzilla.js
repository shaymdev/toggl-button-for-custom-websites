/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('input[name=id]', {}, function (elem) {
  debugger;
  var link,
    selectorForSummary = '#short_desc_nonedit_display',
    summary = document.querySelector(selectorForSummary),
    description = elem.value + " - " + summary.textContent;

  link = togglbutton.createTimerLink({
    className: 'bugzilla',
    description: description,
    projectName: 'Bugs'
  });

  if ($('#summary_alias_container') !== undefined) {
    $('#summary_alias_container').appendChild(link);
  }
});
