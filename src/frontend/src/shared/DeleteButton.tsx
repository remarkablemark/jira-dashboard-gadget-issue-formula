import { IconButton, type IconButtonProps } from '@atlaskit/button/new';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import { Box } from '@atlaskit/primitives';

interface Props extends Omit<IconButtonProps, 'icon'> {
  offsetLabel?: boolean;
}

export function DeleteButton(props: Props) {
  const { offsetLabel, ...restProps } = props;

  return (
    <Box style={{ marginTop: offsetLabel ? 34 : 12 }}>
      <IconButton appearance="subtle" {...restProps} icon={CrossCircleIcon} />
    </Box>
  );
}
