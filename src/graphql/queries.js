// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSchool = `query GetSchool($id: ID!) {
  getSchool(id: $id) {
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
export const listSchools = `query ListSchools(
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFee = `query GetFee($id: ID!) {
  getFee(id: $id) {
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
export const listFees = `query ListFees($filter: ModelFeeFilterInput, $limit: Int, $nextToken: String) {
  listFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      school {
        id
        name
        city
        phone
        email
        address
        locality
      }
      admission_fee
      annual_fee
      up_votes
      down_votes
    }
    nextToken
  }
}
`;
export const getUserVotes = `query GetUserVotes($id: ID!) {
  getUserVotes(id: $id) {
    user_id
    fee_id
    vote
  }
}
`;
export const listUserVotess = `query ListUserVotess(
  $filter: ModelUserVotesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserVotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      user_id
      fee_id
      vote
    }
    nextToken
  }
}
`;
