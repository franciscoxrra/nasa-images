import { Image } from "../../requesters/searchImages"

export const getLargestImageLink = (image: Image) =>
    image.linksBySize[image.linksBySize.length - 1]

export const getSmallestImageLink = (image: Image) =>
    image.linksBySize[0]
