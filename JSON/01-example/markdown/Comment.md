Represents a comment on a posting.

| Element | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| comment | Top level | comment data object | Required | |
| &nbsp; &nbsp; userId | ID of the user making the comment | string | Required | |
| &nbsp; &nbsp; discId | ID of the discussion that is being commented on | string | Required | |
| &nbsp; &nbsp; time | Time that the comment was posted | string | Optional | YYYY-MM-DD HH:MM:SS Greenwich Mean Time. Default is the time the comment is received by the server.|
| &nbsp; &nbsp; text | Text of the comment | string | Required | |