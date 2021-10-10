# [Booking.com](https://booking.com) test cases

## Test case #1
### Objective
Hotel search by criteria
### Preconditions
1. The main page of [Booking](https://booking.com) site is opened
2. "Stays" link in navigation is active

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Enter in "Where are you going?" field value containing cyrillic and latin letters | Entered value is shown in "Where are you going?" field and there is a dropdown with places containing entered value |
| 2 | Click on the one of the proposed places in dropdown                         | Clicked place is shown in "Where are you going?" field                |
| 3 | Click on "Check in - Check out" field                                       | Datepicker below "Check in - Check out" field is shown                |
| 4 | Choose date in datepicker                                                   | Chosen date is shown in "Check in - Check out" field                  |
| 5 | Click on the last field of form("adults", "children", "rooms")              | There is a dropdown containing "Adults", "Children" and "Rooms" fields |
| 6 | Changing value in one of the proposed fields("Adults", "Children", "Rooms") | Entered value is shown in edited field("Adults", "Children", "Rooms") |
| 7 | Click on "I'm travelling for work" checkbox under the form                  | Checkbox is marked as checked                                          |
| 8 | Click on "Search" button to the right of the form                           | List of satisfying places is shown                                    |

## Test case #2
### Objective
Search for attractions
### Preconditions
1. The main page of [Booking](https://booking.com) site is opened

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Click on "Attractions" link in navigation | Attractions searching page is opened |
| 2 | Enter in text input value containing cyrillic and latin letters | Entered value is shown in text input and there is a dropdown with attractions containing entered value |
| 3 | Click on the one of the proposed values in dropdown | Chosen value is shown in text input |
| 4 | Click on "Search" button | Searching attraction(or list of proposed attractions) is(are) shown |

## Test case #3
### Objective
Watch for bookings
### Preconditions
1. The main page of [Booking](https://booking.com) site is opened
2. User is logged in

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Click on profile button on the top of page | There is a dropdown with fields: Manage account, Bookings, Genius loyalty program, Reviews, Saved, Sign Out |
| 2 | Click on "Bookings" button in dropdown | There is a list of bookings for current user |

## Test case #4
### Objective
Add property to Saved
### Preconditions
1. User is logged in
2. Hotel search form is filled accroding to [Test case #1](#test-case-1)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Scroll for property card you like and click save icon(like icon) on property card image | There is a dropdown of your existing saved lists and text input to create a new one |
| 2.1 | Enter value in "Create list" field | Entered value is shown in "Create list" field |
| 2.2 | Click on any of the current lists | Checkbox is marked as checked and property saved to that list(-s) | 

## Test case #5
### Objective
Watch for saved properties
### Preconditions
1. The main page of [Booking](https://booking.com) site is opened
2. User is logged in

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Click on profile button on the top of page | There is a dropdown with fields: Manage account, Bookings, Genius loyalty program, Reviews, Saved, Sign Out |
| 2 | Click on "Saved" button in dropdown | List of saved properties for current save list and dropdown of lists are shown |

## Test case #6
### Objective
Delete saved list
### Preconditions
1. User is logged in
2. Saved page is opened according to [Test Case #5](#test-case-5)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Click on dropdown of saved lists at the top of page | Saved lists are shown |
| 2 | Find out list you want to delete and Click on delete icon(cross icon) opposite to the name of list  | There is an alert message "Are you sure? This can't be undone." |
| 3 | Click "Ok" in alert window | Saved list is deleted |

## Test case #7
### Objective
Choose property for reservation
### Preconditions
1. User is logged in
2. Hotel search form is filled accroding to [Test case #1](#test-case-1)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Choose a suitable property from list and click on property card | Property info page is opened  |
| 2 | Click on "Reserve" button on the top of property info section | Page is scrolled down to the list of available rooms |
| 3 | Choose a suitable type and click on "Select amount" dropdown opposite to chosen type | There is a dropdown with available amount of rooms of this type |
| 4 | Click on suitable number of rooms | Chosen amount is shown below "Select amount" column |
| 5 | Click on "I'll reserve" button | Page with reservation form is opened |

## Test case #8
### Objective
Reserve suitable room(-s)
### Preconditions
1. User is logged in
2. Reservation form is opened according to [Test case #7](#test-case-7)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Choose for the question "Are you travelling for work?" one of the proposed answers: "Yes" or "No" | Chosen answer is marked |
| 2 | Enter value containing cyryllic or latin letters in fields "First name" and "Last name" | Entered values are shown in fields "First name" and "Last name" |
| 3 | Enter value containing only latin letters in valid email form(a@b.c) in fields "Email address" and "Confirm email address" | Entered values are shown in fields "Email address" and "Confirm email address" |
| 4 | Choose for the question "Who are you booking for?" one of the proposed answers: "I am the main guest" or "Booking is for someone else" | Chosen answer is marked |
| 5 | Enter value containing cyryllic or latin letters in field "Full guest name" | Entered value is shown in field "Full guest name" |
| 6 | Click on any of checkboxes: "Bike rentals for Booking guests (based on availability)" and "I'm interested in renting a car" | Clicked checkboxes are marked as checked |
| 7 | Enter value containing cyryllic or latin letters in field "Special requests" | Entered value is shown in field "Special requests" |
| 8 | Click on "Your arrival time" field dropdown | There is a dropdown with proposed time intervals |
| 9 | Click on one of the proposed intervals in dropdown | Chosen interval is shown in field "Your arrival time" |
| 10 | Click on button "Next: Final details" | The next page of reservation form is opened |
| 11 | Enter values containing latin or cyrrilic letters and numbers in fields "Address", "City" and "Zip/Post code" | Entered values are shown in fields "Address", "City" and "Zip/Post code" |
| 12 | Click on "Country/region" field dropdown | There is a dropdown with countries list |
| 13 | Click on any country from dropdown | Chosen country is shown in "Country/region" field |
| 14 | Click on the one of the variant: "Pay for your booking on 28 Jan 2022" or "Pay now" | Clicked variant is marked |
| 15 | Enter value containing latin or cyrrilic letters in field "Cardholder's name" | Entered value is shown in field "Cardholder's name" |
| 16 | Enter value containing numbers and spaces in field "Card number" | Entered value is shown in field "Card number" |
| 17 | Enter values containing numbers in fields "Expiry date" and "CVC" | Entered values are shown in fields "Expiry date" and "CVC" |
| 18 | Click on checkbox "Save card for future purchases" | Clicked checkbox is marked as checked |
| 19 | Click on button "Complete booking" | Booking is completed and added to the bookings list | 

## Test case #9
### Objective
Delete booking from bookings list 
### Preconditions
1. User is logged in
2. Bookings list page is opened according to [Test case #3](#test-case-3)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Find out booking to delete and click on ellipsis on booking card | There is a dropdown with 2 actions: "Book again" and "Remove booking" |
| 2 | Click on "Remove booking" button in dropdown | There is a modal window with text "You're about to permanently remove this booking from your bookings list." and 2 buttons "Remove" and "Keep" | 
| 3 | Click on "Remove" button on modal windown | Booking is deleted and not shown in booking list |

## Test case #10
### Objective
Add new booking to bookings list
### Preconditions
1. User is logged in
2. Bookings list page is opened according to [Test case #3](#test-case-3)

| # | Step | Expected Result |
| - | ---- | --------------- |
| 1 | Click on "Can't find a booking?" button at the top of list section | There is a dropdown with "Add booking" button and 2 fields: "Confirmation number" and "PIN Code" |
| 2 | Enter 9 digits in "Confirmation number" field | Entered value is shown in "Confirmation number" field |
| 3 | Enter 4 digits in "PIN code" field | Entered value is shown in "PIN code" field |
| 4 | Click on "Add booking" button | If booking with entered values exists then booking is added to bookings list |
