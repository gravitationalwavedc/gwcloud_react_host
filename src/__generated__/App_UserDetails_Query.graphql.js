/**
 * @flow
 * @relayHash 74717536eabd404c082ff513226b5717
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type App_UserDetails_QueryVariables = {||};
export type App_UserDetails_QueryResponse = {|
  +gwclouduser: ?{|
    +username: ?string,
    +firstName: ?string,
    +lastName: ?string,
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
    username
    firstName
    lastName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_UserDetails_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "App_UserDetails_Query",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "App_UserDetails_Query",
    "id": null,
    "text": "query App_UserDetails_Query {\n  gwclouduser {\n    username\n    firstName\n    lastName\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '03eff934c50f46ee0426f99e565a27e3';
module.exports = node;
