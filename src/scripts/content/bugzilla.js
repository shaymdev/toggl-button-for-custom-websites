/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('input[name=id]', {}, function (elem) {
  var link,
    selectorForSummary = '#short_desc_nonedit_display',
    summary = document.querySelector(selectorForSummary),
    description = elem.value + " - " + summary.textContent,
	targetElement;

  link = togglbutton.createTimerLink({
    className: 'bugzilla',
    description: description,
    projectName: 'Bugs'
  });

  targetElement = $('#summary_alias_container') || $('#summary_container');
  if ( targetElement !== null ) {
    targetElement.appendChild(link);
  }
});
