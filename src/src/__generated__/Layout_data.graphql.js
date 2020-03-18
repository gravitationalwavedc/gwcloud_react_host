/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_data$ref: FragmentReference;
declare export opaque type Layout_data$fragmentType: Layout_data$ref;
export type Layout_data = {|
  +username: ?string,
  +firstName: ?string,
  +lastName: ?string,
  +$refType: Layout_data$ref,
|};
export type Layout_data$data = Layout_data;
export type Layout_data$key = {
  +$data?: Layout_data$data,
  +$fragmentRefs: Layout_data$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Layout_data",
  "type": "UserDetails",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '148d7e2507a045f448d4e7931c13f669';
module.exports = node;
