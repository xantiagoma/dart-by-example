import 'dart:convert';
import 'dart:io';

class ApiData {
    String apiDataAs;
    String city;
    String country;
    String countryCode;
    String isp;
    double lat;
    double lon;
    String org;
    String query;
    String region;
    String regionName;
    String status;
    String timezone;
    String zip;

    ApiData({
        this.apiDataAs,
        this.city,
        this.country,
        this.countryCode,
        this.isp,
        this.lat,
        this.lon,
        this.org,
        this.query,
        this.region,
        this.regionName,
        this.status,
        this.timezone,
        this.zip,
    });

    factory ApiData.fromJson(String str) => ApiData.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory ApiData.fromMap(Map<String, dynamic> json) => new ApiData(
        apiDataAs: json["as"],
        city: json["city"],
        country: json["country"],
        countryCode: json["countryCode"],
        isp: json["isp"],
        lat: json["lat"].toDouble(),
        lon: json["lon"].toDouble(),
        org: json["org"],
        query: json["query"],
        region: json["region"],
        regionName: json["regionName"],
        status: json["status"],
        timezone: json["timezone"],
        zip: json["zip"],
    );

    Map<String, dynamic> toMap() => {
        "as": apiDataAs,
        "city": city,
        "country": country,
        "countryCode": countryCode,
        "isp": isp,
        "lat": lat,
        "lon": lon,
        "org": org,
        "query": query,
        "region": region,
        "regionName": regionName,
        "status": status,
        "timezone": timezone,
        "zip": zip,
    };
}

main(List<String> args) async {
  const BASE_URL = "http://ip-api.com/json";
  var uri = '$BASE_URL/${args.length > 1 ? args.first : ''}';
  var url = Uri.parse(uri);

  var request = await HttpClient().getUrl(url);
  var response = await request.close();
  var rawData = await response.transform(Utf8Decoder()).join();
  var data = ApiData.fromJson(rawData);
  switch( args.length > 1 ? args.elementAt(1) : '') {
    case 'city':
      print(data.city);
      break;
    case 'country':
      print(data.country);
      break;
    case 'isp':
      print(data.isp);
      break;
    case 'location':
      print("${data.lat},${data.lon}");
      break;
    case 'all':
    default:
      print(data.toJson());
  }
  return;
}