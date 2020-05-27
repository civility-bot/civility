import { Collection, Func } from "../types"
import { isArray } from "./typeGuards"


export function forEach(
  collection: Collection,
  func: Func,
): void {
  if (isArray(collection)) {
    collection.forEach(func)
  } else {
    Object.keys(collection)
      .forEach(key => func(collection[key], key))
  }
}
