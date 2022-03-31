export const EntityStructure: any = {
  thoughtLeader: {
    priority: 1,
    synonyms: [
      'thought leader',
      'TL',
      'TLs',
      'doctor',
      'clinician',
      'author',
      'investigator',
      'nomination',
    ],
    graphql: {
      queryName: 'thoughtLeaders',
      returnFields: {
        id: true,
        name: true,
        role: true,
        institutionName: true,
        disease: {
          id: true,
          name: true,
        },
        therapy: {
          id: true,
          name: true,
        },
        addressLine1: true,
        addressLine2: true,
        city: {
          id: true,
          name: true,
          pinCode: true,
        },
        state: {
          id: true,
          name: true,
        },
        country: {
          id: true,
          name: true,
        },
      },
    },
    filters: {
      disease: {
        tag: 'disease',
        graphqlArgName: 'disease',
      },
      therapy: {
        tag: 'therapy',
        synonyms: ['therapy area'],
        graphqlArgName: 'therapy',
      },
      city: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'city',
      },
      state: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'state',
      },
      country: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'country',
      },
      eu: {
        tag: 'location',
        priority: 2,
        synonyms: ['european union', 'europe'],
        // NOTE: This is a complex filter. Needs to be handled differently.
      },
      row: {
        tag: 'location',
        priority: 3,
        synonyms: ['rest of world', 'rest of the world'],
        // NOTE: This is a complex filter. Needs to be handled differently.
      },
    },
  },
  institution: {
    priority: 2,
    synonyms: ['institution', 'hospital', 'clinic', 'center'],
    graphql: {
      queryName: 'institutions',
      returnFields: {
        id: true,
        name: true,
        disease: {
          id: true,
          name: true,
        },
        therapy: {
          id: true,
          name: true,
        },
        addressLine1: true,
        addressLine2: true,
        city: {
          id: true,
          name: true,
          pinCode: true,
        },
        state: {
          id: true,
          name: true,
        },
        country: {
          id: true,
          name: true,
        },
      },
    },
    filters: {
      disease: {
        tag: 'disease',
        graphqlArgName: 'disease',
      },
      therapy: {
        tag: 'therapy',
        synonyms: ['therapy area'],
        graphqlArgName: 'therapy',
      },
      city: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'city',
      },
      state: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'state',
      },
      country: {
        tag: 'location',
        priority: 1,
        graphqlArgName: 'country',
      },
      eu: {
        tag: 'location',
        priority: 2,
        synonyms: ['european union', 'europe'],
      },
      row: {
        tag: 'location',
        priority: 3,
        synonyms: ['rest of world', 'rest of the world'],
      },
    },
  },
};
