/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_gwclouduser$ref: FragmentReference;
declare export opaque type Layout_gwclouduser$fragmentType: Layout_gwclouduser$ref;
export type Layout_gwclouduser = {|
  +username: ?string,
  +firstName: ?string,
  +lastName: ?string,
  +$refType: Layout_gwclouduser$ref,
|};
export type Layout_gwclouduser$data = Layout_gwclouduser;
export type Layout_gwclouduser$key = {
  +$data?: Layout_gwclouduser$data,
  +$fragmentRefs: Layout_gwclouduser$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Layout_gwclouduser",
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
(node/*: any*/).hash = 'a27a80b22cddd895e288e7935327583d';
module.exports = node;
