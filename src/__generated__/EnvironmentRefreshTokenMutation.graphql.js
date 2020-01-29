/**
 * @flow
 * @relayHash 708e3f06b60d5feb1bd2cafa87ff8f44
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EnvironmentRefreshTokenMutationVariables = {|
  refreshToken: string
|};
export type EnvironmentRefreshTokenMutationResponse = {|
  +refreshToken: ?{|
    +token: ?string,
    +refreshToken: ?string,
    +payload: ?any,
  |}
|};
export type EnvironmentRefreshTokenMutation = {|
  variables: EnvironmentRefreshTokenMutationVariables,
  response: EnvironmentRefreshTokenMutationResponse,
|};
*/


/*
mutation EnvironmentRefreshTokenMutation(
  $refreshToken: String!
) {
  refreshToken(refreshToken: $refreshToken) {
    token
    refreshToken
    payload
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "refreshToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "refreshToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "refreshToken",
        "variableName": "refreshToken"
      }
    ],
    "concreteType": "Refresh",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "refreshToken",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "payload",
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
    "name": "EnvironmentRefreshTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EnvironmentRefreshTokenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EnvironmentRefreshTokenMutation",
    "id": null,
    "text": "mutation EnvironmentRefreshTokenMutation(\n  $refreshToken: String!\n) {\n  refreshToken(refreshToken: $refreshToken) {\n    token\n    refreshToken\n    payload\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf0d59b65c9cce9720f6fb2da8cd4a39';
module.exports = node;
