import { gql } from '@apollo/client'

export const SignupMutation = gql`
  mutation Signup($email: String!, $password: String!, $username: String!){
    signup(
      input: {
        email: $email,
        password: $password,
        username: $username
      }
    ) {
      token
    }
  }
`
