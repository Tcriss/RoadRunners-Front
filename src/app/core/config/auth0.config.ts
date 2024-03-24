import { AuthConfig } from "@auth0/auth0-angular";

import { environment as env } from "../../../environments/environment";

export const authOptions: AuthConfig = {
    domain: env.config.domain,
    clientId: env.config.clientId,
    authorizationParams: env.config.authorizationParams,
  }