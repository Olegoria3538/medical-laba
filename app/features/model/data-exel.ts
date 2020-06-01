import { createStore, createEvent } from 'effector';
import { AnyObject } from '../../lib/type';

const $dataExel = createStore<{ complete: boolean; data: AnyObject[] }>({
  complete: false,
  data: []
});
const setDataExel = createEvent<AnyObject[]>();
$dataExel.on(setDataExel, (_, data) => ({ complete: !!data.length, data }));
$dataExel.watch(x => console.log(x));

export { $dataExel, setDataExel };
