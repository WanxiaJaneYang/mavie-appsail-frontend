# Frontend Project Stress Test Documentation

## Overview

This stress test script is designed to simulate user interactions with the frontend of our web application to ensure that it can handle a specified load. The script uses [k6](https://k6.io/), a modern load testing tool, to simulate multiple users performing a series of actions such as logging in, retrieving product information, and more.

## Prerequisites

Before running the stress test, ensure you have the following:

- k6 installed on your machine. Visit [k6 installation guide](https://k6.io/docs/getting-started/installation/) for instructions.
- Node.js and npm (if k6 is to be installed via npm).

## Configuration

The script is pre-configured with the following stages:

- Ramp up to 10 users over 3 minutes.

You can adjust these settings in the `options` object to fit your testing requirements.

## Running the Test

To execute the stress test, use the following command in your terminal:

```bash
k6 run stress-test.js > detail10User3m.log 2>&1
```

### Test Script Actions

1. **User Authentication**
   - Simulates a user login using predefined user credentials.

2. **Retrieve Product List**
   - Fetches a list of products available to the logged-in user.

3. **Get Product Info**
   - Selects a random product from the list and retrieves detailed information about it.

4. **Get Product Filter**
   - Retrieves filter options for the selected product, simulating user interaction with product filters.

5. **Get Product Rating**
   - Fetches the rating for the selected product, emulating a user's interest in product quality.

6. **Get Product Feature Details**
   - Chooses a random feature filter and retrieves detailed information for the selected product based on this filter.
