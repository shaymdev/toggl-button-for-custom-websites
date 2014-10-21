# Toggl Button for Custom Websites Chrome extension

*__Disclaimer:__ This is not the official Toggl Button extension. This is a modified version that gives you the ability to put the Toggl button on private and less popular website domains.*

All the convenience of the [official "Toggl Button" extension][96], with the added benefit of custom websites. To be clear, this extension is still limited to the services listed below. What it does allow is the usage of any of those services on any web domain that is hosting them. For example, if you have a private installation of [Trac][25], you will be able to use the Toggl button on http://trac.yourwebsite.com just as easily as you would on http://trac.wordpress.org.

## Compatible services
  - [TeamWeek][2]
  - [Pivotal Tracker][3]
  - [GitHub][4]
  - [Asana][5]
  - [Unfuddle][6]
  - [GitLab][7]
  - [Trello][8]
  - [Worksection][9]
  - [Redbooth (old UI)][10]
  - [Podio][11]
  - [Basecamp][12]
  - [JIRA][13]
  - [Producteev][14]
  - [Bitbucket][15]
  - [Sifter][16]
  - [Google Docs][17]
  - [Redmine][18]
  - [YouTrack][19]
  - [CapsuleCRM][20]
  - [Xero][21]
  - [Zendesk][22]
  - [Any.do][23]
  - [Todoist][24]
  - [Trac][25]
  - [Wunderlist][26]
  - [Toodledo][27]

## Installing from the Web Store

(Chrome Web Store URL TBD)

## Installing from Source

1.  Clone the repository: `git clone git://github.com/sfarbota/toggl-button/tree/custom-websites`
2.  Navigate to `chrome://extensions/` and enable "Developer Mode".
3.  Choose "Load unpacked extension..."
4.  Open the src directory in the toggl-button directory you just cloned and follow the prompts to install.

## Using the Button
1.  Log in to your [Toggl][1] account and keep yourself logged in (no need to keep the tab open).
2.  Go to your [TeamWeek][2], [Pivotal Tracker][3], [Github][4], [Asana][5], [Unfuddle][6], [Gitlab][7],
[Trello][8], [Worksection][9], [Redbooth][10], [Podio][11], [Basecamp][12], [JIRA][13], [Producteev][14],
[Bitbucket][15], [Stifer][16], [Google Docs][17], [Redmine][18], [YouTrack][19], [CapsuleCRM][20],
[Xero][21], [Zendesk][22], [Any.do][23], [Todoist][24], [Trac][25], [Wunderlist][26], [Toodledo][27] account and start your Toggl timer there. You may also use a custom domain if you have added it in the Settings page.
3.  To stop the current running timer:
  - press the button again
  - start another time entry inside your account.
  - go to Toggl to stop or edit your time entry.

## Custom websites
If you use a setup where one of the supported services is on a custom domain, you can customize the extension to fit your needs. This is where this unofficial version really shines. Just go to the extension's Settings page, check the option for "Custom websites", and add your custom domain to the list by clicking "+ Add new custom website" at the bottom of the list. You can also remove existing domains from the list if you do not use Toggl on those websites. Why waste precious time loading JavaScript you won't use?

## Contributing
Want to contribute? Great! Just fork the project, make your changes and open a [Pull Request][99]

Don't know how to start? Just check out the [user requested services][97] that have not yet been implemented, pick one and start hacking.

[1]: https://www.toggl.com/
[2]: https://teamweek.com/
[3]: https://www.pivotaltracker.com/
[4]: https://github.com/
[5]: http://asana.com/
[6]: http://unfuddle.com/
[7]: https://gitlab.com/
[8]: https://trello.com/
[9]: http://worksection.com/
[10]: https://redbooth.com/
[11]: https://podio.com/
[12]: https://basecamp.com/
[13]: https://www.atlassian.com/software/jira
[14]: https://www.producteev.com/
[15]: https://www.bitbucket.org/
[16]: https://www.sifterapp.com/
[17]: https://docs.google.com/
[18]: http://www.redmine.org/
[19]: http://www.jetbrains.com/youtrack/
[20]: http://www.capsulecrm.com/
[21]: https://www.xero.com/
[22]: https://www.zendesk.com/
[23]: http://www.any.do/
[24]: https://todoist.com/
[25]: http://trac.edgewall.org/
[26]: https://www.wunderlist.com
[27]: https://www.toodledo.com/
[96]: https://github.com/toggl/toggl-button
[97]: https://github.com/toggl/toggl-button/wiki/User-requested-buttons
[99]: https://github.com/toggl/toggl-button/pulls
