/// Represents a two-dimensional position
/// has [x] and [y] properties
///
/// example code can be defined using a four-space indent:
///
///     var p = new Position();
///
class Position {
  /*
  multi-line comments
   */
  int x;

  // A regular comment
  int y;
}

main() {
  dynamic dynamicVar = -7.8;
  print(new Position().runtimeType);
  print(dynamicVar.runtimeType);
  var v = dynamicVar as double;
  print(v.abs().floor().runtimeType);
}