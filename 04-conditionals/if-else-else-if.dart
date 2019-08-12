main(List<String> args) {
  int value = int.tryParse(args.first) ?? 0; // Null-aware operator
  if(value.isEven) {
    print("$value is Even");
  } else if (value.isOdd) {
    print("${value.toString()} is Odd");
  } else {
    print("What the heck!"); // Non reacheable
  }
}