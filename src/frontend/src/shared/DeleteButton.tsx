import { IconButton, type IconButtonProps } from '@atlaskit/button/new';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import { Box } from '@atlaskit/primitives';

interface Props extends Omit<IconButtonProps, 'icon'> {
  offsetLabel?: boolean;
}

export function DeleteButton(props: Props) {
  return (
    <Box style={{ marginTop: props.offsetLabel ? 34 : 12 }}>
      <IconButton appearance="subtle" {...props} icon={CrossCircleIcon} />
    </Box>
  );
}
