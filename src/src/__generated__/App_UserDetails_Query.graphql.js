/**
 * @flow
 * @relayHash 4b1b88b97cd228ad03f59ff0e7f9e841
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
export type App_UserDetails_QueryVariables = {||};
export type App_UserDetails_QueryResponse = {|
  +gwclouduser: ?{|
    +$fragmentRefs: Layout_data$ref
  |}
|};
export type App_UserDetails_Query = {|
  variables: App_UserDetails_QueryVariables,
  response: App_UserDetails_QueryResponse,
|};
*/


/*
query App_UserDetails_Query {
  gwclouduser {
    ...Layout_data
  }
}

fragment Layout_data on UserDetails {
  username
  firstName
  lastName
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_UserDetails_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gwclouduser",
        "storageKey": null,
        "args": null,
        "concreteType": "UserDetails",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_UserDetails_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gwclouduser",
        "storageKey": null,
        "args": null,
        "concreteType": "UserDetails",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_UserDetails_Query",
    "id": null,
    "text": "query App_UserDetails_Query {\n  gwclouduser {\n    ...Layout_data\n  }\n}\n\nfragment Layout_data on UserDetails {\n  username\n  firstName\n  lastName\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'fe87545e426370ba8bba52c593d2838c';
module.exports = node;
