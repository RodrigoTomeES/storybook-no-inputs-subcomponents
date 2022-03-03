import { FunctionComponent } from 'react';

import { TypeTestProps } from './types';

/**
 * Test
 */
export const Test: FunctionComponent<TypeTestProps> = ({
  className = '',
  children,
}: TypeTestProps): JSX.Element => <div className={className}>{children}</div>;
