/**
 * @flow
 * @relayHash cc7f6292cf177df4ea6756f0490121a3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_gwclouduser$ref = any;
export type App_UserDetails_QueryVariables = {||};
export type App_UserDetails_QueryResponse = {|
  +gwclouduser: ?{|
    +$fragmentRefs: Layout_gwclouduser$ref
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
    ...Layout_gwclouduser
  }
}

fragment Layout_gwclouduser on UserDetails {
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
            "name": "Layout_gwclouduser",
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
    "text": "query App_UserDetails_Query {\n  gwclouduser {\n    ...Layout_gwclouduser\n  }\n}\n\nfragment Layout_gwclouduser on UserDetails {\n  username\n  firstName\n  lastName\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '9654192fb9756019c6bba7524ec85809';
module.exports = node;
