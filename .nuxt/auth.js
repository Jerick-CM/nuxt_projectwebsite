import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Oauth2Scheme } from '~auth/runtime'
import { CookieScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/",
    "logout": "/",
    "home": "/dashboard",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "facebook"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // facebook
  $auth.registerStrategy('facebook', new Oauth2Scheme($auth, {
  "scope": [
    "public_profile",
    "email",
    "public_profile",
    "email"
  ],
  "endpoints": {
    "authorization": "https://facebook.com/v2.12/dialog/oauth",
    "userInfo": "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url},email"
  },
  "clientId": "141292091328620",
  "name": "facebook"
}))

  // github
  $auth.registerStrategy('github', new Oauth2Scheme($auth, {
  "clientId": "b916f0145cfe505852e1",
  "name": "github",
  "endpoints": {
    "authorization": "https://github.com/login/oauth/authorize",
    "token": "/_auth/oauth/github/authorize",
    "userInfo": "https://api.github.com/user"
  },
  "scope": [
    "user",
    "email"
  ],
  "responseType": "code"
}))

  // google
  $auth.registerStrategy('google', new Oauth2Scheme($auth, {
  "scope": [
    "openid",
    "profile",
    "email",
    "profile",
    "email"
  ],
  "clientId": "635307167233-mii6gf2ho460gj11ui5tvb7teo1rcp3o.apps.googleusercontent.com",
  "codeChallengeMethod": "",
  "responseType": "id_token token",
  "grantType": "client_credentials",
  "name": "google",
  "endpoints": {
    "authorization": "https://accounts.google.com/o/oauth2/auth",
    "userInfo": "https://www.googleapis.com/oauth2/v3/userinfo"
  }
}))

  // laravelSanctum
  $auth.registerStrategy('laravelSanctum', new CookieScheme($auth, {
  "url": "https://backend.inhinyeru.com",
  "endpoints": {
    "csrf": {
      "withCredentials": true,
      "headers": {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "url": "https://backend.inhinyeru.com/sanctum/csrf-cookie"
    },
    "login": {
      "withCredentials": true,
      "headers": {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "url": "https://backend.inhinyeru.com/api/login"
    },
    "logout": {
      "withCredentials": true,
      "headers": {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "url": "https://backend.inhinyeru.com/api/logout"
    },
    "user": {
      "withCredentials": true,
      "headers": {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "url": "https://backend.inhinyeru.com/api/user"
    }
  },
  "name": "laravelSanctum",
  "cookie": {
    "name": "XSRF-TOKEN"
  },
  "user": {
    "property": false
  }
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
