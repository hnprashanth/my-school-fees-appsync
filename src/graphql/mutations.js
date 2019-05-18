// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSchool = `mutation CreateSchool($input: CreateSchoolInput!) {
  createSchool(input: $input) {
    id
    name
    city
    phone
    email
    address
    locality
    fees {
      items {
        id
        admission_fee
        annual_fee
        up_votes
        down_votes
      }
      nextToken
    }
  }
}
`;
export const updateSchool = `mutation UpdateSchool($input: UpdateSchoolInput!) {
  updateSchool(input: $input) {
    id
    name
    city
    phone
    email
    address
    locality
    fees {
      items {
        id
        admission_fee
        annual_fee
        up_votes
        down_votes
      }
      nextToken
    }
  }
}
`;
export const deleteSchool = `mutation DeleteSchool($input: DeleteSchoolInput!) {
  deleteSchool(input: $input) {
    id
    name
    city
    phone
    email
    address
    locality
    fees {
      items {
        id
        admission_fee
        annual_fee
        up_votes
        down_votes
      }
      nextToken
    }
  }
}
`;
export const createFee = `mutation CreateFee($input: CreateFeeInput!) {
  createFee(input: $input) {
    id
    school {
      id
      name
      city
      phone
      email
      address
      locality
      fees {
        nextToken
      }
    }
    admission_fee
    annual_fee
    up_votes
    down_votes
  }
}
`;
export const updateFee = `mutation UpdateFee($input: UpdateFeeInput!) {
  updateFee(input: $input) {
    id
    school {
      id
      name
      city
      phone
      email
      address
      locality
      fees {
        nextToken
      }
    }
    admission_fee
    annual_fee
    up_votes
    down_votes
  }
}
`;
export const deleteFee = `mutation DeleteFee($input: DeleteFeeInput!) {
  deleteFee(input: $input) {
    id
    school {
      id
      name
      city
      phone
      email
      address
      locality
      fees {
        nextToken
      }
    }
    admission_fee
    annual_fee
    up_votes
    down_votes
  }
}
`;
export const createUserVotes = `mutation CreateUserVotes($input: CreateUserVotesInput!) {
  createUserVotes(input: $input) {
    user_id
    fee_id
    vote
  }
}
`;
export const updateUserVotes = `mutation UpdateUserVotes($input: UpdateUserVotesInput!) {
  updateUserVotes(input: $input) {
    user_id
    fee_id
    vote
  }
}
`;
export const deleteUserVotes = `mutation DeleteUserVotes($input: DeleteUserVotesInput!) {
  deleteUserVotes(input: $input) {
    user_id
    fee_id
    vote
  }
}
`;
