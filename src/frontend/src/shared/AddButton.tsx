import { IconButton, type IconButtonProps } from '@atlaskit/button/new';
import AddIcon from '@atlaskit/icon/glyph/add';

export function AddButton(props: Omit<IconButtonProps, 'icon'>) {
  return <IconButton {...props} icon={AddIcon} />;
}
