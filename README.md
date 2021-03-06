# README #

## Peer Assessment plugin for ExpressionEngine(EE) ##

Provides a form that allows students to grade other group members' contributions. Instructors download an Excel report that provides a full breakdown and mean score of all group members' peer review.

This plugin requires [EE Learning Tools Integration](https://github.com/BOLDLab/learning_tools_integration)

## New in Version 0.8.4 ##
Added instructor preview group.  This provides the same group for every course instructor as an example when accessing via student preview in Blackboard Learn<sup>&copy;</sup>.

## Quick Setup Guide ##

* Download [EE Learning Tools Integration](https://github.com/BOLDLab/learning_tools_integration)
* Install using the [EE add-on installation instructions](https://docs.expressionengine.com/latest/cp/addons/index.html).

## EE Tags Provided ##
```
{exp:lti_peer_assessment:feedback}

      {total} <!-- total mean score given by all peers -->
      {total_max} <!-- max total score possible -->
      {message} <!-- user feedback message -->

      {criteria} <!-- list of rubric criteria  -->
          {criterion} <!-- criterion title -->
          {mean} <!-- mean score given by peers for this criterion -->
          {max}  <!-- max score possible for this criterion -->
      {/criteria}

      {comments} <!-- anonymised list of comments from peers -->
          {comment}
      {/comments}
{/exp:lti_peer_assessment:feedback}
```

```
{exp:lti_peer_assessment:settings}
```
Allows super users to change settings for peer review/assessment, available settings are:

* Show/Hide grade column in feedback to students from group
* Show/Hide comments in feedback to students from group
* Allow/Disallow self-assessment
* Include self assessment in mean score calculation for group
* Set maximum score for peer assessment/review


```


{exp:lti_peer_assessment:max_grade}
```

Get maximum score for assessment derived from rubric or added in settings.


```
{exp:lti_peer_assessment:form}
      {has_rubric} <!-- conditional to check if this assessment has a rubric.-->

      {form_open}
        {table_rows} <!-- list of table rows for user input -->
          {screen_name}
          {score_input}
          {comment_textarea}
        {/table_rows}  
      {form_close}

      <!-- rubric javascript, always use conditional -->
      {if has_rubric}
          {rubric_javascript}
      {/if}

{/exp:lti_peer_assessment:form}
```

Renders a table containing all group members and input fields for score, comments.  Any attached rubric will replace the score text input field automagically with a button to open that rubric.

```
{exp:lti_peer_assessment:download_csv}
```

Download an CSV report for instructors containing a breakdown of all peer-assessed students.

```
{exp:lti_peer_assessment:download_excel}
```

**EXPERIMENTAL** Download an excel report for instructors containing a breakdown of all peer-assessed students.

```
{exp:lti_peer_assessment:help_link section='section_name' [sub_section='sub_section']}
```
Provides contextual help for most of the above features. Configuration for this is in the `help_links.ini` file.

### Contribution guidelines ###
If you would like to contribute to this plug-in please contact [Paul Sijpkes](mailto:paul.sijpkes@newcastle.edu.au)
