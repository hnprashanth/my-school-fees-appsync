// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateSchool = `subscription OnCreateSchool {
  onCreateSchool {
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
        user_id
      }
      nextToken
    }
  }
}
`;
export const onUpdateSchool = `subscription OnUpdateSchool {
  onUpdateSchool {
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
        user_id
      }
      nextToken
    }
  }
}
`;
export const onDeleteSchool = `subscription OnDeleteSchool {
  onDeleteSchool {
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
        user_id
      }
      nextToken
    }
  }
}
`;
export const onCreateFee = `subscription OnCreateFee {
  onCreateFee {
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
    user_id
  }
}
`;
export const onUpdateFee = `subscription OnUpdateFee {
  onUpdateFee {
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
    user_id
  }
}
`;
export const onDeleteFee = `subscription OnDeleteFee {
  onDeleteFee {
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
    user_id
  }
}
`;
export const onCreateUserVotes = `subscription OnCreateUserVotes {
  onCreateUserVotes {
    user_id
    fee_id
    vote
  }
}
`;
export const onUpdateUserVotes = `subscription OnUpdateUserVotes {
  onUpdateUserVotes {
    user_id
    fee_id
    vote
  }
}
`;
export const onDeleteUserVotes = `subscription OnDeleteUserVotes {
  onDeleteUserVotes {
    user_id
    fee_id
    vote
  }
}
`;
