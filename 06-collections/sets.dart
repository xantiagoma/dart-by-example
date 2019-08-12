main() {
  var medals = new Set();
  medals.add("gold");
  medals.add("silver");
  medals.add("bronze");

  // HashSets use the equality operator (==) to determine
  // if it already contains an item
  medals.add("gold");

  print('has gold? ${medals.contains("gold")}');
  print('has platinum? ${medals.contains("platinum")}');

  // Sets can be constructed from Iterables
  var meals = new Set.from(['breakfast', 'lunch', 'dinner']);

  // Some built-in features:
  print(medals.union(meals));
  print(medals.lookup("gold"));
  print(medals.lookup("platinum"));
  print(medals.difference(meals));
}