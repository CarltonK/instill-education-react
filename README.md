### Considerations ###
This app has been deployed on GCP as a cloud run service.
All resources(CD Pipeline/Cloud Run Service) have been declared using Terraform which has not been included as part of this project
Due to the speed of development all changes were commited directly to the main branch, in the event of a sprint based format I would further have a develop branch and smaller feature branches

### Testing ###
To showcase automated testing the project makes use of github actions to perform continuous integration
Simply create a PR towards the main branch and view tests on the actions tab of the repository

## Current Test Status ##

[![Tests](https://github.com/CarltonK/instill-education-react/actions/workflows/test.yaml/badge.svg)](https://github.com/CarltonK/instill-education-react/actions/workflows/test.yaml)

### Live Site ####
https://instill-education-app-v7gpzuhw2a-ew.a.run.app/
