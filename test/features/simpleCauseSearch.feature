Feature: Test easyfundraising find a cause feature

    Scenario: Check if user can find a cause with three character search
        Given user open the website "https://www.easyfundraising.org.uk/"
        And  Go to the link "Find a cause" on the top of the page
        When User Enter "mac" in the search field
        And User select the 3rd cause from the suggestion list
        And click Search Cause
        Then Confirm with a message that the selected third Cause exists in the Search results