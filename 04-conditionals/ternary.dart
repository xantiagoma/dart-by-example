main(List<String> args) {
  var value = int.tryParse(args.length > 0 ? args.first : '0') ?? 0;
  print(value.toString() + ' ' + (value.isEven ? 'is Even' : 'is Odd'));
}