/**
 *
 * Asynchronously loads the component for Realtors
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
