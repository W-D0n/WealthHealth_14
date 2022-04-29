export const tableHeaders = [
  {
    field: 'firstName',
    headerName: 'First Name',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    flex: 1,
    minWidth: 100,
  },
  {
    type: 'number',
    field: 'startDate',
    headerName: 'Start Date',
    flex: 0.6,
    minWidth: 100,
    valueFormatter: (params) => {
      const valueFormatted = new Date(params.value).toLocaleDateString();
      return `${valueFormatted}`;
    },
  },
  {
    field: 'department',
    headerName: 'Department',
    flex: 1,
    minWidth: 100,
  },
  {
    type: 'number',
    field: 'birthDate',
    headerName: 'Date of Birth',
    flex: 1,
    minWidth: 100,
    valueFormatter: (params) => {
      const valueFormatted = new Date(params.value).toLocaleDateString();
      return `${valueFormatted}`;
    },
  },
  {
    field: 'street',
    headerName: 'Street',
    flex: 1,
    minWidth: 180,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,
    minWidth: 100,
  },
  {
    type: 'number',
    field: 'zip',
    headerName: 'Zip Code',
    flex: 1,
    minWidth: 100,
  }
];
export const departments = [
  {
    id: 1,
    label: 'Sales'
  },
  {
    id: 2,
    label: 'Marketing'
  },
  {
    id: 3,
    label: 'Engineering'
  },
  {
    id: 4,
    label: 'Human Resources'
  },
  {
    id: 5,
    label: 'Legal'
  }
];
export const states = [
  { label: "Alabama", id: 0 },
  { label: "Alaska", id: 1 },
  { label: "Arizona", id: 2 },
  { label: "Arkansas", id: 3 },
  { label: "California", id: 4 },
  { label: "Colorado", id: 5 },
  { label: "Connecticut", id: 6 },
  { label: "Delaware", id: 7 },
  { label: "District of Columbia", id: 8 },
  { label: "Florida", id: 9 },
  { label: "Georgia", id: 10 },
  { label: "Hawaii", id: 11 },
  { label: "Idaho", id: 12 },
  { label: "Illinois", id: 13 },
  { label: "Indiana", id: 14 },
  { label: "Iowa", id: 15 },
  { label: "Kansa", id: 16 },
  { label: "Kentucky", id: 17 },
  { label: "Lousiana", id: 18 },
  { label: "Maine", id: 19 },
  { label: "Maryland", id: 20 },
  { label: "Massachusetts", id: 21 },
  { label: "Michigan", id: 22 },
  { label: "Minnesota", id: 23 },
  { label: "Mississippi", id: 24 },
  { label: "Missouri", id: 25 },
  { label: "Montana", id: 26 },
  { label: "Nebraska", id: 27 },
  { label: "Nevada", id: 28 },
  { label: "New Hampshire", id: 29 },
  { label: "New Jersey", id: 30 },
  { label: "New Mexico", id: 31 },
  { label: "New York", id: 32 },
  { label: "North Carolina", id: 33 },
  { label: "North Dakota", id: 34 },
  { label: "Ohio", id: 35 },
  { label: "Oklahoma", id: 36 },
  { label: "Oregon", id: 37 },
  { label: "Pennsylvania", id: 38 },
  { label: "Rhode Island", id: 39 },
  { label: "South Carolina", id: 40 },
  { label: "South Dakota", id: 41 },
  { label: "Tennessee", id: 42 },
  { label: "Texas", id: 43 },
  { label: "Utah", id: 44 },
  { label: "Vermont", id: 45 },
  { label: "Virginia", id: 46 },
  { label: "Washington", id: 47 },
  { label: "West Virginia", id: 48 },
  { label: "Wisconsin", id: 49 },
  { label: "Wyoming", id: 50 }
]
export const allEmployees = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "birthDate": 457653600000,
    "street": "111 8th Ave",
    "city": "New York",
    "state": "New York",
    "zip": "10011",
    "startDate": 1616367600000,
    "department": "Sales"
  },
  {
    "id": 2,
    "firstName": "Patrick",
    "lastName": "Chaun",
    "birthDate": 630111600000,
    "street": "65 las vegas boulevard",
    "city": "Las Vegas",
    "state": "Nevada",
    "zip": "88901",
    "startDate": 1627250400000,
    "department": "Marketing"
  },
  {
    "id": 3,
    "firstName": "Delphine",
    "lastName": "Doe",
    "birthDate": 673394400000,
    "street": "3 Beale street",
    "city": "Memphis",
    "state": "Tennesse",
    "zip": "37501",
    "startDate": 1546470000000,
    "department": "Engineering"
  },
  {
    "id": 4,
    "firstName": "Augustin",
    "lastName": "Banjo",
    "birthDate": 499647600000,
    "street": "931 Thomas Jefferson Parkway",
    "city": "Charlottesville",
    "state": "Virginia",
    "zip": "22902",
    "startDate": 1535752800000,
    "department": "Human Resources"
  },
  {
    "id": 5,
    "firstName": "Catherine",
    "lastName": "Manson",
    "birthDate": 261266400000,
    "street": "10236 Charing Cross Rd",
    "city": "Los Angeles",
    "state": "California",
    "zip": "90024",
    "startDate": 1647298800000,
    "department": "Legal"
  },
  {
    "id": 6,
    "firstName": "Hoeger",
    "lastName": "Mall",
    "birthDate": 261266400000,
    "street": "10236 Charing Cross Rd",
    "city": "Los Angeles",
    "state": "California",
    "zip": "90024",
    "startDate": 1647298800000,
    "department": "Marketing"
  }
]