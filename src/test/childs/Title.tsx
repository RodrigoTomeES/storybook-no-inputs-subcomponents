import { FunctionComponent } from 'react';

import { TypeChildProps } from './types';

export const Title: FunctionComponent<TypeChildProps> = ({
  className = '',
  children,
}: TypeChildProps): JSX.Element => (
  <div className={className}>{children}</div>
);

Title.displayName = 'Test.Title';
