/**
 *
 * Asynchronously loads the component for Features
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
