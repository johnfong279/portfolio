# SushiroHK Self-Payment Kiosk User Guide Summary

This guide covers both customer-facing payment flows and staff/operations procedures for the SushiroHK self-payment kiosk.

## Overall Structure

- End-user screens and payment flows
- Payment-specific examples for Octopus and Global Payment
- Error references for scanning, Octopus, Global Payment, BBMSL, and printing
- Staff operations including hidden login, reprint, system management, day end, screen saver, void, and web portal administration

## Page-by-Page Summary

### Key Screens
Shows the full user journey: landing page, language selection, order review, confirmation, payment selection, payment-in-progress, and completion screens for Octopus, card, and Alipay.

Notable subsections:
- Landing Page
- Languages
- Order View
- Order View Confirm
- Payment
- Payment Process - Octopus
- Payment Finish - Octopus
- Payment Process - Credit Card
- Payment Finish - Credit Card
- Payment Process - Alipay

Image count downloaded from this page: 29

### Paid by Octopus
Demonstrates Octopus success and failure flows, with a pointer to the dedicated Octopus error reference for detailed troubleshooting.

Notable subsections:
- Success
- Fail
- Others messags

Notes from the page:
- Example
- Refer to the page:
- Old Version

Image count downloaded from this page: 1

### Paid by Global Payment
Demonstrates contactless and mobile wallet payment flows, including success, failure, and timeout outcomes.

Notable subsections:
- Contact-Less
- Success
- Fail
- Time out
- Mobile
- Success
- Fail
- Time out

Notes from the page:
- Old Verison

Image count downloaded from this page: 1

### Errors while scanning
Explains scan failures caused by invalid barcodes or payment tags attached to orders that are already being paid, paid, or cancelled.

Notes from the page:
- The kiosk will pop up this error after scanning some invalid bar code, which is not a payment tag.
- When the order records are not OK for payment, i.e. BEING PAY, PAID, CANCELLED. The kiosk will pop up this error after scanning the payment tag.

Image count downloaded from this page: 2

### Octopus Errors
Maps Octopus error screens to backend error codes, covering tap-again prompts, invalid cards, insufficient funds, quota exceeded, incomplete transactions, and retry behavior.

Notable subsections:
- Please tap card again error
- Invalid card error
- Insufficient fund error
- Quota exceed error
- Others
- Incomplete transaction error
- Please tap card again error
- Invalid card error
- Insufficient fund error
- Quota exceed error

Notes from the page:
- This error occurs while the following reasons.
- - 100016 - Card read error
- - 100017 - Card write error
- - 100020 - Card has not been polled before or no card present
- - 100032 - No card present

Image count downloaded from this page: 13

### Global Payment Errors
Contains screenshots and short notes for this topic.

Notes from the page:
- Generic Error format presents the response data from the API
- status:rspText [rspCode]

Image count downloaded from this page: 0

### BBMSL Errors
Defines the generic BBMSL error format and field layout used in API error messages.

Notes from the page:
- Generic Error format presents the response data from the API
- status:ErrorMessage [errorCode] (resultCode) {responseCode} responseCode_mapping_message

Image count downloaded from this page: 0

### Printing Errors
Shows common printer-related error screens and examples.

Notable subsections:
- Common Errors

Image count downloaded from this page: 4

### Enter the Staff Panel
Explains the hidden staff entry gesture and login flow. Staff reach the login panel by pressing the middle area of the welcome page 10 times within 3 seconds, then sign in with the same code and password as FTL POS.

Notable subsections:
- 1.Detail
- 2.
- 3
- Staff BackDoor

Notes from the page:
- To enter the staff panel. Press the middle area, in yellow, of the welcome page 10 times within 3 seconds.
- The login panel will pop up after the previous control. Enter the staff code and password same as FTL POS.

Image count downloaded from this page: 4

### Reprint Receipt
Explains how receipt reprints work, including the rule that only successful print jobs receive a `Reprint` label.

Notes from the page:
- There are differences in handling successful and failed print-job.
- We only add a Reprint label on the receipt for successful print-job.

Image count downloaded from this page: 2

### System Management
Describes the kiosk control screen used to view shop and kiosk codes, reboot or shut down the kiosk, reconnect the payment reader, and run reader tests.

Notes from the page:
- We provide an interface to control the kiosk
- - show the shop code
- - show the kiosk code
- - reboot and shut down the kiosk
- - off-and-on the payment reader connection

Image count downloaded from this page: 1

### Day End
Covers day-end success and retry flows, error handling, and how to inspect `dayEndResult` records. It also notes that `SETTLEMENT CONFIRM` must be enabled under `management/config/ECR`.

Notable subsections:
- Success
- Fail and retry
- An error occurred when the day-end processing
- Fujitsu Report Status
- How to check day-end records

Notes from the page:
- Please go to management/config/ECR/ ensure SETTLEMENT CONFIRM is turned on.
- 1. Select the DB to login
- 1. Press Connect
- 1. Open wo-kiosk-sushiro
- 1. open dayEndResult

Image count downloaded from this page: 6

### Screen-saver
Lists media specifications for kiosk screen saver images and videos.

Notable subsections:
- Image Spec
- Video Spec

Image count downloaded from this page: 1

### Void Transaction
Explains that unsupported tenders cannot be voided until void is enabled in `management/config/issuer/enable void`.

Notes from the page:
- If the tender is not supported void Transaction, the kiosk will display the following:
- Please enable the void function in management/config/issuer/enable void

Image count downloaded from this page: 2

### Web Management Portal
Documents the cloud admin portal, including login, report filters, custom date ranges, screen saver management, and `$3` coupon CSV management.

Notable subsections:
- login page
- Report
- Cutomized Report Day
- For example 2023-04-01 00:00-2023-05-01 00:00
- Management Screen Saver
- $3 coupon CSV Management

Notes from the page:
- https://sushirohk-cloud-admin.azurewebsites.net/dashboard
- By default, all reports will use the current date, for example, 2023-05-11 00:00-2023-05-12 00:00, and select all shops to query data.
- You can customize any date range by clicking the input fields of the sales date.
- 1
- 2

Image count downloaded from this page: 21

