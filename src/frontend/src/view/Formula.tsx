import Heading from '@atlaskit/heading';
import { Box, xcss } from '@atlaskit/primitives';

const containerStyles = xcss({
  alignItems: 'center',
  borderRadius: 'border.radius.200',
  borderWidth: 'border.width',
  display: 'flex',
  height: 'size.1000',
  justifyContent: 'center',
  padding: 'space.100',
  textAlign: 'center',
});

const valueStyles = xcss({
  color: 'color.text.accent.green',
});

interface Props {
  label: string;
  value: string;
}

export default function Formula(props: Props) {
  return (
    <Box
      backgroundColor="color.background.neutral.hovered"
      xcss={containerStyles}
    >
      <div>
        <Heading as="h1" variant="xxlarge">
          <Box as="span" xcss={valueStyles}>
            {props.value}
          </Box>
        </Heading>

        <br />

        <Heading as="h2" variant="medium">
          {props.label}
        </Heading>
      </div>
    </Box>
  );
}
