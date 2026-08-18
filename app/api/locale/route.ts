import { localeFromCountry, resolveLocale } from "../../i18n/config";

export async function GET(request: Request) {
  const country = request.headers.get("cf-ipcountry") ?? request.headers.get("x-vercel-ip-country") ?? request.headers.get("x-country-code");
  const accepted = request.headers.get("accept-language")?.split(",")[0];
  const locale = localeFromCountry(country) ?? resolveLocale(accepted);
  return Response.json({ locale, country });
}
