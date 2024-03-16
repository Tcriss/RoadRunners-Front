import { AuthConfig } from "@auth0/auth0-angular";

import { environment as env } from "../../../environments/environment";

export const authOptions: AuthConfig = {
    ...env.config,
    httpInterceptor: {
      allowedList: [
        {
          uri: env.url + "vehicles/create",
          tokenOptions: {
            authorizationParams: {
              audience: env.config.audience,
            }
          }
        },
        {
          uri: env.url + "vehicles/edit/*",
          tokenOptions: {
            authorizationParams: {
              audience: env.config.audience,
            }
          }
        },
        {
          uri: env.url + "vehicles/delete/*",
          tokenOptions: {
            authorizationParams: {
              audience: env.config.audience,
            }
          }
        },
        {
          uri: env.url + "users/*",
          tokenOptions: {
            authorizationParams: {
              audience: env.config.audience,
            }
          }
        },
      ]
    }
  }