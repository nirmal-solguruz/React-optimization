import { chunk } from "lodash-es";

export const getChunk = () => chunk([1, 2, 3, 4], 2);
