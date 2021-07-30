import { imagesWatcher } from "./data"

export default function* rootSaga(): Generator {
    yield imagesWatcher();
}