import { IDestination } from './destination.model';

export const marseille = {
	id: 13, name: 'Marseille', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis lacus enim, vitae rhoncus tellus tristique sit amet. Morbi in libero et neque tincidunt pulvinar. Proin sed tellus lacus. Fusce accumsan ac odio in tempus. Quisque porta molestie dolor, hendrerit ultricies odio rutrum at. Sed maximus euismod massa, non mattis ex mollis ac. Mauris mi leo, luctus tempus erat vel, sodales convallis lorem. Vestibulum viverra in dui eu placerat. Cras iaculis ante at commodo finibus.`,
} as IDestination;
export const paris = {
	id: 75, name: 'Paris', description: `Quisque vehicula velit id nulla varius porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In aliquet quam vitae sapien vestibulum, eu tincidunt tortor ultricies. Nunc dictum quam at mauris fringilla, eu iaculis ligula commodo. Ut pellentesque euismod nisl eget cursus. Ut dui lorem, ornare id consectetur in, tincidunt et sem. Mauris eget enim non felis fringilla egestas id sed enim. Pellentesque id luctus ante. Nam lobortis pellentesque elementum. Nulla at tellus non elit posuere convallis. Donec ut lorem gravida, auctor odio sit amet, rutrum sem. Aliquam eros ante, facilisis nec mattis eget, egestas nec nisi. Aenean vestibulum dapibus sem vel scelerisque. Praesent convallis tortor eleifend ante gravida porttitor. Aenean tincidunt neque mauris, blandit sollicitudin metus volutpat vel.`,
} as IDestination;

export const all = [marseille, paris];
export const dictionary = all.reduce((dic, dest) => {
	dic[dest.id] = dest;
	return dic;
}, {});
/*
Nulla consequat risus ligula, fermentum laoreet justo feugiat vitae. Nam tempus et risus id sodales. Nam ut malesuada magna. Duis ultrices nibh arcu. In ultricies consectetur mattis. Nulla pellentesque tincidunt tristique. Morbi laoreet a libero vel accumsan. In eu placerat orci. Morbi pellentesque eleifend leo, nec pellentesque velit. Suspendisse bibendum augue vel viverra fringilla.

Pellentesque egestas consectetur eros non ullamcorper. Nullam ut aliquet orci, et interdum metus. Cras nec ante vel odio dictum cursus sit amet vel eros. Curabitur cursus elementum odio, rutrum porttitor eros tincidunt ac. Vivamus dapibus placerat ex, vitae tincidunt odio tincidunt et. Integer urna diam, mollis a interdum sed, euismod ut arcu. Nulla lobortis eu ante vitae congue. Pellentesque at auctor massa. Phasellus vitae nisi diam. Phasellus gravida id nisl at consectetur. Donec fringilla semper consectetur. Praesent efficitur tellus nec sollicitudin sagittis. Donec auctor sapien elit, ut semper enim posuere at.

Duis facilisis ultricies euismod. Integer egestas metus a ultrices fringilla. Nam gravida, nibh vel tempor sodales, metus dolor sagittis lorem, a pretium felis elit sed odio. Praesent rhoncus arcu leo, euismod dictum nulla consectetur non. Vestibulum faucibus nisl at porta venenatis. Nulla eu tortor vel turpis auctor scelerisque et nec nunc. Vivamus mattis maximus dapibus. Pellentesque at mi mauris. Pellentesque luctus porttitor lectus, ac accumsan diam tincidunt id. Duis porta scelerisque tellus, eu elementum neque laoreet id. Donec in malesuada mi. Integer viverra quis leo ut consectetur.
*/
