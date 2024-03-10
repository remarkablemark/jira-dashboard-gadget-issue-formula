import { Grid } from '@atlaskit/primitives';

import Formula from './Formula';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

export default function View(props: Props) {
  return (
    <Grid
      rowGap="space.050"
      columnGap="space.050"
      templateColumns="1fr 1fr 1fr"
    >
      {props.data.map(({ label, value }, index) => (
        <Formula label={label} value={value} key={index} />
      ))}
    </Grid>
  );
}
