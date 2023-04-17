## Prerequisites

- Node.js
- A Gmail account
- Google Cloud Console project with Gmail API enabled

## Setup

1. Clone this repository.

2. Install the required packages using the following command:

### npm install


3. Create a new project in [Google Cloud Console](https://console.cloud.google.com/) and enable the Gmail API. Follow the instructions [here](https://developers.google.com/gmail/api/quickstart/nodejs#step_1_turn_on_the_api_name).

4. Create OAuth2 credentials for your project. Follow the instructions [here](https://developers.google.com/gmail/api/quickstart/nodejs#step_2_set_up_the_sample).

5. Rename the `.env.example` file to `.env` and update the values with your Gmail account, OAuth2 credentials, and other configuration.

6. Start the application using the following command:

### npm start

7. Send a POST request to the `/send-email` endpoint with the following data:

{
"name": "John Doe",
"email": "johndoe@example.com",
"hazardList": [
"Hazard 1",
"Hazard 2",
"Hazard 3"
]
}

This will send an email to the specified email address with the name and hazard list.

## Configuration

You can configure the following environment variables in the `.env` file:

- `EMAIL_ADDRESS`: The email address of the Gmail account to use for sending emails.
- `PASSWORD`: The password of the Gmail account. (Deprecated)
- `CLIENT_ID`: The client ID of the OAuth2 credentials.
- `CLIENT_SECRET`: The client secret of the OAuth2 credentials.
- `REFRESH_TOKEN`: The refresh token of the OAuth2 credentials.
- `REDIRECT_URI`: The redirect URI of the OAuth2 credentials.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.