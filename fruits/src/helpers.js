
/** returns a randomly selected item from array of items
 *
 *  input: items (array of items)
 *  output: item (randomly chosen from)
 */
function choice(items) {
  const randIdx = Math.floor(Math.random() * items.length);

  return items[randIdx];
}

/** remove function removes first matching item from items (if exists) and
 *  returns it; else returns undefined
 *
 *  input: items (array of items), item (item to search for in items)
 *  output: item (if found in items) OR undefined
 */
function remove(items, item) {
  const itemIdx = items.indexOf(item);

  if (itemIdx === -1) {
    return undefined;
  } else {
    items.splice(itemIdx, 1);
    return item;
  }
}


export { choice, remove };