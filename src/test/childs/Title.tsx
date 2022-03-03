import { FunctionComponent } from 'react';

import { TypeChildProps } from './types';

export const Title: FunctionComponent<TypeChildProps> = ({
  children,
}: TypeChildProps): JSX.Element => (
  <div className="u-headline u-headline@mobile--h2">{children}</div>
);

Title.displayName = 'Test.Title';
