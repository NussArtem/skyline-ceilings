import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, setCookie, removeResponseHeader, getQuery as getQuery$1, readBody, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatusText } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withTrailingSlash, decodePath, withoutTrailingSlash } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/ufo/dist/index.mjs';
import process$1 from 'node:process';
import { renderToString } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/source-map/source-map.js';
import { createRouterMatcher } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/nikitaefron/Desktop/Projects/skyline-ceilings/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "es",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "es",
          "iso": "es-ES",
          "name": "ES",
          "language": ""
        },
        {
          "code": "en",
          "iso": "en-US",
          "name": "EN",
          "language": ""
        },
        {
          "code": "ru",
          "iso": "ru-RU",
          "name": "RU",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "no prefix",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "es": {
          "domain": ""
        },
        "en": {
          "domain": ""
        },
        "ru": {
          "domain": ""
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const memoryStore = {};

  const NONCE = ${JSON.stringify(nonce)}
  
  const mockStorage = {
    getItem: function(key) {
      return memoryStore[key] !== undefined ? memoryStore[key] : null;
    },
    setItem: function(key, value) {
      memoryStore[key] = String(value);
      window.parent.postMessage({
        type: 'storage-set',
        key: key,
        value: String(value),
        nonce: NONCE
      }, '*');
    },
    removeItem: function(key) {
      delete memoryStore[key];
      window.parent.postMessage({
        type: 'storage-remove',
        key: key,
        nonce: NONCE
      }, '*');
    },
    clear: function() {
      for (const key in memoryStore) {
        delete memoryStore[key];
      }
      window.parent.postMessage({
        type: 'storage-clear',
        nonce: NONCE
      }, '*');
    },
    key: function(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] !== undefined ? keys[index] : null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };
  
  try {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: false,
      configurable: true
    });
  } catch (e) {
    window.localStorage = mockStorage;
  }
  
  window.addEventListener('message', function(event) {
    if (event.data.type === 'storage-sync-data' && event.data.nonce === NONCE) {
      const data = event.data.data;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          memoryStore[key] = data[key];
        }
      }
      if (typeof window.initTheme === 'function') {
        window.initTheme();
      }
      window.dispatchEvent(new Event('storage-ready'));
    }
  });
  
  window.parent.postMessage({ 
    type: 'storage-sync-request',
    nonce: NONCE
  }, '*');
})();
`
);
const parentStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;
  
  // Wait for shadow root to be attached
  const checkShadow = setInterval(function() {
    if (host.shadowRoot) {
      clearInterval(checkShadow);
      const iframe = host.shadowRoot.getElementById('frame');
      if (!iframe) return;

      const NONCE = ${JSON.stringify(nonce)}
      
      window.addEventListener('message', function(event) {
        if (!event.data || event.data.nonce !== NONCE) return;
        
        const data = event.data;
        
        if (data.type === 'storage-set') {
          localStorage.setItem(data.key, data.value);
        } else if (data.type === 'storage-remove') {
          localStorage.removeItem(data.key);
        } else if (data.type === 'storage-clear') {
          localStorage.clear();
        } else if (data.type === 'storage-sync-request') {
          const allData = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
          }
          iframe.contentWindow.postMessage({
            type: 'storage-sync-data',
            data: allData,
            nonce: NONCE
          }, '*');
        }
      });
    }
  }, 10);
})();
`
);
const errorCSS = (
  /* css */
  `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  right: 5px;
  bottom: 5px;
  left: auto;
  top: auto;
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: bottom right;
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 3px;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`
);
function webComponentScript(base64HTML, startMinimized) {
  return (
    /* js */
    `
  (function() {
    try {
      const host = document.querySelector('nuxt-error-overlay');
      if (!host) return;
      
      const shadow = host.attachShadow({ mode: 'open' });
      
      // Create elements
      const style = document.createElement('style');
      style.textContent = ${JSON.stringify(errorCSS)};
      
      const iframe = document.createElement('iframe');
      iframe.id = 'frame';
      iframe.src = 'data:text/html;base64,${base64HTML}';
      iframe.title = 'Detailed error stack trace';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      
      const preview = document.createElement('div');
      preview.id = 'preview';
      
      const button = document.createElement('button');
      button.id = 'toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('type', 'button');
      button.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';
      
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.className = 'sr-only';
      
      // Update preview snapshot
      function updatePreview() {
        try {
          let previewIframe = preview.querySelector('iframe');
          if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
            previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            preview.appendChild(previewIframe);
          }
          
          const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
          const cleanedHTML = document.documentElement.outerHTML
            .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
            .replace(/<script[^>]*>.*?<\\/script>/gs, '');
          
          const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(doctype + cleanedHTML);
          iframeDoc.close();
        } catch (error) {
          console.error('Failed to update preview:', error);
        }
      }
      
      function toggleView() {
        const isMinimized = iframe.hasAttribute('inert');
        
        if (isMinimized) {
          updatePreview();
          iframe.removeAttribute('inert');
          button.setAttribute('aria-expanded', 'true');
          liveRegion.textContent = 'Showing detailed error view';
          setTimeout(function() {
            try { iframe.contentWindow.focus(); } catch {}
          }, 100);
        } else {
          iframe.setAttribute('inert', '');
          button.setAttribute('aria-expanded', 'false');
          liveRegion.textContent = 'Showing error page';
          button.focus();
        }
      }
      
      button.onclick = toggleView;
      
      document.addEventListener('keydown', function(e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !iframe.hasAttribute('inert')) {
          toggleView();
        }
      });
      
      // Append to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(liveRegion);
      shadow.appendChild(iframe);
      shadow.appendChild(preview);
      shadow.appendChild(button);
      
      if (${startMinimized}) {
        iframe.setAttribute('inert', '');
        button.setAttribute('aria-expanded', 'false');
      }
      
      // Initialize preview
      setTimeout(updatePreview, 100);
      
    } catch (error) {
      console.error('Failed to initialize Nuxt error overlay:', error);
    }
  })();
  `
  );
}
function generateErrorOverlayHTML(html, options) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
  const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
  const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
  return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return error500; });
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  if (!globalThis._importMeta_.test && typeof html === "string") {
    const prettyResponse = await defaultHandler(error, event, { json: false });
    return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= statusCode && statusCode < 500 })}</body>`));
  }
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _P4ljGLOPBhRDANLyySsKMNg6W4ib7qYdKy9E6EX4 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.2.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

// @ts-nocheck
const localeCodes =  [
  "es",
  "en",
  "ru"
];
const localeLoaders = {
  es: [
    {
      key: "locale_es_46json_78e45882",
      load: () => Promise.resolve().then(function () { return es$1; }),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_71ffef5e",
      load: () => Promise.resolve().then(function () { return en$1; }),
      cache: true
    }
  ],
  ru: [
    {
      key: "locale_ru_46json_7b567ef7",
      load: () => Promise.resolve().then(function () { return ru$1; }),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "es",
    iso: "es-ES",
    name: "ES",
    language: undefined
  },
  {
    code: "en",
    iso: "en-US",
    name: "EN",
    language: undefined
  },
  {
    code: "ru",
    iso: "ru-RU",
    name: "RU",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Премиальные тканевые потолки Descor и HEYtex. Современные решения для интерьера: теневые, парящие, многоуровневые потолки, световые решения."},{"name":"keywords","content":"тканевые потолки, Descor, HEYtex, натяжные потолки, потолки Испания"},{"property":"og:type","content":"website"},{"property":"og:site_name","content":"SkyLine Ceilings"},{"name":"robots","content":"index, follow"}],"link":[{"rel":"canonical","href":"https://skylineceilings.com"}],"style":[],"script":[],"noscript":[],"title":"SkyLine Ceilings - Тканевые потолки Descor и HEYtex","htmlAttrs":{"lang":"es"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/about": {
    "es": "/about",
    "en": "/about",
    "ru": "/about"
  },
  "/": {
    "es": "/",
    "en": "/",
    "ru": "/"
  },
  "/prices": {
    "es": "/prices",
    "en": "/prices",
    "ru": "/prices"
  },
  "/gallery": {
    "es": "/gallery",
    "en": "/gallery",
    "ru": "/gallery"
  },
  "/spotlights": {
    "es": "/spotlights",
    "en": "/spotlights",
    "ru": "/spotlights"
  },
  "/chandeliers": {
    "es": "/chandeliers",
    "en": "/chandeliers",
    "ru": "/chandeliers"
  },
  "/innovations": {
    "es": "/innovations",
    "en": "/innovations",
    "ru": "/innovations"
  },
  "/quiet-walls": {
    "es": "/quiet-walls",
    "en": "/quiet-walls",
    "ru": "/quiet-walls"
  },
  "/ventilation": {
    "es": "/ventilation",
    "en": "/ventilation",
    "ru": "/ventilation"
  },
  "/hidden-hatches": {
    "es": "/hidden-hatches",
    "en": "/hidden-hatches",
    "ru": "/hidden-hatches"
  },
  "/track-lighting": {
    "es": "/track-lighting",
    "en": "/track-lighting",
    "ru": "/track-lighting"
  },
  "/hidden-curtains": {
    "es": "/hidden-curtains",
    "en": "/hidden-curtains",
    "ru": "/hidden-curtains"
  },
  "/linear-lighting": {
    "es": "/linear-lighting",
    "en": "/linear-lighting",
    "ru": "/linear-lighting"
  },
  "/shadow-ceilings": {
    "es": "/shadow-ceilings",
    "en": "/shadow-ceilings",
    "ru": "/shadow-ceilings"
  },
  "/printed-ceilings": {
    "es": "/printed-ceilings",
    "en": "/printed-ceilings",
    "ru": "/printed-ceilings"
  },
  "/floating-ceilings": {
    "es": "/floating-ceilings",
    "en": "/floating-ceilings",
    "ru": "/floating-ceilings"
  },
  "/lighting-solutions": {
    "es": "/lighting-solutions",
    "en": "/lighting-solutions",
    "ru": "/lighting-solutions"
  },
  "/multi-level-ceilings": {
    "es": "/multi-level-ceilings",
    "en": "/multi-level-ceilings",
    "ru": "/multi-level-ceilings"
  }
};
const i18nPathToPath = {
  "/about": "/about",
  "/": "/",
  "/prices": "/prices",
  "/gallery": "/gallery",
  "/spotlights": "/spotlights",
  "/chandeliers": "/chandeliers",
  "/innovations": "/innovations",
  "/quiet-walls": "/quiet-walls",
  "/ventilation": "/ventilation",
  "/hidden-hatches": "/hidden-hatches",
  "/track-lighting": "/track-lighting",
  "/hidden-curtains": "/hidden-curtains",
  "/linear-lighting": "/linear-lighting",
  "/shadow-ceilings": "/shadow-ceilings",
  "/printed-ceilings": "/printed-ceilings",
  "/floating-ceilings": "/floating-ceilings",
  "/lighting-solutions": "/lighting-solutions",
  "/multi-level-ceilings": "/multi-level-ceilings"
};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    const isPrefixable = prefixable(locale, defaultLocale);
    return withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path));
  }
}
function prefixable(currentLocale, defaultLocale) {
  return (currentLocale !== defaultLocale || "prefix_except_default" === "prefix");
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _Z3LIYXQutPnfRtqPmAVLMx1lD2gL6FtX6zPxq3GIwQ = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix_except_default" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async ({ event }) => {
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/21bW8itE") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      await sendRedirect(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/Users/nikitaefron/Desktop/Projects/skyline-ceilings";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _IU5l3M9caB3GEtP7grprz2hzeM7sGvzFV7eIaLVZDA = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const plugins = [
  _P4ljGLOPBhRDANLyySsKMNg6W4ib7qYdKy9E6EX4,
_Z3LIYXQutPnfRtqPmAVLMx1lD2gL6FtX6zPxq3GIwQ,
_IU5l3M9caB3GEtP7grprz2hzeM7sGvzFV7eIaLVZDA
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _vzGmwo = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Users/nikitaefron/Desktop/Projects/skyline-ceilings/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = void 0 ;
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process$1.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = void 0 ;
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const renderer = createRenderer(() => () => {
  }, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: () => spaTemplate,
    buildAssetsURL
  });
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", err);
    throw err;
  });
  if (ssrContext.payload?.error) {
    throw ssrContext.payload.error;
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _Cj_Wmk = _messagesHandler ;

const _lazy_ZJ24id = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_xYOIPU = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _vzGmwo, lazy: false, middleware: true, method: undefined },
  { route: '/sitemap.xml', handler: _lazy_ZJ24id, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_xYOIPU, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _Cj_Wmk, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_xYOIPU, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "This page is temporarily unavailable." };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage) + " | " + escapeHtml(messages.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight"></div><div class="max-w-520px text-center"><h1 class="font-medium mb-8 sm:text-10xl text-8xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl">' + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

var nav$2 = {
	tissueCeilings: "Techos de tela",
	shadow: "Sombra",
	floating: "Flotante",
	multiLevel: "Multinivel",
	printed: "Tela impresa",
	lightingSolutions: "Soluciones de iluminación",
	linearLighting: "Iluminación lineal",
	trackLighting: "Iluminación de riel",
	spotlights: "Focos",
	chandeliers: "Candelabros",
	gallery: "Galería",
	prices: "Precios",
	innovations: "Innovaciones",
	quietWalls: "Paredes silenciosas",
	hiddenHatches: "Escotillas",
	ventilation: "Ventilación",
	hiddenCurtains: "Cortinas",
	about: "SOBRE NOSOTROS"
};
var header$2 = {
	workingHours: "LUN-VIE 9:00-18:00",
	phone: "+34662484848"
};
var common$2 = {
	callMeasurer: "Llamar a un medidor",
	contactUs: "Contáctenos",
	sendRequest: "Enviar solicitud",
	name: "Nombre",
	phone: "Teléfono",
	email: "Email",
	message: "Mensaje",
	required: "*",
	requestForMeasurement: "Solicitud de medición",
	thankYou: "¡Gracias por su solicitud! Nos pondremos en contacto pronto."
};
var footer$2 = {
	title: "SkyLine Ceilings",
	description: "Techos de tela premium Descor y HEYtex",
	contacts: "Contactos",
	followUs: "Síguenos",
	rights: "© 2024 SkyLine Ceilings. Todos los derechos reservados."
};
var home$2 = {
	heroTitle: "Telas de fabricantes alemanes",
	heroSubtitle: "Calidad europea y certificados",
	heroAlt: "Techos de tela",
	aboutTitle: "¿Qué son los techos de tela Descor y HEYtex?",
	aboutLead: "Los techos de tela Descor y HEYtex son techos tensados modernos Hi-Tech fabricados con textil de ingeniería con impregnación acrílica, diseñados para interiores arquitectónicos y de diseño. No es plástico ni película.",
	aboutText: "Es una tela transpirable que:",
	aboutFeature1: "no tiene olor",
	aboutFeature2: "no emite sustancias nocivas",
	aboutFeature3: "no teme al frío ni al calor",
	aboutFeature4: "parece un techo perfectamente pintado",
	tissueAlt: "Tela",
	ecologyTitle: "Ecología e hipoalergenicidad",
	ecologyText: "Las telas Descor y HEYtex se producen según estándares europeos de seguridad ambiental y son adecuadas para locales con requisitos elevados:",
	ecologyFeature1: "no contienen PVC, ftalatos ni plastificantes tóxicos",
	ecologyFeature2: "no emiten sustancias volátiles",
	ecologyFeature3: "no atraen polvo",
	ecologyFeature4: "no son medio para hongos y moho",
	ecologyFeature5: "hipoalergénicas — seguras para niños y personas con alergias",
	ecologyWhereTitle: "Por eso estos techos se usan en:",
	ecologyWhere1: "casas residenciales",
	ecologyWhere2: "habitaciones infantiles",
	ecologyWhere3: "clínicas",
	ecologyWhere4: "hoteles y oficinas premium",
	techTitle: "Tecnología HEYtex & Descor — el techo del futuro",
	techCompositionTitle: "La tela consiste en:",
	techComposition1: "base sintética de alta resistencia",
	techComposition2: "impregnación acrílica, que proporciona:",
	techComposition2a: "estabilidad geométrica",
	techComposition2b: "resistencia a la humedad",
	techComposition2c: "resistencia a los rayos UV",
	techComposition2d: "posibilidad de pintura múltiple",
	techBenefitsTitle: "Gracias a esto, el techo:",
	techBenefit1: "no se hunde",
	techBenefit2: "no se amarillea",
	techBenefit3: "no se agrieta",
	techBenefit4: "mantiene la apariencia durante décadas",
	appearanceTitle: "Apariencia",
	appearanceText: "Después de la instalación, el techo parece:",
	appearance1: "superficie pintada perfectamente plana",
	appearance2: "cartón yeso caro sin costuras ni grietas",
	appearance3: "superficie arquitectónica de diseño",
	appearanceNote: "Sin brillo, reflejos y efecto 'plástico'.",
	comparisonTitle: "Comparación de techos",
	comparisonParameter: "Parámetro",
	comparisonTissue: "Descor & HEYtex (tela)",
	comparisonPVC: "Techos PVC",
	comparisonGypsum: "Cartón yeso",
	comparisonData: {
		material: {
			parameter: "Material",
			tissue: "Textil de ingeniería con impregnación acrílica",
			pvc: "Película PVC plástica",
			gypsum: "Láminas de yeso"
		},
		ecology: {
			parameter: "Ecología",
			tissue: "Sin PVC, sin toxinas",
			pvc: "Contiene plastificantes",
			gypsum: "Polvo, masilla, pinturas"
		},
		smell: {
			parameter: "Olor",
			tissue: "Ninguno",
			pvc: "Olor a plástico",
			gypsum: "Olores de materiales"
		},
		allergy: {
			parameter: "Seguridad alergénica",
			tissue: "Hipoalergénico",
			pvc: "Puede causar reacciones",
			gypsum: "Depende de la pintura"
		},
		breathable: {
			parameter: "Transpirable",
			tissue: "Sí",
			pvc: "No",
			gypsum: "Parcialmente"
		},
		appearance: {
			parameter: "Apariencia",
			tissue: "Mate, como pintura",
			pvc: "Brillo, mate 'película'",
			gypsum: "Depende de los artesanos"
		},
		seams: {
			parameter: "Costuras",
			tissue: "Ninguna",
			pvc: "Ninguna",
			gypsum: "Tiene juntas"
		},
		cracks: {
			parameter: "Grietas",
			tissue: "No aparecen",
			pvc: "Ninguna",
			gypsum: "Aparecen"
		},
		temperature: {
			parameter: "Frío y calor",
			tissue: "No teme",
			pvc: "Teme a las heladas",
			gypsum: "Posibles deformaciones"
		},
		installation: {
			parameter: "Instalación",
			tissue: "1 día, sin polvo",
			pvc: "Rápido, pero con calentamiento",
			gypsum: "Semanas de trabajo sucio"
		},
		painting: {
			parameter: "Posibilidad de pintura",
			tissue: "5–7 veces",
			pvc: "No",
			gypsum: "Sí, pero con reparación"
		},
		lifespan: {
			parameter: "Vida útil",
			tissue: "20+ años",
			pvc: "7–10 años",
			gypsum: "10–15 años"
		}
	},
	comparisonNote: "Los techos de tela Descor y HEYtex se pueden repintar 5–7 veces con pintura interior regular, cambiando el estilo del interior sin desmontar el techo.",
	typesTitle: "Tipos de techos de tela",
	typesShadow: "Sombra",
	typesShadowDesc: "Sistema de techo moderno con espacio ordenado entre pared y techo",
	typesFloating: "Flotante",
	typesFloatingDesc: "Línea de luz suave alrededor del perímetro crea un efecto flotante",
	typesMultiLevel: "Multinivel",
	typesMultiLevelDesc: "Múltiples niveles crean volumen, profundidad y dinámica del espacio",
	typesPrinted: "Con impresión en tela",
	typesPrintedDesc: "Imagen de alta calidad usando impresión digital",
	pricesButton: "Precios de techos de tela"
};
var contactForm$2 = {
	title: "Solicitud de medición"
};
var about$2 = {
	title: "Sobre nosotros",
	welcome: "Bienvenido a SkyLine Ceilings — una empresa que transforma techos ordinarios en elementos arquitectónicos premium. Creamos techos y paredes de tela que combinan estilo, funcionalidad y tecnología, proporcionando comodidad y estética en cada proyecto.",
	missionTitle: "Nuestra misión",
	missionText: "Nos esforzamos por hacer interiores modernos, seguros y únicos:",
	mission1: "Cada techo y pared se diseña teniendo en cuenta las características individuales de la habitación.",
	mission2: "Usamos solo materiales ecológicos e hipoalergénicos seguros para niños y adultos.",
	mission3: "Creamos soluciones que funcionan para comodidad, acústica, luz y espacio visual.",
	whyTitle: "Por qué elegir SkyLine Ceilings",
	why1Title: "Experiencia y logros",
	why1a: "Más de 3 años en el mercado europeo",
	why1b: "Más de 1500 metros de techo instalados",
	why1c: "Hasta 15 años de garantía en materiales e instalación",
	why2Title: "Materiales premium",
	why2a: "Telas tensadas Descor y HEYtex con impregnación acrílica",
	why2b: "Resistentes, duraderas a la humedad y al desgaste",
	why2c: "Superficie mate lisa sin pliegues ni reflejos",
	why3Title: "Soluciones innovadoras",
	why3a: "Paredes de tela silenciosas, escotillas ocultas, ventilación integrada, rieles y cortinas ocultas",
	why3b: "Integración de líneas de luz, focos y candelabros",
	why3c: "Techos multinivel y tela impresa",
	why4Title: "Profesionalismo técnico",
	why4a: "Sistema de amortiguación para tensión de tela",
	why4b: "Soluciones acústicas y funcionales para cualquier tarea",
	why4c: "Montajes para televisores, estantes, espejos y otros elementos",
	why5Title: "Transparencia total y comodidad",
	why5a: "Sistema de precios transparente",
	why5b: "Soporte en todas las etapas: desde el diseño hasta la instalación y mantenimiento",
	why5c: "Consultas individuales y selección de soluciones para el estilo del interior",
	philosophyTitle: "Nuestra filosofía",
	philosophyText: "Creemos que el techo y las paredes no son solo construcción, sino un elemento que establece la atmósfera del espacio. Con nosotros, sus interiores se vuelven:",
	philosophy1: "funcionales y tecnológicos",
	philosophy2: "visualmente espaciosos y ordenados",
	philosophy3: "seguros y ecológicos",
	philosophyEnd: "Combinamos belleza, comodidad y soluciones de ingeniería en un producto, haciendo cada proyecto único y duradero.",
	partnersTitle: "Nuestros socios",
	partnersText: "Cooperamos con empresas europeas líderes:",
	partnersEnd: "Estos socios aseguran calidad, innovación y confiabilidad de todos los materiales y sistemas que usamos.",
	contactTitle: "Contáctenos",
	contactText: "Nuestro equipo está listo para ofrecer una solución individual para cualquier proyecto: apartamento, oficina, estudio, espacio comercial o showroom de diseño.",
	contactEnd: "Con SkyLine Ceilings, su techo y paredes son arquitectura, tecnología y estilo en cada detalle."
};
var prices$2 = {
	title: "Precios de techos de tela Descor y HEYtex",
	lead: "Ofrecemos un sistema de precios transparente. El costo depende del área de la habitación, la cantidad de esquinas y elementos de iluminación.",
	element: "Elemento",
	price: "Precio",
	notesTitle: "Notas",
	note1: "Todos los precios incluyen material e instalación estándar.",
	note2: "Estructuras complejas, formas no estándar y perfiles se calculan individualmente.",
	note3: "Los precios de luminarias son sin lámparas y módulos LED.",
	ctaText: "Para cálculo preciso",
	items: {
		base: "Habitación base (4 esquinas + 2 luminarias empotradas)",
		corner: "Esquina adicional",
		spotlight: "Luminaria empotrada adicional",
		ceramic: "Montaje de perfil a granito cerámico",
		lightLine: "Línea de luz",
		track: "Sistema de riel",
		trackLight: "Luminaria en riel",
		chandelier: "Candelabro",
		multiLevel: "Techo multinivel",
		printing: "Impresión en tela"
	},
	priceValues: {
		base: "45 €/m²",
		corner: "+15 €/ud",
		spotlight: "+15 €/ud",
		ceramic: "+10 €/metro lineal",
		lightLine: "+15 €/metro lineal",
		track: "+35 €/metro lineal",
		trackLight: "+25 €/ud",
		chandelier: "+50 €/ud",
		multiLevel: "65 €/m²",
		printing: "+25 €/m²"
	}
};
var gallery$2 = {
	title: "Galería",
	lead: "Fotos y videos de nuestros trabajos completados",
	workAlt: "Trabajo"
};
var shadowCeilings$2 = {
	title: "Techos de sombra",
	lead: "El techo de sombra es un sistema de techo moderno donde se crea un espacio ordenado — línea de sombra — entre la pared y el techo.",
	text1: "Esto separa visualmente el techo de las paredes y lo hace parecer un plano arquitectónico independiente.",
	text2: "Esta técnica se usa en arquitectura moderna y diseño de interiores donde son importantes:",
	feature1: "líneas limpias",
	feature2: "geometría precisa",
	feature3: "sensación de ligereza y espacio",
	text3: "La línea de sombra se forma usando un perfil de aluminio especial instalado alrededor del perímetro de la habitación. Está oculto a la vista y crea un espacio uniforme y perfectamente recto entre techo y pared.",
	text4: "Como resultado, el techo no toca las paredes visualmente, creando un efecto 'flotante' y enfatizando la forma de la habitación.",
	text5: "Los techos de sombra son especialmente efectivos cuando se combinan con techos de tela Descor y HEYtex, ya que su superficie mate enfatiza la profundidad de la sombra y hace las líneas lo más claras posible.",
	whereTitle: "Este tipo de techo se usa en:",
	where1: "apartamentos modernos",
	where2: "casas privadas",
	where3: "interiores de diseño",
	where4: "espacios comerciales premium",
	end: "El techo de sombra es un elemento arquitectónico que hace los interiores más limpios, modernos y visualmente costosos.",
	alt: "Techo de sombra"
};
var floatingCeilings$2 = {
	title: "Techos flotantes",
	lead: "El techo flotante es un sistema de techo moderno donde se crea una línea de luz suave alrededor del perímetro de la habitación, haciendo que el techo parezca suspendido en el aire.",
	text1: "La luz proviene de un perfil oculto entre techo y pared y forma un resplandor uniforme sin fuentes de luz visibles.",
	text2: "Esto crea un efecto de ligereza, profundidad y aumento del espacio visual.",
	importantTitle: "Los techos flotantes se usan en interiores modernos donde son importantes:",
	important1: "atmósfera",
	important2: "luz arquitectónica",
	important3: "sensación de volumen",
	text3: "La tecnología se basa en un perfil de aluminio especial con retroiluminación LED instalado alrededor del perímetro. La luz se refleja en las paredes e ilumina suavemente el techo, formando un efecto 'flotante'.",
	text4: "Tal sistema se combina perfectamente con techos de tela Descor y HEYtex, ya que su superficie mate difunde la luz uniformemente y elimina reflejos.",
	makesTitle: "El techo flotante hace el interior:",
	makes1: "más moderno",
	makes2: "más espacioso",
	makes3: "más premium",
	end: "Esto no es solo un techo — es un elemento arquitectónico de luz que forma el estado de ánimo de todo el espacio.",
	alt: "Techo flotante"
};
var multiLevelCeilings$2 = {
	title: "Techo multinivel",
	lead: "El techo multinivel es un sistema de techo que consiste en varios niveles o pisos ubicados a diferentes alturas.",
	text1: "Cada nivel crea volumen, profundidad y dinámica del espacio, convirtiendo un techo ordinario en un elemento de interior de diseño.",
	allowsTitle: "Tal techo permite:",
	allows1: "enfatizar la arquitectura de la habitación",
	allows2: "zonificar el espacio",
	allows3: "integrar soluciones de iluminación, retroiluminación oculta o elementos decorativos",
	text2: "La estructura multinivel se forma usando perfiles especiales y tela tensada (por ejemplo, Descor o HEYtex), permitiendo crear:",
	create1: "líneas flotantes",
	create2: "niveles escalonados",
	create3: "formas geométricas complejas",
	effectiveTitle: "El techo multinivel es especialmente efectivo en:",
	effective1: "salas de estar y salones",
	effective2: "oficinas y showrooms",
	effective3: "restaurantes e interiores premium",
	end: "Combina estética y funcionalidad, permitiendo implementar ideas de diseño audaces y expandir visualmente el espacio.",
	alt: "Techo multinivel"
};
var printedCeilings$2 = {
	title: "Techos con impresión en tela",
	lead: "Los techos con impresión en tela son techos tensados de diseño con imágenes de alta calidad aplicadas usando impresión digital.",
	text1: "La tecnología permite convertir el techo en un elemento visual único del interior — desde texturas ligeras hasta composiciones artísticas y cielo con nubes.",
	text2: "La impresión se realiza en telas Descor y HEYtex, que tienen una superficie especial para absorción uniforme de pintura.",
	text3: "La imagen se convierte en parte de la tela y no se agrieta, desvanece o despega con el tiempo.",
	looksTitle: "¿Cómo se ve?",
	canBeTitle: "El techo puede ser:",
	canBe1: "sólido con textura ligera",
	canBe2: "con gráficos o patrones",
	canBe3: "con imitación de hormigón, tela, cielo, mármol",
	canBe4: "con diseño artístico o de marca",
	looksNote: "La superficie de tela mate elimina reflejos y hace la imagen profunda y natural.",
	techTitle: "Tecnología de impresión",
	techText: "Se usa impresión ecológica de látex o UV, que:",
	tech1: "no tiene olor",
	tech2: "segura para locales residenciales",
	tech3: "resistente a los rayos UV",
	tech4: "no se desvanece durante años",
	techNote: "La impresión no daña la estructura de la tela y preserva su transpirabilidad.",
	whereTitle: "¿Dónde se usan?",
	whereUsedTitle: "Los techos impresos se usan en:",
	whereUsed1: "apartamentos y casas",
	whereUsed2: "habitaciones infantiles",
	whereUsed3: "restaurantes y hoteles",
	whereUsed4: "oficinas y showrooms",
	whereUsed5: "espacios comerciales y de exposición",
	whereEnd: "Esta es una solución ideal cuando el techo debe convertirse en parte del diseño, no solo fondo.",
	alt: "Techo con impresión"
};
var lightingSolutions$2 = {
	heroTitle: "No hay absolutamente ninguna restricción",
	heroSubtitle: "para usar cualquier luminaria en techos de tela",
	heroAlt: "Soluciones de iluminación",
	lead: "La iluminación es uno de los elementos clave del interior. La luz forma la sensación del espacio, afecta el estado de ánimo, la comodidad y cómo se perciben colores, formas y materiales.",
	text1: "Incluso el interior más caro sin luz correctamente construida se ve plano. Por el contrario — la iluminación competente puede hacer el espacio visualmente más alto, más ancho y más costoso.",
	text2: "Los techos de tela Descor y HEYtex permiten construir iluminación arquitectónica donde las fuentes de luz se convierten en parte del techo, no en luminarias separadas. La luz se integra en la estructura y funciona como un sistema unificado.",
	text3: "La estructura de tela mate juega un papel importante: difunde suavemente la luz, elimina reflejos y sombras duras, haciendo la iluminación:",
	feature1: "tranquila para los ojos",
	feature2: "uniforme",
	feature3: "profunda y natural",
	text4: "Tal luz no cansa, no 'corta' el espacio y crea una sensación de comodidad y premium.",
	allowsTitle: "La iluminación correctamente diseñada permite:",
	allows1: "aumentar visualmente la altura del techo",
	allows2: "resaltar zonas en la habitación",
	allows3: "enfatizar la arquitectura",
	allows4: "crear diferentes escenarios — desde brillante de trabajo hasta suave nocturno",
	text5: "Los sistemas de iluminación en techos de tela se diseñan como un todo: líneas de luz, rieles, retroiluminaciones y luminarias trabajan juntos, formando una imagen de luz holística del interior.",
	linearTitle: "Iluminación lineal",
	linearDesc: "Las líneas de luz integradas en el techo crean geometría clara y estilo moderno.",
	trackTitle: "Sistemas de riel",
	trackDesc: "Los sistemas de riel magnéticos y clásicos se integran en el techo, permitiendo cambiar la ubicación de las luminarias.",
	spotlightsTitle: "Luminarias empotradas",
	spotlightsDesc: "Los focos y spots se integran en la tela, permaneciendo casi invisibles.",
	chandeliersTitle: "Candelabros y colgantes de diseño",
	chandeliersDesc: "Los techos de tela permiten instalar candelabros, colgantes y luminarias de diseño sin restricciones."
};
var linearLighting$2 = {
	title: "Iluminación lineal en techos de tela",
	lead: "La iluminación lineal es una de las formas más modernas y arquitectónicas de retroiluminar un techo. En sistemas con techos de tela Descor y HEYtex, las líneas de luz se convierten en parte de la estructura y parecen elementos de luz integrados, no luminarias montadas en superficie.",
	text1: "Se usa un perfil de aluminio unido al techo base para la instalación. Se coloca un módulo LED con difusor dentro del perfil, luego la tela se estira al ras con el perfil. Como resultado, la línea de luz es perfectamente uniforme, sin marcos, espacios y montajes visibles.",
	allowsTitle: "Tales líneas pueden usarse como fuente de luz principal o como retroiluminación arquitectónica. Permiten crear:",
	allows1: "líneas rectas y rotas",
	allows2: "formas geométricas",
	allows3: "zonas de luz",
	text2: "La tela mate Descor y HEYtex difunde la luz uniformemente, por lo que las líneas se ven suaves y profundas, sin puntos y reflejos duros.",
	text3: "La iluminación lineal es especialmente demandada en apartamentos modernos, oficinas, showrooms e interiores comerciales donde son importantes la geometría limpia y el estilo minimalista.",
	alt: "Iluminación lineal"
};
var trackLighting$2 = {
	title: "Sistemas de riel en techos de tela",
	lead: "La iluminación de riel es un sistema flexible que permite dirigir la luz donde se necesita. En techos de tela Descor y HEYtex, los rieles se integran en la estructura del techo y parecen parte de la arquitectura, no equipo montado en superficie.",
	text1: "Se instalan montajes especiales a los que se une el perfil del riel antes de estirar la tela. Después de esto, la tela se estira al ras con el sistema, y el riel se convierte visualmente en parte del techo.",
	canMountTitle: "En tales techos se pueden montar:",
	canMount1: "sistemas de riel magnéticos",
	canMount2: "sistemas de busbar clásicos",
	text2: "Las luminarias se pueden mover, agregar o quitar libremente, cambiar la dirección de la luz y crear nuevos escenarios de luz sin rehacer el techo.",
	text3: "Esta solución es ideal para salas de estar, cocinas, oficinas, tiendas y galerías donde se requiere flexibilidad y capacidad de cambiar acentos en el interior.",
	alt: "Iluminación de riel"
};
var spotlights$2 = {
	title: "Focos en techos de tela",
	lead: "Los focos son una forma universal de crear iluminación funcional y ordenada. En techos de tela Descor y HEYtex se instalan usando anillos térmicos y plataformas de montaje fijadas al techo base antes de estirar la tela.",
	systemTitle: "Tal sistema:",
	system1: "protege la tela del calentamiento",
	system2: "proporciona fijación rígida de la luminaria",
	system3: "permite reemplazar la luminaria si es necesario sin desmontar el techo",
	usedForTitle: "Los focos se usan para:",
	usedFor1: "iluminación general",
	usedFor2: "zonas de trabajo",
	usedFor3: "retroiluminación de muebles, paredes y nichos",
	text1: "Gracias a la superficie de tela mate, la luz se vuelve suave y cómoda, y las luminarias mismas se ven ordenadas y no violan la limpieza del techo.",
	alt: "Focos"
};
var chandeliers$2 = {
	title: "Candelabros y luminarias colgantes en techos de tela",
	lead: "Los techos de tela permiten instalar candelabros y luminarias colgantes de cualquier diseño y peso. Todos los montajes se hacen al techo base a través de plataformas de montaje especiales, y la tela rodea ordenadamente el punto de montaje.",
	meansTitle: "Esto significa que:",
	means1: "la tela no soporta carga",
	means2: "el techo mantiene forma perfecta",
	means3: "se pueden usar luminarias masivas y de diseño",
	text1: "Todo el cableado, montajes y elementos de fijación están ocultos detrás del techo, por lo que solo la luminaria misma es visible en el interior — limpio y estético.",
	text2: "Los candelabros y colgantes a menudo se usan como elementos centrales de diseño, y la iluminación integrada los complementa y crea escenarios de luz multinivel.",
	alt: "Candelabros"
};
var innovations$2 = {
	heroTitle: "Nos mantenemos al día con las últimas innovaciones en techos de tela",
	heroSubtitle: "y siempre implementamos todas las innovaciones en nuestros proyectos",
	heroAlt: "Innovaciones",
	title: "Últimas innovaciones del mercado de techos de tela",
	lead: "Los techos de tela modernos no son solo una superficie plana sobre la cabeza. Hoy son sistemas arquitectónicos innovadores que combinan diseño, comodidad y funcionalidad.",
	text1: "Aparecen tecnologías en el mercado que hacen los techos y paredes más inteligentes, silenciosos y flexibles:",
	quietWallsTitle: "Paredes de tela silenciosas",
	quietWallsDesc: "Crean comodidad y absorben sonido, convirtiendo la habitación en una zona tranquila y cómoda.",
	hiddenHatchesTitle: "Escotillas y paneles ocultos",
	hiddenHatchesDesc: "Ocultando invisiblemente el acceso a servicios públicos y permitiendo mantener la superficie perfecta del techo.",
	ventilationTitle: "Sistemas de ventilación y aire acondicionado",
	ventilationDesc: "Integrados directamente en perfiles y rieles, sin cajas voluminosas y rejillas visibles.",
	hiddenCurtainsTitle: "Cortinas y cortinas ocultas",
	hiddenCurtainsDesc: "Que se ocultan completamente en el techo, proporcionando interior minimalista y moderno.",
	text2: "Estas innovaciones hacen los techos no solo hermosos sino también inteligentes y funcionales. Permiten gestionar luz, aire, sonido e incluso decoración — todo oculto a la vista.",
	text3: "Con techos de tela Descor y HEYtex crea espacio que se ve costoso, funciona para comodidad y enfatiza estilo único del interior."
};
var quietWalls$2 = {
	title: "Paredes de tela silenciosas",
	lead: "Las paredes de tela silenciosas son una solución moderna para interiores donde son importantes comodidad, acústica y estilo. Convierten paredes ordinarias en superficies funcionales, de diseño y acústicamente cómodas, creando una sensación de silencio y comodidad.",
	text1: "Los sistemas hechos de telas Descor y HEYtex hacen las paredes no solo hermosas sino también técnicamente perfectas:",
	feature1: "superficie mate suave",
	feature2: "estirado uniforme sin pliegues",
	feature3: "materiales hipoalergénicos y ecológicos",
	techTitle: "Descripción técnica",
	techDesc: "Las paredes de tela silenciosas consisten en varios elementos clave:",
	frameTitle: "Marco y perfiles",
	frame1: "Los perfiles de aluminio se unen a las paredes y forman un marco fuerte para la tela.",
	frame2: "Los perfiles permiten estirar la tela sin pliegues y mantener su forma durante décadas.",
	frame3: "Los montajes para cualquier tarea se pueden integrar en el marco: TV, espejos, estantes y otros elementos del interior.",
	frame4: "Posibilidad de instalar nichos ocultos, líneas de luz o rieles.",
	acousticTitle: "Tela acústica",
	acoustic1: "Se coloca tela acústica especial de 2 cm de grosor debajo de la tela, aumentando significativamente la absorción de sonido.",
	acoustic2: "La tela reduce el ruido, haciendo la habitación más silenciosa y cómoda para trabajo y descanso.",
	tissueTitle: "Tela",
	tissue1: "Se usan telas de alta calidad Descor y HEYtex con impregnación acrílica.",
	tissue2: "Se estira usando sistema de amortiguación que proporciona estirado uniforme y seguro sin pliegues.",
	tissue3: "El material adicionalmente absorbe ondas de sonido, mejorando la acústica de la habitación.",
	soundTitle: "Propiedades de aislamiento acústico",
	sound1: "La combinación de tela acústica, tela y marco reduce el nivel de ruido en 40–50%.",
	sound2: "El sistema es adecuado para apartamentos, oficinas, salas de reuniones y habitaciones infantiles.",
	mountTitle: "Instalación y mantenimiento",
	mount1: "La tela se estira en perfiles con sistema de amortiguación, asegurando estirado seguro y uniforme.",
	mount2: "El desmontaje fácil permite mantener servicios públicos ocultos o cambiar la tela sin destrucción de la pared.",
	mount3: "No teme a la humedad y se limpia fácilmente con paño suave húmedo.",
	benefitsTitle: "Beneficios de paredes de tela silenciosas",
	benefit1: "Reducción significativa del nivel de ruido",
	benefit2: "Materiales ecológicos e hipoalergénicos",
	benefit3: "Superficie mate lisa sin juntas y pliegues",
	benefit4: "Posibilidad de integrar montajes para TV, espejos, estantes y otros elementos",
	benefit5: "Posibilidad de instalar líneas de luz, rieles y sistemas ocultos",
	benefit6: "Desmontaje fácil para mantenimiento",
	benefit7: "Diseño minimalista y premium moderno",
	text2: "Las paredes de tela silenciosas convierten interiores en espacio cómodo para trabajo, descanso y vida, combinando estilo, acústica y funcionalidad. Los sistemas Descor y HEYtex permiten crear soluciones premium donde cada pared funciona para comodidad y diseño de la habitación.",
	price: "El costo por m² de paredes de tela silenciosas comienza desde 45 euros, dependiendo de muchos factores como el estado de las paredes, cantidad de esquinas, interruptores de salida, etc."
};
var hiddenHatches$2 = {
	title: "Escotillas ocultas en techos de tela",
	lead: "Los techos de tela modernos Descor y HEYtex permiten integrar escotillas y paneles invisibles que se fusionan completamente con la tela. Esta solución es ideal para espacios donde son importantes minimalismo, líneas limpias y funcionalidad, y el acceso a servicios públicos permanece oculto.",
	text1: "Las escotillas ocultas convierten el techo en un elemento arquitectónico que funciona para comodidad y diseño sin violar la integridad visual del interior.",
	techTitle: "Descripción técnica",
	techDesc: "Las escotillas ocultas consisten en varios elementos:",
	frameTitle: "Marco y perfiles",
	frame1: "Los perfiles de aluminio forman un marco fuerte de escotilla que se integra en el techo tensado.",
	frame2: "Los perfiles permiten fijar la tela uniformemente, asegurando geometría perfecta y ausencia de pliegues.",
	frame3: "El sistema de amortiguación estira la tela sin esfuerzo, preservando la integridad de la tela y la durabilidad de la construcción.",
	faceTitle: "Frente de tela",
	face1: "Se usa la misma tela que en el techo para que la escotilla sea invisible después de la instalación.",
	face2: "Los materiales Descor y HEYtex son hipoalergénicos, ecológicos y duraderos.",
	accessTitle: "Acceso a servicios públicos",
	access1: "La escotilla permite acceso imperceptible a cableado, ventilación, luminarias y otros elementos ocultos.",
	access2: "Se retira fácilmente y de forma segura sin dañar la tela o la construcción del techo.",
	mountTitle: "Instalación y mantenimiento",
	mount1: "La instalación se realiza junto con el estirado de la tela.",
	mount2: "El marco puede prepararse para cualquier tamaño y forma de escotilla, incluyendo opciones cuadradas, rectangulares o de diseño personalizado.",
	mount3: "El mantenimiento de la escotilla no requiere desmontaje completo del techo — solo abrir la escotilla y realizar el trabajo.",
	benefitsTitle: "Beneficios de escotillas ocultas",
	benefit1: "Invisibilidad completa después de la instalación",
	benefit2: "Acceso fácil a servicios públicos sin desmontar el techo",
	benefit3: "Compatibilidad con techos de tela Descor y HEYtex",
	benefit4: "Posibilidad de tamaño y forma individual de escotilla",
	benefit5: "Uso de sistema de amortiguación para estirado seguro y uniforme de la tela",
	benefit6: "Adecuado para locales residenciales, de oficina y comerciales",
	text2: "Las escotillas ocultas hacen el techo de tela máximamente funcional y minimalista, permitiendo combinar estética y practicidad. Los sistemas Descor y HEYtex convierten el techo en un elemento arquitectónico completo que oculta todos los servicios públicos mientras permanece una superficie visual perfecta.",
	price: "El costo de fabricación de escotilla oculta comienza desde 100 euros y se calcula individualmente"
};
var ventilation$2 = {
	title: "Sistemas integrados de ventilación y aire acondicionado en techos de tela",
	lead: "Los techos de tela modernos Descor y HEYtex permiten integrar ventilación y aire acondicionado directamente en perfiles y sistemas de riel. Esta solución es ideal para interiores donde son importantes minimalismo, líneas limpias y funcionalidad, así como distribución uniforme de aire sin cajas voluminosas y rejillas.",
	text1: "Los sistemas integrados hacen el techo no solo un elemento decorativo sino también parte de la infraestructura de ingeniería, preservando apariencia estética y comodidad de la habitación.",
	techTitle: "Descripción técnica",
	techText: "Los sistemas de ventilación y aire acondicionado se integran en perfiles de aluminio y canales de riel instalados en el techo base antes de estirar la tela.",
	profilesTitle: "Perfiles y rieles",
	profiles1: "Los perfiles y sistemas de riel se fabrican con posibilidad de incrustar conductos de aire y rejillas de ventilación.",
	profiles2: "Los canales ocultos permiten dirigir el flujo de aire exactamente a las zonas necesarias, creando circulación cómoda sin elementos visibles.",
	functionsTitle: "Capacidades funcionales",
	functions1: "Conexión al sistema central de aire acondicionado o ventilación.",
	functions2: "Las rejillas y canales de ventilación ocultos están completamente integrados sin violar el diseño minimalista.",
	mountTitle: "Instalación y mantenimiento",
	mount1: "Todos los componentes se instalan antes de estirar la tela, asegurando colocación precisa de conductos de aire.",
	mount2: "El techo de tela se retira fácilmente o proporciona acceso a elementos de ventilación sin daño a la construcción.",
	benefitsTitle: "Beneficios de ventilación y aire acondicionado integrados",
	benefit1: "Estética: sin cajas y rejillas visibles",
	benefit2: "Funcionalidad: distribución uniforme de aire",
	benefit3: "Compatibilidad con todos los sistemas Descor y HEYtex",
	benefit4: "Mantenimiento fácil sin desmontaje completo de la tela",
	benefit5: "Interior minimalista y moderno",
	text2: "Los sistemas integrados de ventilación y aire acondicionado convierten el techo de tela en un elemento completo de ingeniería y arquitectura, combinando diseño, comodidad y funcionalidad.",
	price: "El costo de tales estructuras se calcula individualmente ya que se fabrican individualmente para cada proyecto"
};
var hiddenCurtains$2 = {
	title: "Cortinas ocultas en techos de tela",
	lead: "Los techos de tela modernos Descor y HEYtex permiten ocultar completamente sistemas de cortinas y cortinas dentro de perfiles. Esta solución es ideal para interiores donde son importantes líneas limpias, minimalismo y aspecto premium, y las cortinas mismas permanecen funcionales pero completamente invisibles cuando no se usan.",
	text1: "Las cortinas ocultas convierten el techo en un elemento arquitectónico que combina estilo, tecnología y comodidad de gestión de luz y privacidad.",
	techTitle: "Descripción técnica",
	techDesc: "Los sistemas de cortinas ocultas consisten en varios elementos:",
	frameTitle: "Perfiles y marco",
	frame1: "Los perfiles de aluminio se integran en el techo de tela y crean un nicho invisible para cornisa o guía.",
	frame2: "El perfil asegura resistencia, geometría precisa y mantiene la tela del techo uniforme y sin pliegues.",
	frame3: "El perfil se puede combinar con rieles y montajes para elementos adicionales del interior.",
	tissueTitle: "Tela del techo",
	tissue1: "La tela Descor o HEYtex se estira usando sistema de amortiguación, preservando superficie uniforme del techo.",
	tissue2: "Las cortinas ocultas están completamente cerradas con tela y se vuelven casi invisibles desde cualquier ángulo.",
	curtainsTitle: "Sistemas de cortinas",
	curtains1: "Tanto cornisas clásicas como sistemas de riel para cortinas se pueden instalar en el nicho.",
	curtains2: "Las cortinas pueden ser de una capa, multicapa o combinadas, retrayéndose completamente en el nicho.",
	curtains3: "Las guías y mecanismos están ocultos, preservando apariencia minimalista y limpia del techo.",
	mountTitle: "Instalación y mantenimiento",
	mount1: "El sistema se instala antes de estirar la tela, y después de la tela el nicho está completamente cerrado.",
	mount2: "Si es necesario, el acceso a mecanismos de cortinas es a través de paneles ocultos, sin retirar todo el techo.",
	mount3: "Compatible con otros sistemas integrados: líneas de luz, rieles, ventilación.",
	benefitsTitle: "Beneficios de cortinas ocultas",
	benefit1: "Invisibilidad completa de cornisa y guías",
	benefit2: "Se preserva superficie uniforme y limpia del techo",
	benefit3: "Posibilidad de instalar cualquier tipo de cortinas y tela",
	benefit4: "Mantenimiento fácil sin desmontaje de tela",
	benefit5: "Compatibilidad con sistemas de riel y luz",
	benefit6: "Diseño de interior minimalista y premium",
	text2: "Las cortinas ocultas convierten el techo en un elemento arquitectónico universal que combina estética, funcionalidad y comodidad. Los sistemas Descor y HEYtex permiten crear un interior donde cada detalle funciona para estilo y conveniencia.",
	price: "El costo de cortinas es 60 euros por metro lineal"
};
const es = {
	nav: nav$2,
	header: header$2,
	common: common$2,
	footer: footer$2,
	home: home$2,
	contactForm: contactForm$2,
	about: about$2,
	prices: prices$2,
	gallery: gallery$2,
	shadowCeilings: shadowCeilings$2,
	floatingCeilings: floatingCeilings$2,
	multiLevelCeilings: multiLevelCeilings$2,
	printedCeilings: printedCeilings$2,
	lightingSolutions: lightingSolutions$2,
	linearLighting: linearLighting$2,
	trackLighting: trackLighting$2,
	spotlights: spotlights$2,
	chandeliers: chandeliers$2,
	innovations: innovations$2,
	quietWalls: quietWalls$2,
	hiddenHatches: hiddenHatches$2,
	ventilation: ventilation$2,
	hiddenCurtains: hiddenCurtains$2
};

const es$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$2,
  chandeliers: chandeliers$2,
  common: common$2,
  contactForm: contactForm$2,
  default: es,
  floatingCeilings: floatingCeilings$2,
  footer: footer$2,
  gallery: gallery$2,
  header: header$2,
  hiddenCurtains: hiddenCurtains$2,
  hiddenHatches: hiddenHatches$2,
  home: home$2,
  innovations: innovations$2,
  lightingSolutions: lightingSolutions$2,
  linearLighting: linearLighting$2,
  multiLevelCeilings: multiLevelCeilings$2,
  nav: nav$2,
  prices: prices$2,
  printedCeilings: printedCeilings$2,
  quietWalls: quietWalls$2,
  shadowCeilings: shadowCeilings$2,
  spotlights: spotlights$2,
  trackLighting: trackLighting$2,
  ventilation: ventilation$2
}, Symbol.toStringTag, { value: 'Module' }));

var nav$1 = {
	tissueCeilings: "Fabric Ceilings",
	shadow: "Shadow",
	floating: "Floating",
	multiLevel: "Multi-level",
	printed: "Printed Fabric",
	lightingSolutions: "Lighting Solutions",
	linearLighting: "Linear Lighting",
	trackLighting: "Track Lighting",
	spotlights: "Spotlights",
	chandeliers: "Chandeliers",
	gallery: "Gallery",
	prices: "Prices",
	innovations: "Innovations",
	quietWalls: "Quiet Walls",
	hiddenHatches: "Hatches",
	ventilation: "Ventilation",
	hiddenCurtains: "Curtains",
	about: "ABOUT US"
};
var header$1 = {
	workingHours: "MON-FRI 9:00-18:00",
	phone: "+34662484848"
};
var common$1 = {
	callMeasurer: "Call a measurer",
	contactUs: "Contact us",
	sendRequest: "Send request",
	name: "Name",
	phone: "Phone",
	email: "Email",
	message: "Message",
	required: "*",
	requestForMeasurement: "Request for measurement",
	thankYou: "Thank you for your request! We will contact you soon."
};
var footer$1 = {
	title: "SkyLine Ceilings",
	description: "Premium Descor and HEYtex fabric ceilings",
	contacts: "Contacts",
	followUs: "Follow us",
	rights: "© 2024 SkyLine Ceilings. All rights reserved."
};
var home$1 = {
	heroTitle: "Fabrics from German manufacturers",
	heroSubtitle: "European quality and certificates",
	heroAlt: "Fabric ceilings",
	aboutTitle: "What are Descor and HEYtex fabric ceilings?",
	aboutLead: "Descor and HEYtex fabric ceilings are modern Hi-Tech stretch ceilings made from engineered textile with acrylic impregnation, designed for architectural and designer interiors. This is not plastic or film.",
	aboutText: "This is a breathable fabric that:",
	aboutFeature1: "has no odor",
	aboutFeature2: "does not emit harmful substances",
	aboutFeature3: "is not afraid of cold and heat",
	aboutFeature4: "looks like a perfectly painted ceiling",
	tissueAlt: "Fabric",
	ecologyTitle: "Eco-friendliness and hypoallergenicity",
	ecologyText: "Descor and HEYtex fabrics are produced according to European environmental safety standards and are suitable for premises with increased requirements:",
	ecologyFeature1: "do not contain PVC, phthalates and toxic plasticizers",
	ecologyFeature2: "do not emit volatile substances",
	ecologyFeature3: "do not attract dust",
	ecologyFeature4: "are not a medium for fungus and mold",
	ecologyFeature5: "hypoallergenic — safe for children and people with allergies",
	ecologyWhereTitle: "That is why such ceilings are used in:",
	ecologyWhere1: "residential houses",
	ecologyWhere2: "children's rooms",
	ecologyWhere3: "clinics",
	ecologyWhere4: "premium hotels and offices",
	techTitle: "HEYtex & Descor technology — the ceiling of the future",
	techCompositionTitle: "The fabric consists of:",
	techComposition1: "high-strength synthetic base",
	techComposition2: "acrylic impregnation, which provides:",
	techComposition2a: "geometric stability",
	techComposition2b: "moisture resistance",
	techComposition2c: "UV resistance",
	techComposition2d: "possibility of multiple painting",
	techBenefitsTitle: "Thanks to this, the ceiling:",
	techBenefit1: "does not sag",
	techBenefit2: "does not yellow",
	techBenefit3: "does not crack",
	techBenefit4: "maintains appearance for decades",
	appearanceTitle: "Appearance",
	appearanceText: "After installation, the ceiling looks like:",
	appearance1: "perfectly flat painted surface",
	appearance2: "expensive drywall without seams and cracks",
	appearance3: "designer architectural surface",
	appearanceNote: "Without gloss, glare and 'plastic' effect.",
	comparisonTitle: "Ceiling comparison",
	comparisonParameter: "Parameter",
	comparisonTissue: "Descor & HEYtex (fabric)",
	comparisonPVC: "PVC ceilings",
	comparisonGypsum: "Drywall",
	comparisonData: {
		material: {
			parameter: "Material",
			tissue: "Engineered textile with acrylic impregnation",
			pvc: "Plastic PVC film",
			gypsum: "Gypsum sheets"
		},
		ecology: {
			parameter: "Eco-friendliness",
			tissue: "No PVC, no toxins",
			pvc: "Contains plasticizers",
			gypsum: "Dust, putty, paints"
		},
		smell: {
			parameter: "Odor",
			tissue: "None",
			pvc: "Plastic smell",
			gypsum: "Material odors"
		},
		allergy: {
			parameter: "Allergy safety",
			tissue: "Hypoallergenic",
			pvc: "May cause reactions",
			gypsum: "Depends on paint"
		},
		breathable: {
			parameter: "Breathable",
			tissue: "Yes",
			pvc: "No",
			gypsum: "Partially"
		},
		appearance: {
			parameter: "Appearance",
			tissue: "Matte, like paint",
			pvc: "Gloss, matte 'film'",
			gypsum: "Depends on craftsmen"
		},
		seams: {
			parameter: "Seams",
			tissue: "None",
			pvc: "None",
			gypsum: "Has joints"
		},
		cracks: {
			parameter: "Cracks",
			tissue: "Do not appear",
			pvc: "None",
			gypsum: "Appear"
		},
		temperature: {
			parameter: "Cold and heat",
			tissue: "Not afraid",
			pvc: "Afraid of frost",
			gypsum: "Possible deformations"
		},
		installation: {
			parameter: "Installation",
			tissue: "1 day, no dust",
			pvc: "Fast, but with heating",
			gypsum: "Weeks of dirty work"
		},
		painting: {
			parameter: "Painting possibility",
			tissue: "5–7 times",
			pvc: "No",
			gypsum: "Yes, but with repair"
		},
		lifespan: {
			parameter: "Lifespan",
			tissue: "20+ years",
			pvc: "7–10 years",
			gypsum: "10–15 years"
		}
	},
	comparisonNote: "Descor and HEYtex fabric ceilings can be repainted 5–7 times with regular interior paint, changing the interior style without dismantling the ceiling.",
	typesTitle: "Types of fabric ceilings",
	typesShadow: "Shadow",
	typesShadowDesc: "Modern ceiling system with neat gap between wall and ceiling",
	typesFloating: "Floating",
	typesFloatingDesc: "Soft light line around the perimeter creates a floating effect",
	typesMultiLevel: "Multi-level",
	typesMultiLevelDesc: "Multiple levels create volume, depth and dynamics of space",
	typesPrinted: "With fabric printing",
	typesPrintedDesc: "High-quality image using digital printing",
	pricesButton: "Prices for fabric ceilings"
};
var contactForm$1 = {
	title: "Request for measurement"
};
var about$1 = {
	title: "About us",
	welcome: "Welcome to SkyLine Ceilings — a company that transforms ordinary ceilings into premium architectural elements. We create fabric ceilings and walls that combine style, functionality and technology, providing comfort and aesthetics in every project.",
	missionTitle: "Our mission",
	missionText: "We strive to make interiors modern, safe and unique:",
	mission1: "Each ceiling and wall is designed taking into account the individual characteristics of the room.",
	mission2: "We use only eco-friendly and hypoallergenic materials safe for children and adults.",
	mission3: "We create solutions that work for comfort, acoustics, light and visual space.",
	whyTitle: "Why choose SkyLine Ceilings",
	why1Title: "Experience and achievements",
	why1a: "More than 3 years on the European market",
	why1b: "More than 1500 meters of ceiling installed",
	why1c: "Up to 15 years warranty on materials and installation",
	why2Title: "Premium materials",
	why2a: "Descor and HEYtex stretch fabrics with acrylic impregnation",
	why2b: "Durable, resistant to moisture and wear",
	why2c: "Smooth matte surface without folds and glare",
	why3Title: "Innovative solutions",
	why3a: "Quiet fabric walls, hidden hatches, built-in ventilation, tracks and hidden curtains",
	why3b: "Integration of light lines, spotlights and chandeliers",
	why3c: "Multi-level ceilings and printed fabric",
	why4Title: "Technical professionalism",
	why4a: "Damping system for fabric tension",
	why4b: "Acoustic and functional solutions for any task",
	why4c: "Mounts for TVs, shelves, mirrors and other elements",
	why5Title: "Full transparency and convenience",
	why5a: "Transparent pricing system",
	why5b: "Support at all stages: from design to installation and maintenance",
	why5c: "Individual consultations and solution selection for interior style",
	philosophyTitle: "Our philosophy",
	philosophyText: "We believe that ceiling and walls are not just construction, but an element that sets the atmosphere of space. With us, your interiors become:",
	philosophy1: "functional and technological",
	philosophy2: "visually spacious and neat",
	philosophy3: "safe and eco-friendly",
	philosophyEnd: "We combine beauty, comfort and engineering solutions in one product, making each project unique and durable.",
	partnersTitle: "Our partners",
	partnersText: "We cooperate with leading European companies:",
	partnersEnd: "These partners ensure quality, innovation and reliability of all materials and systems we use.",
	contactTitle: "Contact us",
	contactText: "Our team is ready to offer an individual solution for any project: apartment, office, studio, commercial space or design showroom.",
	contactEnd: "With SkyLine Ceilings, your ceiling and walls are architecture, technology and style in every detail."
};
var prices$1 = {
	title: "Prices for Descor and HEYtex fabric ceilings",
	lead: "We offer a transparent pricing system. The cost depends on the area of the room, the number of corners and lighting elements.",
	element: "Element",
	price: "Price",
	notesTitle: "Notes",
	note1: "All prices include material and standard installation.",
	note2: "Complex structures, non-standard shapes and profiles are calculated individually.",
	note3: "Fixture prices are without lamps and LED modules.",
	ctaText: "For accurate calculation",
	items: {
		base: "Base room (4 corners + 2 built-in fixtures)",
		corner: "Additional corner",
		spotlight: "Additional built-in fixture",
		ceramic: "Profile mounting to ceramic granite",
		lightLine: "Light line",
		track: "Track system",
		trackLight: "Fixture in track",
		chandelier: "Chandelier",
		multiLevel: "Multi-level ceiling",
		printing: "Fabric printing"
	},
	priceValues: {
		base: "45 €/m²",
		corner: "+15 €/pcs",
		spotlight: "+15 €/pcs",
		ceramic: "+10 €/linear meter",
		lightLine: "+15 €/linear meter",
		track: "+35 €/linear meter",
		trackLight: "+25 €/pcs",
		chandelier: "+50 €/pcs",
		multiLevel: "65 €/m²",
		printing: "+25 €/m²"
	}
};
var gallery$1 = {
	title: "Gallery",
	lead: "Photos and videos of our completed works",
	workAlt: "Work"
};
var shadowCeilings$1 = {
	title: "Shadow ceilings",
	lead: "Shadow ceiling is a modern ceiling system where a neat gap — shadow line — is created between the wall and ceiling.",
	text1: "This visually separates the ceiling from the walls and makes it look like an independent architectural plane.",
	text2: "This technique is used in modern architecture and interior design where important are:",
	feature1: "clean lines",
	feature2: "precise geometry",
	feature3: "feeling of lightness and space",
	text3: "The shadow line is formed using a special aluminum profile installed around the perimeter of the room. It is hidden from view and creates an even, perfectly straight gap between ceiling and wall.",
	text4: "As a result, the ceiling does not touch the walls visually, creating a 'floating' effect and emphasizing the shape of the room.",
	text5: "Shadow ceilings are especially effective when combined with Descor and HEYtex fabric ceilings, as their matte surface emphasizes shadow depth and makes lines as clear as possible.",
	whereTitle: "This type of ceiling is used in:",
	where1: "modern apartments",
	where2: "private houses",
	where3: "designer interiors",
	where4: "premium commercial spaces",
	end: "Shadow ceiling is an architectural element that makes interiors cleaner, more modern and visually expensive.",
	alt: "Shadow ceiling"
};
var floatingCeilings$1 = {
	title: "Floating ceilings",
	lead: "Floating ceiling is a modern ceiling system where a soft light line is created around the perimeter of the room, making the ceiling appear suspended in the air.",
	text1: "Light comes from a hidden profile between ceiling and wall and forms uniform glow without visible light sources.",
	text2: "This creates an effect of lightness, depth and visual space increase.",
	importantTitle: "Floating ceilings are used in modern interiors where important are:",
	important1: "atmosphere",
	important2: "architectural light",
	important3: "sense of volume",
	text3: "The technology is based on a special aluminum profile with LED backlight installed around the perimeter. Light reflects from walls and softly illuminates the ceiling, forming a 'floating' effect.",
	text4: "Such system perfectly combines with Descor and HEYtex fabric ceilings, as their matte surface evenly diffuses light and eliminates glare.",
	makesTitle: "Floating ceiling makes interior:",
	makes1: "more modern",
	makes2: "more spacious",
	makes3: "more premium",
	end: "This is not just a ceiling — it's a light architectural element that forms the mood of the entire space.",
	alt: "Floating ceiling"
};
var multiLevelCeilings$1 = {
	title: "Multi-level ceiling",
	lead: "Multi-level ceiling is a ceiling system consisting of several levels or tiers located at different heights.",
	text1: "Each level creates volume, depth and dynamics of space, turning an ordinary ceiling into a designer interior element.",
	allowsTitle: "Such ceiling allows:",
	allows1: "to emphasize room architecture",
	allows2: "to zone space",
	allows3: "to integrate lighting solutions, hidden backlight or decorative elements",
	text2: "Multi-level structure is formed using special profiles and stretch fabric (e.g., Descor or HEYtex), allowing to create:",
	create1: "floating lines",
	create2: "stepped levels",
	create3: "complex geometric shapes",
	effectiveTitle: "Multi-level ceiling is especially effective in:",
	effective1: "living rooms and halls",
	effective2: "offices and showrooms",
	effective3: "restaurants and premium interiors",
	end: "It combines aesthetics and functionality, allowing to implement bold design ideas and visually expand space.",
	alt: "Multi-level ceiling"
};
var printedCeilings$1 = {
	title: "Ceilings with fabric printing",
	lead: "Ceilings with printing on fabric are designer stretch ceilings with high-quality images applied using digital printing.",
	text1: "The technology allows to turn the ceiling into a unique visual interior element — from light textures to artistic compositions and sky with clouds.",
	text2: "Printing is done on Descor and HEYtex fabrics, which have a special surface for even paint absorption.",
	text3: "The image becomes part of the fabric and does not crack, fade or peel over time.",
	looksTitle: "How does it look?",
	canBeTitle: "The ceiling can be:",
	canBe1: "solid with light texture",
	canBe2: "with graphics or patterns",
	canBe3: "with imitation of concrete, fabric, sky, marble",
	canBe4: "with artistic or branded design",
	looksNote: "Matte fabric surface eliminates glare and makes the image deep and natural.",
	techTitle: "Printing technology",
	techText: "Eco-friendly latex or UV printing is used, which:",
	tech1: "has no odor",
	tech2: "safe for residential premises",
	tech3: "UV resistant",
	tech4: "does not fade for years",
	techNote: "Printing does not damage fabric structure and preserves its breathability.",
	whereTitle: "Where are they used?",
	whereUsedTitle: "Printed ceilings are used in:",
	whereUsed1: "apartments and houses",
	whereUsed2: "children's rooms",
	whereUsed3: "restaurants and hotels",
	whereUsed4: "offices and showrooms",
	whereUsed5: "commercial and exhibition spaces",
	whereEnd: "This is an ideal solution when the ceiling should become part of the design, not just background.",
	alt: "Ceiling with printing"
};
var lightingSolutions$1 = {
	heroTitle: "No restrictions at all",
	heroSubtitle: "for using any lighting fixtures in fabric ceilings",
	heroAlt: "Lighting solutions",
	lead: "Lighting is one of the key interior elements. Light shapes the feeling of space, affects mood, comfort and how colors, forms and materials are perceived.",
	text1: "Even the most expensive interior without properly built light looks flat. Conversely — competent lighting can make space visually higher, wider and more expensive.",
	text2: "Descor and HEYtex fabric ceilings allow building architectural lighting where light sources become part of the ceiling, not separate fixtures. Light integrates into the structure and works as a unified system.",
	text3: "Matte fabric structure plays an important role: it softly diffuses light, eliminates glare and harsh shadows, making lighting:",
	feature1: "calm for eyes",
	feature2: "even",
	feature3: "deep and natural",
	text4: "Such light does not tire, does not 'cut' space and creates a feeling of comfort and premium.",
	allowsTitle: "Properly designed lighting allows:",
	allows1: "to visually increase ceiling height",
	allows2: "to highlight zones in the room",
	allows3: "to emphasize architecture",
	allows4: "to create different scenarios — from bright working to soft evening",
	text5: "Lighting systems in fabric ceilings are designed as a whole: light lines, tracks, backlights and fixtures work together, forming a holistic light image of the interior.",
	linearTitle: "Linear lighting",
	linearDesc: "Light lines built into the ceiling create clear geometry and modern style.",
	trackTitle: "Track systems",
	trackDesc: "Magnetic and classic track systems are integrated into the ceiling, allowing to change fixture placement.",
	spotlightsTitle: "Built-in fixtures",
	spotlightsDesc: "Spotlights and spots integrate into the fabric, remaining almost invisible.",
	chandeliersTitle: "Chandeliers and designer pendants",
	chandeliersDesc: "Fabric ceilings allow installing chandeliers, pendant and designer fixtures without restrictions."
};
var linearLighting$1 = {
	title: "Linear lighting in fabric ceilings",
	lead: "Linear lighting is one of the most modern and architectural ways to backlight a ceiling. In systems with Descor and HEYtex fabric ceilings, light lines become part of the structure and look like built-in light elements, not surface-mounted fixtures.",
	text1: "An aluminum profile attached to the base ceiling is used for installation. An LED module with diffuser is placed inside the profile, then the fabric is stretched flush with the profile. As a result, the light line is perfectly even, without frames, gaps and visible mounts.",
	allowsTitle: "Such lines can be used as main light source or architectural backlight. They allow creating:",
	allows1: "straight and broken lines",
	allows2: "geometric shapes",
	allows3: "light zones",
	text2: "Matte Descor and HEYtex fabric evenly diffuses light, so lines look soft and deep, without dots and harsh glare.",
	text3: "Linear lighting is especially in demand in modern apartments, offices, showrooms and commercial interiors where clean geometry and minimalist style are important.",
	alt: "Linear lighting"
};
var trackLighting$1 = {
	title: "Track systems in fabric ceilings",
	lead: "Track lighting is a flexible system that allows directing light where it's needed. In Descor and HEYtex fabric ceilings, tracks integrate into the ceiling structure and look like part of architecture, not surface-mounted equipment.",
	text1: "Special mounts to which track profile is attached are installed before stretching fabric. After this, fabric is stretched flush with the system, and track becomes visually built into the ceiling.",
	canMountTitle: "In such ceilings can be mounted:",
	canMount1: "magnetic track systems",
	canMount2: "classic busbar systems",
	text2: "Fixtures can be freely moved, added or removed, light direction changed and new light scenarios created without ceiling rework.",
	text3: "This solution is ideal for living rooms, kitchens, offices, stores and galleries where flexibility and ability to change interior accents are required.",
	alt: "Track lighting"
};
var spotlights$1 = {
	title: "Spotlights in fabric ceilings",
	lead: "Spotlights are a universal way to create functional and neat lighting. In Descor and HEYtex fabric ceilings they are installed using thermal rings and mounting platforms fixed to the base ceiling before fabric stretching.",
	systemTitle: "Such system:",
	system1: "protects fabric from heating",
	system2: "provides rigid fixture fixation",
	system3: "allows fixture replacement if needed without ceiling dismantling",
	usedForTitle: "Spotlights are used for:",
	usedFor1: "general lighting",
	usedFor2: "work zones",
	usedFor3: "furniture, wall and niche backlighting",
	text1: "Thanks to matte fabric surface, light becomes soft and comfortable, and fixtures themselves look neat and do not violate ceiling cleanliness.",
	alt: "Spotlights"
};
var chandeliers$1 = {
	title: "Chandeliers and pendant fixtures in fabric ceilings",
	lead: "Fabric ceilings allow installing chandeliers and pendant fixtures of any design and weight. All mounts are made to the base ceiling through special mounting platforms, and fabric neatly bypasses the mount point.",
	meansTitle: "This means that:",
	means1: "fabric does not bear load",
	means2: "ceiling maintains perfect shape",
	means3: "massive and designer fixtures can be used",
	text1: "All wiring, mounts and fixation elements are hidden behind the ceiling, so only the fixture itself is visible in the interior — clean and aesthetic.",
	text2: "Chandeliers and pendants are often used as central design elements, and built-in lighting complements them and creates multi-level light scenarios.",
	alt: "Chandeliers"
};
var innovations$1 = {
	heroTitle: "We keep up with the latest innovations in fabric ceilings",
	heroSubtitle: "and always implement all innovations in our projects",
	heroAlt: "Innovations",
	title: "Latest fabric ceiling market innovations",
	lead: "Modern fabric ceilings are not just a flat surface overhead. Today these are innovative architectural systems that combine design, comfort and functionality.",
	text1: "Technologies appear on the market that make ceilings and walls smarter, quieter and more flexible:",
	quietWallsTitle: "Quiet fabric walls",
	quietWallsDesc: "They create coziness and absorb sound, turning the room into a quiet and comfortable zone.",
	hiddenHatchesTitle: "Hidden hatches and panels",
	hiddenHatchesDesc: "Invisibly hiding access to utilities and allowing to maintain perfect ceiling surface.",
	ventilationTitle: "Ventilation and air conditioning systems",
	ventilationDesc: "Built directly into profiles and tracks, without bulky boxes and visible grilles.",
	hiddenCurtainsTitle: "Hidden curtains and drapes",
	hiddenCurtainsDesc: "Which completely hide in the ceiling, providing minimalist and modern interior.",
	text2: "These innovations make ceilings not only beautiful but also smart and functional. They allow managing light, air, sound and even decor — all hidden from view.",
	text3: "With Descor and HEYtex fabric ceilings you create space that looks expensive, works for comfort and emphasizes unique interior style."
};
var quietWalls$1 = {
	title: "Quiet fabric walls",
	lead: "Quiet fabric walls are a modern solution for interiors where comfort, acoustics and style are important. They turn ordinary walls into functional, designer and acoustically comfortable surfaces, creating a feeling of silence and coziness.",
	text1: "Systems made from Descor and HEYtex fabrics make walls not only beautiful but also technically perfect:",
	feature1: "soft matte surface",
	feature2: "even stretching without folds",
	feature3: "hypoallergenic and eco-friendly materials",
	techTitle: "Technical description",
	techDesc: "Quiet fabric walls consist of several key elements:",
	frameTitle: "Frame and profiles",
	frame1: "Aluminum profiles are attached to walls and form a strong frame for fabric.",
	frame2: "Profiles allow stretching fabric without folds and maintaining its shape for decades.",
	frame3: "Mounts for any tasks can be integrated into the frame: TV, mirrors, shelves and other interior elements.",
	frame4: "Possibility of installing hidden niches, light lines or tracks.",
	acousticTitle: "Acoustic fabric",
	acoustic1: "Special 2 cm thick acoustic fabric is laid under the fabric, significantly increasing sound absorption.",
	acoustic2: "The fabric reduces noise, making the room quieter and more comfortable for work and rest.",
	tissueTitle: "Fabric",
	tissue1: "High-quality Descor and HEYtex fabrics with acrylic impregnation are used.",
	tissue2: "Stretched using damping system that provides even and safe stretching without folds.",
	tissue3: "Material additionally absorbs sound waves, improving room acoustics.",
	soundTitle: "Sound insulation properties",
	sound1: "Combination of acoustic fabric, tissue and frame reduces noise level by 40–50%.",
	sound2: "System is suitable for apartments, offices, meeting rooms and children's rooms.",
	mountTitle: "Installation and maintenance",
	mount1: "Fabric is stretched on profiles with damping system, ensuring safe and even stretching.",
	mount2: "Easy dismantling allows maintaining hidden utilities or changing fabric without wall destruction.",
	mount3: "Not afraid of moisture and easily cleaned with damp soft cloth.",
	benefitsTitle: "Benefits of quiet fabric walls",
	benefit1: "Significant noise level reduction",
	benefit2: "Eco-friendly and hypoallergenic materials",
	benefit3: "Smooth matte surface without joints and folds",
	benefit4: "Possibility of integrating mounts for TV, mirrors, shelves and other elements",
	benefit5: "Possibility of installing light lines, tracks and hidden systems",
	benefit6: "Easy dismantling for maintenance",
	benefit7: "Modern minimalist and premium design",
	text2: "Quiet fabric walls turn interiors into space comfortable for work, rest and life, combining style, acoustics and functionality. Descor and HEYtex systems allow creating premium solutions where each wall works for comfort and room design.",
	price: "Cost per m² of quiet fabric walls starts from 45 euros, depending on many factors such as wall condition, number of corners, outlet switches etc."
};
var hiddenHatches$1 = {
	title: "Hidden hatches in fabric ceilings",
	lead: "Modern Descor and HEYtex fabric ceilings allow integrating invisible hatches and panels that completely merge with the fabric. This solution is ideal for spaces where minimalism, clean lines and functionality are important, and utility access remains hidden.",
	text1: "Hidden hatches turn the ceiling into an architectural element that works for comfort and design without violating visual interior integrity.",
	techTitle: "Technical description",
	techDesc: "Hidden hatches consist of several elements:",
	frameTitle: "Frame and profiles",
	frame1: "Aluminum profiles form a strong hatch frame that integrates into the stretch ceiling.",
	frame2: "Profiles allow fixing fabric evenly, ensuring perfect geometry and absence of folds.",
	frame3: "Damping system stretches fabric effortlessly, preserving fabric integrity and construction durability.",
	faceTitle: "Fabric front",
	face1: "Same fabric as on the ceiling is used so the hatch is invisible after installation.",
	face2: "Descor and HEYtex materials are hypoallergenic, eco-friendly and durable.",
	accessTitle: "Utility access",
	access1: "Hatch allows unnoticeable access to wiring, ventilation, fixtures and other hidden elements.",
	access2: "Removed easily and safely without fabric or ceiling construction damage.",
	mountTitle: "Installation and maintenance",
	mount1: "Installation is performed together with fabric stretching.",
	mount2: "Frame can be prepared for any hatch sizes and shapes, including square, rectangular or custom designer options.",
	mount3: "Hatch maintenance does not require full ceiling dismantling — just open the hatch and perform work.",
	benefitsTitle: "Benefits of hidden hatches",
	benefit1: "Complete invisibility after installation",
	benefit2: "Easy utility access without ceiling dismantling",
	benefit3: "Compatibility with Descor and HEYtex fabric ceilings",
	benefit4: "Possibility of individual hatch size and shape",
	benefit5: "Use of damping system for safe and even fabric stretching",
	benefit6: "Suitable for residential, office and commercial premises",
	text2: "Hidden hatches make fabric ceiling maximally functional and minimalist, allowing to combine aesthetics and practicality. Descor and HEYtex systems turn the ceiling into a full architectural element that hides all utilities while remaining a perfect visual surface.",
	price: "Cost of hidden hatch manufacturing starts from 100 euros and is calculated individually"
};
var ventilation$1 = {
	title: "Built-in ventilation and air conditioning systems in fabric ceilings",
	lead: "Modern Descor and HEYtex fabric ceilings allow integrating ventilation and air conditioning directly into profiles and track systems. This solution is ideal for interiors where minimalism, clean lines and functionality are important, as well as even air distribution without bulky boxes and grilles.",
	text1: "Built-in systems make the ceiling not only a decorative element but also part of engineering infrastructure, preserving aesthetic appearance and room comfort.",
	techTitle: "Technical description",
	techText: "Ventilation and air conditioning systems integrate into aluminum profiles and track channels installed on the base ceiling before fabric stretching.",
	profilesTitle: "Profiles and tracks",
	profiles1: "Profiles and track systems are made with possibility of embedding air ducts and ventilation grilles.",
	profiles2: "Hidden channels allow directing air flow exactly to needed zones, creating comfortable circulation without visible elements.",
	functionsTitle: "Functional capabilities",
	functions1: "Connection to central air conditioning or ventilation system.",
	functions2: "Hidden grilles and ventilation channels are fully integrated without violating minimalist design.",
	mountTitle: "Installation and maintenance",
	mount1: "All components are installed before fabric stretching, ensuring precise air duct placement.",
	mount2: "Fabric ceiling is easily removed or provides access to ventilation elements without construction damage.",
	benefitsTitle: "Benefits of built-in ventilation and air conditioning",
	benefit1: "Aesthetics: no visible boxes and grilles",
	benefit2: "Functionality: even air distribution",
	benefit3: "Compatibility with all Descor and HEYtex systems",
	benefit4: "Easy maintenance without full fabric dismantling",
	benefit5: "Minimalist and modern interior",
	text2: "Built-in ventilation and air conditioning systems turn fabric ceiling into a full engineering and architectural element, combining design, comfort and functionality.",
	price: "Cost of such structures is calculated individually as they are manufactured individually for each project"
};
var hiddenCurtains$1 = {
	title: "Hidden curtains in fabric ceilings",
	lead: "Modern Descor and HEYtex fabric ceilings allow completely hiding curtain and drape systems inside profiles. This solution is ideal for interiors where clean lines, minimalism and premium look are important, and curtains themselves remain functional but completely invisible when not used.",
	text1: "Hidden curtains turn the ceiling into an architectural element combining style, technology and comfort of managing light and privacy.",
	techTitle: "Technical description",
	techDesc: "Hidden curtain systems consist of several elements:",
	frameTitle: "Profiles and frame",
	frame1: "Aluminum profiles integrate into fabric ceiling and create invisible niche for cornice or guide.",
	frame2: "Profile ensures strength, precise geometry and maintains ceiling fabric even and without folds.",
	frame3: "Profile can be combined with tracks and mounts for additional interior elements.",
	tissueTitle: "Ceiling fabric",
	tissue1: "Descor or HEYtex fabric is stretched using damping system, preserving even ceiling surface.",
	tissue2: "Hidden curtains are completely closed with fabric and become almost invisible from any angle.",
	curtainsTitle: "Curtain systems",
	curtains1: "Both classic cornices and track systems for curtains can be installed in the niche.",
	curtains2: "Curtains can be single-layer, multi-layer or combined, completely retracting into the niche.",
	curtains3: "Guides and mechanisms are hidden, preserving minimalist and clean ceiling appearance.",
	mountTitle: "Installation and maintenance",
	mount1: "System is installed before fabric stretching, and after fabric the niche is completely closed.",
	mount2: "If needed, access to curtain mechanisms is through hidden panels, without removing the entire ceiling.",
	mount3: "Compatible with other built-in systems: light lines, tracks, ventilation.",
	benefitsTitle: "Benefits of hidden curtains",
	benefit1: "Complete invisibility of cornice and guides",
	benefit2: "Even, clean ceiling surface is preserved",
	benefit3: "Possibility of installing any types of curtains and fabric",
	benefit4: "Easy maintenance without fabric dismantling",
	benefit5: "Compatibility with track and light systems",
	benefit6: "Minimalist and premium interior design",
	text2: "Hidden curtains turn the ceiling into a universal architectural element that combines aesthetics, functionality and comfort. Descor and HEYtex systems allow creating an interior where every detail works for style and convenience.",
	price: "Cost of curtains is 60 euros per linear meter"
};
const en = {
	nav: nav$1,
	header: header$1,
	common: common$1,
	footer: footer$1,
	home: home$1,
	contactForm: contactForm$1,
	about: about$1,
	prices: prices$1,
	gallery: gallery$1,
	shadowCeilings: shadowCeilings$1,
	floatingCeilings: floatingCeilings$1,
	multiLevelCeilings: multiLevelCeilings$1,
	printedCeilings: printedCeilings$1,
	lightingSolutions: lightingSolutions$1,
	linearLighting: linearLighting$1,
	trackLighting: trackLighting$1,
	spotlights: spotlights$1,
	chandeliers: chandeliers$1,
	innovations: innovations$1,
	quietWalls: quietWalls$1,
	hiddenHatches: hiddenHatches$1,
	ventilation: ventilation$1,
	hiddenCurtains: hiddenCurtains$1
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about$1,
  chandeliers: chandeliers$1,
  common: common$1,
  contactForm: contactForm$1,
  default: en,
  floatingCeilings: floatingCeilings$1,
  footer: footer$1,
  gallery: gallery$1,
  header: header$1,
  hiddenCurtains: hiddenCurtains$1,
  hiddenHatches: hiddenHatches$1,
  home: home$1,
  innovations: innovations$1,
  lightingSolutions: lightingSolutions$1,
  linearLighting: linearLighting$1,
  multiLevelCeilings: multiLevelCeilings$1,
  nav: nav$1,
  prices: prices$1,
  printedCeilings: printedCeilings$1,
  quietWalls: quietWalls$1,
  shadowCeilings: shadowCeilings$1,
  spotlights: spotlights$1,
  trackLighting: trackLighting$1,
  ventilation: ventilation$1
}, Symbol.toStringTag, { value: 'Module' }));

var nav = {
	tissueCeilings: "Тканевые потолки",
	shadow: "Теневые",
	floating: "Парящие",
	multiLevel: "Многоуровневые",
	printed: "Печать на ткани",
	lightingSolutions: "Световые решения",
	linearLighting: "Линейное освещение",
	trackLighting: "Трековое освещение",
	spotlights: "Точечные светильники",
	chandeliers: "Люстры, бра",
	gallery: "Галерея",
	prices: "Цены",
	innovations: "Новинки",
	quietWalls: "Тихие стены",
	hiddenHatches: "Люки",
	ventilation: "Вентиляция",
	hiddenCurtains: "Гардины",
	about: "О НАС"
};
var header = {
	workingHours: "ПН-ПТ 9:00-18:00",
	phone: "+34662484848"
};
var common = {
	callMeasurer: "Вызвать замерщика",
	contactUs: "Связаться с нами",
	sendRequest: "Отправить заявку",
	name: "Имя",
	phone: "Телефон",
	email: "Email",
	message: "Сообщение",
	required: "*",
	requestForMeasurement: "Заявка на замер",
	thankYou: "Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время."
};
var footer = {
	title: "SkyLine Ceilings",
	description: "Премиальные тканевые потолки Descor и HEYtex",
	contacts: "Контакты",
	followUs: "Следите за нами",
	rights: "© 2024 SkyLine Ceilings. Все права защищены."
};
var home = {
	heroTitle: "Ткани от немецких производителей",
	heroSubtitle: "Европейское качество и сертификаты",
	heroAlt: "Тканевые потолки",
	aboutTitle: "Что такое тканевые потолки Descor и HEYtex?",
	aboutLead: "Тканевые потолки Descor и HEYtex — это современные натяжные потолки класса Hi-Tech, выполненные из инженерного текстиля с акриловой пропиткой, разработанного для архитектурных и дизайнерских интерьеров. Это не пластик и не плёнка.",
	aboutText: "Это дышащее тканевое полотно, которое:",
	aboutFeature1: "не имеет запаха",
	aboutFeature2: "не выделяет вредных веществ",
	aboutFeature3: "не боится холода и жары",
	aboutFeature4: "выглядит как идеально окрашенный потолок",
	tissueAlt: "Ткань",
	ecologyTitle: "Экологичность и гипоаллергенность",
	ecologyText: "Ткани Descor и HEYtex производятся по европейским стандартам экологической безопасности и подходят для помещений с повышенными требованиями:",
	ecologyFeature1: "не содержат ПВХ, фталатов и токсичных пластификаторов",
	ecologyFeature2: "не выделяют летучие вещества",
	ecologyFeature3: "не притягивают пыль",
	ecologyFeature4: "не являются средой для грибка и плесени",
	ecologyFeature5: "гипоаллергенны — безопасны для детей и людей с аллергией",
	ecologyWhereTitle: "Именно поэтому такие потолки используют в:",
	ecologyWhere1: "жилых домах",
	ecologyWhere2: "детских комнатах",
	ecologyWhere3: "клиниках",
	ecologyWhere4: "отелях и офисах премиум-класса",
	techTitle: "Технология HEYtex & Descor — потолок будущего",
	techCompositionTitle: "Полотно состоит из:",
	techComposition1: "высокопрочной синтетической основы",
	techComposition2: "акриловой пропитки, которая обеспечивает:",
	techComposition2a: "геометрическую стабильность",
	techComposition2b: "влагостойкость",
	techComposition2c: "устойчивость к ультрафиолету",
	techComposition2d: "возможность многократного окрашивания",
	techBenefitsTitle: "Благодаря этому потолок:",
	techBenefit1: "не провисает",
	techBenefit2: "не желтеет",
	techBenefit3: "не трескается",
	techBenefit4: "сохраняет внешний вид десятилетиями",
	appearanceTitle: "Внешний вид",
	appearanceText: "После установки потолок выглядит как:",
	appearance1: "идеально ровная окрашенная плоскость",
	appearance2: "дорогой гипсокартон без швов и трещин",
	appearance3: "дизайнерская архитектурная поверхность",
	appearanceNote: "Без глянца, бликов и «пластикового» эффекта.",
	comparisonTitle: "Сравнение потолков",
	comparisonParameter: "Параметр",
	comparisonTissue: "Descor & HEYtex (тканевые)",
	comparisonPVC: "ПВХ потолки",
	comparisonGypsum: "Гипсокартон",
	comparisonData: {
		material: {
			parameter: "Материал",
			tissue: "Инженерный текстиль с акриловой пропиткой",
			pvc: "Пластиковая ПВХ-плёнка",
			gypsum: "Гипсовые листы"
		},
		ecology: {
			parameter: "Экологичность",
			tissue: "Без ПВХ, без токсинов",
			pvc: "Содержит пластификаторы",
			gypsum: "Пыль, шпаклёвки, краски"
		},
		smell: {
			parameter: "Запах",
			tissue: "Нет",
			pvc: "Есть запах пластика",
			gypsum: "Есть запахи материалов"
		},
		allergy: {
			parameter: "Аллергобезопасность",
			tissue: "Гипоаллергенные",
			pvc: "Может вызывать реакции",
			gypsum: "В зависимости от краски"
		},
		breathable: {
			parameter: "«Дышит»",
			tissue: "Да",
			pvc: "Нет",
			gypsum: "Частично"
		},
		appearance: {
			parameter: "Внешний вид",
			tissue: "Матовый, как краска",
			pvc: "Глянец, мат «плёнка»",
			gypsum: "Зависит от мастеров"
		},
		seams: {
			parameter: "Швы",
			tissue: "Нет",
			pvc: "Нет",
			gypsum: "Есть стыки"
		},
		cracks: {
			parameter: "Трещины",
			tissue: "Не появляются",
			pvc: "Нет",
			gypsum: "Появляются"
		},
		temperature: {
			parameter: "Холод и жара",
			tissue: "Не боится",
			pvc: "Боится мороза",
			gypsum: "Возможны деформации"
		},
		installation: {
			parameter: "Монтаж",
			tissue: "1 день, без пыли",
			pvc: "Быстро, но с нагревом",
			gypsum: "Недели грязных работ"
		},
		painting: {
			parameter: "Возможность покраски",
			tissue: "5–7 раз",
			pvc: "Нет",
			gypsum: "Да, но с ремонтом"
		},
		lifespan: {
			parameter: "Срок службы",
			tissue: "20+ лет",
			pvc: "7–10 лет",
			gypsum: "10–15 лет"
		}
	},
	comparisonNote: "Тканевые потолки Descor и HEYtex можно перекрашивать 5–7 раз обычной интерьерной краской, меняя стиль интерьера без демонтажа потолка.",
	typesTitle: "Виды тканевых потолков",
	typesShadow: "Теневые",
	typesShadowDesc: "Современная потолочная система с аккуратным зазором между стеной и потолком",
	typesFloating: "Парящие",
	typesFloatingDesc: "Мягкая световая линия по периметру создаёт эффект парения",
	typesMultiLevel: "Многоуровневые",
	typesMultiLevelDesc: "Несколько уровней создают объём, глубину и динамику пространства",
	typesPrinted: "С печатью на ткани",
	typesPrintedDesc: "Высококачественное изображение методом цифровой печати",
	pricesButton: "Цены на тканевые потолки"
};
var contactForm = {
	title: "Заявка на замер"
};
var about = {
	title: "О нас",
	welcome: "Добро пожаловать в SkyLine Ceilings — компанию, которая превращает обычные потолки в архитектурные элементы премиум-класса. Мы создаём тканевые потолки и стены, которые сочетают стиль, функциональность и технологичность, обеспечивая комфорт и эстетику в каждом проекте.",
	missionTitle: "Наша миссия",
	missionText: "Мы стремимся делать интерьер современным, безопасным и уникальным:",
	mission1: "Каждый потолок и стена проектируются с учётом индивидуальных особенностей помещения.",
	mission2: "Используем только экологичные и гипоаллергенные материалы, безопасные для детей и взрослых.",
	mission3: "Создаём решения, которые работают на комфорт, акустику, свет и визуальное пространство.",
	whyTitle: "Почему выбирают SkyLine Ceilings",
	why1Title: "Опыт и достижения",
	why1a: "Более 3 лет на рынке Европы",
	why1b: "Установлено более 1500 метров потолка",
	why1c: "Гарантия до 15 лет на материалы и монтаж",
	why2Title: "Премиальные материалы",
	why2a: "Натяжные полотна Descor и HEYtex с акриловой пропиткой",
	why2b: "Долговечные, устойчивые к влаге и износу",
	why2c: "Ровная матовая поверхность без складок и бликов",
	why3Title: "Инновационные решения",
	why3a: "Тихие тканевые стены, скрытые люки, встроенная вентиляция, треки и скрытые гардины",
	why3b: "Возможность интеграции световых линий, точечных светильников и люстр",
	why3c: "Многоуровневые потолки и ткань с печатью",
	why4Title: "Технический профессионализм",
	why4a: "Демпферная система натяжения ткани",
	why4b: "Акустические и функциональные решения под любые задачи",
	why4c: "Закладные для телевизоров, полок, зеркал и других элементов",
	why5Title: "Полная прозрачность и удобство",
	why5a: "Прозрачная система ценообразования",
	why5b: "Поддержка на всех этапах: от проектирования до монтажа и обслуживания",
	why5c: "Индивидуальные консультации и подбор решений под стиль интерьера",
	philosophyTitle: "Наша философия",
	philosophyText: "Мы считаем, что потолок и стены — это не просто конструкция, а элемент, который задаёт атмосферу пространства. С нами ваши интерьеры становятся:",
	philosophy1: "функциональными и технологичными",
	philosophy2: "визуально просторными и аккуратными",
	philosophy3: "безопасными и экологичными",
	philosophyEnd: "Мы объединяем красоту, комфорт и инженерные решения в одном продукте, делая каждый проект уникальным и долговечным.",
	partnersTitle: "Наши партнёры",
	partnersText: "Мы сотрудничаем с ведущими европейскими компаниями:",
	partnersEnd: "Эти партнёры обеспечивают качество, инновации и надёжность всех материалов и систем, которые мы используем.",
	contactTitle: "Свяжитесь с нами",
	contactText: "Наша команда готова предложить индивидуальное решение под любой проект: квартира, офис, студия, коммерческое пространство или дизайн-шоурум.",
	contactEnd: "С SkyLine Ceilings ваш потолок и стены — это архитектура, технология и стиль в каждой детали."
};
var prices = {
	title: "Цены на тканевые потолки Descor и HEYtex",
	lead: "Мы предлагаем прозрачную систему ценообразования. Стоимость зависит от площади помещения, количества углов и световых элементов.",
	element: "Элемент",
	price: "Цена",
	notesTitle: "Примечания",
	note1: "Все цены включают материал и стандартный монтаж.",
	note2: "Сложные конструкции, нестандартные формы и профили рассчитываются индивидуально.",
	note3: "Стоимость светильников указана без ламп и LED-модулей.",
	ctaText: "Для точного просчета",
	items: {
		base: "Базовое помещение (4 угла + 2 встроенных светильника)",
		corner: "Дополнительный угол",
		spotlight: "Дополнительный встроенный светильник",
		ceramic: "Крепление профиля к керамограниту",
		lightLine: "Световая линия",
		track: "Трековая система",
		trackLight: "Светильник в трек",
		chandelier: "Люстра",
		multiLevel: "Многоуровневый потолок",
		printing: "Печать на ткани"
	},
	priceValues: {
		base: "45 €/м²",
		corner: "+15 €/шт",
		spotlight: "+15 €/шт",
		ceramic: "+10 €/погонный метр",
		lightLine: "+15 €/погонный метр",
		track: "+35 €/погонный метр",
		trackLight: "+25 €/шт",
		chandelier: "+50 €/шт",
		multiLevel: "65 €/м²",
		printing: "+25 €/м²"
	}
};
var gallery = {
	title: "Галерея",
	lead: "Фотографии и видео выполненных нами работ",
	workAlt: "Работа"
};
var shadowCeilings = {
	title: "Теневые потолки",
	lead: "Теневой потолок — это современная потолочная система, в которой между стеной и потолком создаётся аккуратный зазор — теневая линия.",
	text1: "За счёт этого потолок визуально отделён от стен и выглядит как самостоятельная архитектурная плоскость.",
	text2: "Такой приём используется в современной архитектуре и дизайне интерьеров, где важны:",
	feature1: "чистые линии",
	feature2: "точная геометрия",
	feature3: "ощущение лёгкости и пространства",
	text3: "Теневая линия формируется с помощью специального алюминиевого профиля, установленного по периметру помещения. Он скрыт от глаз и создаёт ровный, идеально прямой зазор между потолком и стеной.",
	text4: "В результате потолок не соприкасается со стенами визуально, что создаёт эффект «парения» и подчёркивает форму помещения.",
	text5: "Теневые потолки особенно эффектно сочетаются с тканевыми потолками Descor и HEYtex, потому что их матовая поверхность подчёркивает глубину тени и делает линии максимально чёткими.",
	whereTitle: "Этот тип потолка используется в:",
	where1: "современных квартирах",
	where2: "частных домах",
	where3: "дизайнерских интерьерах",
	where4: "премиальных коммерческих пространствах",
	end: "Теневой потолок — это архитектурный элемент, который делает интерьер более чистым, современным и визуально дорогим.",
	alt: "Теневой потолок"
};
var floatingCeilings = {
	title: "Парящие потолки",
	lead: "Парящий потолок — это современная потолочная система, при которой по периметру помещения создаётся мягкая световая линия, из-за которой потолок визуально кажется подвешенным в воздухе.",
	text1: "Свет выходит из скрытого профиля между потолком и стеной и формирует равномерное свечение без видимых источников света.",
	text2: "Это создаёт эффект лёгкости, глубины и визуального увеличения пространства.",
	importantTitle: "Парящие потолки используются в современных интерьерах, где важны:",
	important1: "атмосфера",
	important2: "архитектурный свет",
	important3: "ощущение объёма",
	text3: "Технология основана на специальном алюминиевом профиле с LED-подсветкой, который устанавливается по периметру помещения. Свет отражается от стен и мягко подсвечивает потолок, формируя эффект «парения».",
	text4: "Такая система идеально сочетается с тканевыми потолками Descor и HEYtex, потому что их матовая поверхность равномерно рассеивает свет и не даёт бликов.",
	makesTitle: "Парящий потолок делает интерьер:",
	makes1: "более современным",
	makes2: "более просторным",
	makes3: "более премиальным",
	end: "Это не просто потолок — это световой архитектурный элемент, который формирует настроение всего пространства.",
	alt: "Парящий потолок"
};
var multiLevelCeilings = {
	title: "Многоуровневый потолок",
	lead: "Многоуровневый потолок — это потолочная система, состоящая из нескольких уровней или ярусов, расположенных на разных высотах.",
	text1: "Каждый уровень создаёт объём, глубину и динамику пространства, превращая обычный потолок в дизайнерский элемент интерьера.",
	allowsTitle: "Такой потолок позволяет:",
	allows1: "подчеркнуть архитектуру помещения",
	allows2: "зонировать пространство",
	allows3: "интегрировать световые решения, скрытую подсветку или декоративные элементы",
	text2: "Многоуровневая конструкция формируется с помощью специальных профилей и натяжного полотна (например, Descor или HEYtex), благодаря чему можно создавать:",
	create1: "парящие линии",
	create2: "ступенчатые уровни",
	create3: "сложные геометрические формы",
	effectiveTitle: "Многоуровневый потолок особенно эффектен в:",
	effective1: "гостиных и залах",
	effective2: "офисах и шоурумах",
	effective3: "ресторанах и премиальных интерьерах",
	end: "Он сочетает в себе эстетику и функциональность, позволяя воплощать смелые дизайнерские идеи и визуально расширять пространство.",
	alt: "Многоуровневый потолок"
};
var printedCeilings = {
	title: "Потолки с печатью на ткани",
	lead: "Потолки с печатью на тканевом полотне — это дизайнерские натяжные потолки, на которые наносится высококачественное изображение методом цифровой печати.",
	text1: "Технология позволяет превратить потолок в уникальный визуальный элемент интерьера — от лёгких текстур до художественных композиций и неба с облаками.",
	text2: "Печать выполняется на тканях Descor и HEYtex, которые имеют специальную поверхность для равномерного впитывания краски.",
	text3: "Изображение становится частью полотна и не трескается, не выцветает и не отслаивается со временем.",
	looksTitle: "Как это выглядит?",
	canBeTitle: "Потолок может быть:",
	canBe1: "однотонным с лёгкой текстурой",
	canBe2: "с графикой или узорами",
	canBe3: "с имитацией бетона, ткани, неба, мрамора",
	canBe4: "с художественным или фирменным дизайном",
	looksNote: "Матовая тканевая поверхность убирает блики и делает изображение глубоким и натуральным.",
	techTitle: "Технология печати",
	techText: "Используется экологичная латексная или УФ-печать, которая:",
	tech1: "не имеет запаха",
	tech2: "безопасна для жилых помещений",
	tech3: "устойчива к ультрафиолету",
	tech4: "не выцветает годами",
	techNote: "Печать не нарушает структуру ткани и сохраняет её воздухопроницаемость.",
	whereTitle: "Где применяются?",
	whereUsedTitle: "Потолки с печатью используют в:",
	whereUsed1: "квартирах и домах",
	whereUsed2: "детских комнатах",
	whereUsed3: "ресторанах и отелях",
	whereUsed4: "офисах и шоурумах",
	whereUsed5: "торговых и выставочных пространствах",
	whereEnd: "Это идеальное решение, когда потолок должен стать частью дизайна, а не просто фоном.",
	alt: "Потолок с печатью"
};
var lightingSolutions = {
	heroTitle: "Нет абсолютно ни каких ограничений",
	heroSubtitle: "для использования любых светоприборов в тканевых потолках",
	heroAlt: "Световые решения",
	lead: "Освещение — это один из ключевых элементов интерьера. Именно свет формирует ощущение пространства, влияет на настроение, комфорт и то, как воспринимаются цвета, формы и материалы.",
	text1: "Даже самый дорогой интерьер без правильно выстроенного света выглядит плоским. И наоборот — грамотное освещение может сделать пространство визуально выше, шире и дороже.",
	text2: "Тканевые потолки Descor и HEYtex позволяют выстраивать архитектурное освещение, при котором источники света становятся частью потолка, а не отдельными приборами. Свет интегрируется в конструкцию и работает как единая система.",
	text3: "Матовая структура ткани играет важную роль: она мягко рассеивает свет, убирает блики и резкие тени, благодаря чему освещение становится:",
	feature1: "спокойным для глаз",
	feature2: "равномерным",
	feature3: "глубоким и естественным",
	text4: "Такой свет не утомляет, не «режет» пространство и создаёт ощущение комфорта и премиальности.",
	allowsTitle: "Правильно спроектированное освещение позволяет:",
	allows1: "визуально увеличить высоту потолков",
	allows2: "выделить зоны в помещении",
	allows3: "подчеркнуть архитектуру",
	allows4: "создать разные сценарии — от яркого рабочего до мягкого вечернего",
	text5: "Системы освещения в тканевых потолках проектируются как единое целое: линии света, треки, подсветки и светильники работают вместе, формируя целостный световой образ интерьера.",
	linearTitle: "Линейное освещение",
	linearDesc: "Световые линии, встроенные в потолок, создают чёткую геометрию и современный стиль.",
	trackTitle: "Трековые системы",
	trackDesc: "В потолок интегрируются магнитные и классические трековые системы, позволяющие менять расположение светильников.",
	spotlightsTitle: "Встроенные светильники",
	spotlightsDesc: "Точечные светильники и споты интегрируются в полотно, оставаясь практически незаметными.",
	chandeliersTitle: "Люстры и дизайнерские подвесы",
	chandeliersDesc: "Тканевые потолки позволяют устанавливать люстры, подвесные и дизайнерские светильники без ограничений."
};
var linearLighting = {
	title: "Линейное освещение в тканевых потолках",
	lead: "Линейное освещение — это один из самых современных и архитектурных способов подсветки потолка. В системах с тканевыми потолками Descor и HEYtex световые линии становятся частью конструкции и выглядят как встроенные световые элементы, а не как накладные приборы.",
	text1: "Для установки используется алюминиевый профиль, который крепится к базовому потолку. Внутри профиля размещается LED-модуль с рассеивателем, после чего тканевое полотно натягивается заподлицо с профилем. В результате световая линия получается идеально ровной, без рамок, щелей и видимых креплений.",
	allowsTitle: "Такие линии могут использоваться как основной источник света или как архитектурная подсветка. Они позволяют создавать:",
	allows1: "прямые и ломаные линии",
	allows2: "геометрические фигуры",
	allows3: "световые зоны",
	text2: "Матовая ткань Descor и HEYtex равномерно рассеивает свет, поэтому линии выглядят мягкими и глубинными, без точек и резких бликов.",
	text3: "Линейное освещение особенно востребовано в современных квартирах, офисах, шоурумах и коммерческих интерьерах, где важны чистая геометрия и минималистичный стиль.",
	alt: "Линейное освещение"
};
var trackLighting = {
	title: "Трековые системы в тканевых потолках",
	lead: "Трековое освещение — это гибкая система, позволяющая направлять свет туда, где он нужен. В тканевых потолках Descor и HEYtex треки интегрируются в конструкцию потолка и выглядят как часть архитектуры, а не как навесное оборудование.",
	text1: "Перед натяжкой полотна устанавливаются специальные закладные, к которым крепится трековый профиль. После этого ткань натягивается заподлицо с системой, и трек становится визуально встроенным в потолок.",
	canMountTitle: "В такие потолки можно монтировать:",
	canMount1: "магнитные трековые системы",
	canMount2: "классические шинопроводные системы",
	text2: "Светильники можно свободно перемещать, добавлять или убирать, менять направление света и создавать новые световые сценарии без переделки потолка.",
	text3: "Это решение идеально подходит для гостиных, кухонь, офисов, магазинов и галерей, где требуется гибкость и возможность менять акценты в интерьере.",
	alt: "Трековое освещение"
};
var spotlights = {
	title: "Точечные светильники в тканевых потолках",
	lead: "Точечные светильники — это универсальный способ создания функционального и аккуратного освещения. В тканевых потолках Descor и HEYtex они устанавливаются с использованием термоколец и монтажных платформ, которые фиксируются к базовому потолку до натяжки ткани.",
	systemTitle: "Такая система:",
	system1: "защищает полотно от нагрева",
	system2: "обеспечивает жёсткую фиксацию светильника",
	system3: "позволяет при необходимости заменить светильник без демонтажа потолка",
	usedForTitle: "Точечные светильники используются для:",
	usedFor1: "общего освещения",
	usedFor2: "рабочих зон",
	usedFor3: "подсветки мебели, стен и ниш",
	text1: "Благодаря матовой поверхности ткани свет становится мягким и комфортным, а сами светильники выглядят аккуратно и не нарушают чистоту потолка.",
	alt: "Точечные светильники"
};
var chandeliers = {
	title: "Люстры и подвесные светильники в тканевых потолках",
	lead: "Тканевые потолки позволяют устанавливать люстры и подвесные светильники любого дизайна и веса. Все крепления выполняются к базовому потолку через специальные монтажные платформы, а тканевое полотно аккуратно обходит точку крепления.",
	meansTitle: "Это означает, что:",
	means1: "ткань не несёт нагрузки",
	means2: "потолок сохраняет идеальную форму",
	means3: "можно использовать массивные и дизайнерские светильники",
	text1: "Вся электропроводка, крепёж и элементы фиксации скрыты за потолком, поэтому в интерьере виден только сам светильник — чисто и эстетично.",
	text2: "Люстры и подвесы часто используются как центральный элемент дизайна, а встроенное освещение дополняет их и создаёт многоуровневый световой сценарий.",
	alt: "Люстры"
};
var innovations = {
	heroTitle: "Мы не отстаем от мира новинок в тканевых потолках",
	heroSubtitle: "и всегда внедряем все новинки в свои проекты",
	heroAlt: "Новинки",
	title: "Новинки рынка тканевых потолков",
	lead: "Современные тканевые потолки — это не просто ровная поверхность над головой. Сегодня это инновационные архитектурные системы, которые объединяют дизайн, комфорт и функциональность.",
	text1: "На рынке появляются технологии, которые делают потолки и стены более умными, тихими и гибкими:",
	quietWallsTitle: "Тихие тканевые стены",
	quietWallsDesc: "Они создают уют и поглощают звук, превращая помещение в тихую и комфортную зону.",
	hiddenHatchesTitle: "Скрытые люки и панели",
	hiddenHatchesDesc: "Незаметно прячущие доступ к коммуникациям и позволяющие сохранять идеальную поверхность потолка.",
	ventilationTitle: "Системы вентиляции и кондиционирования",
	ventilationDesc: "Встроенные прямо в профиль и треки, без громоздких коробов и видимых решёток.",
	hiddenCurtainsTitle: "Скрытые гардины и шторы",
	hiddenCurtainsDesc: "Которые полностью прячутся в потолок, обеспечивая минималистичный и современный интерьер.",
	text2: "Эти новинки делают потолки не только красивыми, но и умными и функциональными. Они позволяют управлять светом, воздухом, звуком и даже декором — и всё это скрыто от глаз.",
	text3: "С тканевыми потолками Descor и HEYtex вы создаёте пространство, которое выглядит дорого, работает на комфорт и подчеркивает уникальный стиль интерьера."
};
var quietWalls = {
	title: "Тихие тканевые стены",
	lead: "Тихие тканевые стены — это современное решение для интерьеров, где важны комфорт, акустика и стиль. Они превращают обычные стены в функциональные, дизайнерские и акустически комфортные поверхности, создавая ощущение тишины и уюта.",
	text1: "Системы из тканей Descor и HEYtex делают стены не только красивыми, но и технически совершенными:",
	feature1: "мягкая матовая поверхность",
	feature2: "равномерное натяжение без складок",
	feature3: "гипоаллергенные и экологически чистые материалы",
	techTitle: "Техническое описание",
	techDesc: "Тихие тканевые стены состоят из нескольких ключевых элементов:",
	frameTitle: "Каркас и профили",
	frame1: "Алюминиевые профили крепятся к стенам и формируют прочную рамку для полотна.",
	frame2: "Профили позволяют натягивать ткань без складок и поддерживать её форму десятилетиями.",
	frame3: "В каркас можно интегрировать закладные под любые задачи: телевизор, зеркала, полки и другие элементы интерьера.",
	frame4: "Возможность установки скрытых ниш, световых линий или треков.",
	acousticTitle: "Акустическое полотно",
	acoustic1: "Под ткань укладывается специальное акустическое полотно толщиной 2 см, которое значительно повышает звукопоглощение.",
	acoustic2: "Полотно снижает шум, делает помещение тише и комфортнее для работы и отдыха.",
	tissueTitle: "Тканевое полотно",
	tissue1: "Используются высококачественные полотна Descor и HEYtex с акриловой пропиткой.",
	tissue2: "Натягивается с помощью системы демпфера, которая обеспечивает ровное и безопасное натяжение без складок.",
	tissue3: "Материал дополнительно поглощает звуковые волны, улучшая акустику помещения.",
	soundTitle: "Звукоизоляционные свойства",
	sound1: "Комбинация акустического полотна, ткани и каркаса снижает уровень шума до 40–50%.",
	sound2: "Система подходит для квартир, офисов, переговорных комнат и детских.",
	mountTitle: "Монтаж и обслуживание",
	mount1: "Ткань натягивается на профили с демпферной системой, что обеспечивает безопасное и равномерное натяжение.",
	mount2: "Лёгкий демонтаж позволяет обслуживать скрытые коммуникации или менять ткань без разрушения стены.",
	mount3: "Не боится влаги и легко очищается влажной мягкой тряпкой.",
	benefitsTitle: "Преимущества тихих тканевых стен",
	benefit1: "Существенное снижение уровня шума",
	benefit2: "Экологичные и гипоаллергенные материалы",
	benefit3: "Ровная матовая поверхность без стыков и складок",
	benefit4: "Возможность интеграции закладных под телевизор, зеркала, полки и другие элементы",
	benefit5: "Возможность установки световых линий, треков и скрытых систем",
	benefit6: "Лёгкий демонтаж для обслуживания",
	benefit7: "Современный минималистичный и премиальный дизайн",
	text2: "Тихие тканевые стены превращают интерьер в пространство, комфортное для работы, отдыха и жизни, сочетая стиль, акустику и функциональность. Системы Descor и HEYtex позволяют создавать премиальные решения, где каждая стена работает на комфорт и дизайн помещения.",
	price: "Стоимость м² тканевых тихих стен начинается от 45 евро, и зависят от многих факторов таких как состояние стен, количество углов, розеток выключателей освещения и тд"
};
var hiddenHatches = {
	title: "Скрытые люки в тканевых потолках",
	lead: "Современные тканевые потолки Descor и HEYtex позволяют интегрировать невидимые люки и панели, которые полностью сливаются с полотном. Это решение идеально подходит для помещений, где важен минимализм, чистота линий и функциональность, а доступ к коммуникациям остаётся скрытым.",
	text1: "Скрытые люки превращают потолок в архитектурный элемент, который работает на комфорт и дизайн, не нарушая визуальную целостность интерьера.",
	techTitle: "Техническое описание",
	techDesc: "Скрытые люки состоят из нескольких элементов:",
	frameTitle: "Каркас и профили",
	frame1: "Алюминиевые профили формируют прочный каркас люка, который интегрируется в натяжной потолок.",
	frame2: "Профили позволяют фиксировать полотно ровно, обеспечивая идеальную геометрию и отсутствие складок.",
	frame3: "Система демпфера натягивает ткань без усилия, сохраняя целостность полотна и долговечность конструкции.",
	faceTitle: "Лицевая часть полотна",
	face1: "Используется та же ткань, что и на потолке, чтобы люк был невидимым после монтажа.",
	face2: "Материалы Descor и HEYtex — гипоаллергенные, экологичные и долговечные.",
	accessTitle: "Доступ к коммуникациям",
	access1: "Люк позволяет незаметно получить доступ к электропроводке, вентиляции, светильникам и другим скрытым элементам.",
	access2: "Снимается легко и безопасно, без повреждения полотна или потолочной конструкции.",
	mountTitle: "Монтаж и обслуживание",
	mount1: "Установка выполняется вместе с натяжкой полотна.",
	mount2: "Каркас может быть подготовлен под любые размеры люков и формы, включая квадратные, прямоугольные или индивидуальные дизайнерские варианты.",
	mount3: "Обслуживание люка не требует демонтажа всего потолка — достаточно открыть люк и выполнить работы.",
	benefitsTitle: "Преимущества скрытых люков",
	benefit1: "Полная невидимость после установки",
	benefit2: "Лёгкий доступ к коммуникациям без демонтажа потолка",
	benefit3: "Совместимость с тканевыми потолками Descor и HEYtex",
	benefit4: "Возможность индивидуального размера и формы люка",
	benefit5: "Использование демпферной системы для безопасного и равномерного натяжения полотна",
	benefit6: "Подходит для жилых, офисных и коммерческих помещений",
	text2: "Скрытые люки делают тканевой потолок максимально функциональным и минималистичным, позволяя сочетать эстетику и практичность. Системы Descor и HEYtex превращают потолок в полноценный архитектурный элемент, который скрывает все коммуникации и при этом остаётся идеальной визуальной поверхностью.",
	price: "Стоимость изготовления скрытого люка начинается от 100 евро и рассчитывается индивидуально"
};
var ventilation = {
	title: "Встроенные системы вентиляции и кондиционирования в тканевых потолках",
	lead: "Современные тканевые потолки Descor и HEYtex позволяют интегрировать вентиляцию и кондиционирование прямо в профиль и трековые системы. Это решение идеально подходит для интерьеров, где важны минимализм, чистые линии и функциональность, а также равномерное распределение воздуха без громоздких коробов и решеток.",
	text1: "Встроенные системы делают потолок не только декоративным элементом, но и частью инженерной инфраструктуры, сохраняя эстетический вид и комфорт помещения.",
	techTitle: "Техническое описание",
	techText: "Системы вентиляции и кондиционирования интегрируются в алюминиевые профили и трековые каналы, которые заранее устанавливаются на базовый потолок перед натяжкой ткани.",
	profilesTitle: "Профили и треки",
	profiles1: "Профили и трековые системы изготавливаются с возможностью встраивания воздуховодов и вентиляционных решеток.",
	profiles2: "Скрытые каналы позволяют направлять поток воздуха ровно в нужные зоны, создавая комфортную циркуляцию без видимых элементов.",
	functionsTitle: "Функциональные возможности",
	functions1: "Подключение к центральной системе кондиционирования или вентиляции.",
	functions2: "Скрытые решетки и вентиляционные каналы полностью интегрированы, не нарушая минималистичный дизайн.",
	mountTitle: "Монтаж и обслуживание",
	mount1: "Все компоненты устанавливаются до натяжки ткани, что обеспечивает точное размещение воздуховодов.",
	mount2: "Тканевый потолок легко снимается или открывает доступ к вентиляционным элементам без повреждения конструкции.",
	benefitsTitle: "Преимущества встроенных вентиляции и кондиционирования",
	benefit1: "Эстетика: нет видимых коробов и решеток",
	benefit2: "Функциональность: равномерное распределение воздуха",
	benefit3: "Совместимость со всеми системами Descor и HEYtex",
	benefit4: "Простота обслуживания без демонтажа всего полотна",
	benefit5: "Минималистичный и современный интерьер",
	text2: "Встроенные системы вентиляции и кондиционирования превращают тканевой потолок в полноценный инженерный и архитектурный элемент, объединяя дизайн, комфорт и функциональность.",
	price: "Стоимость данных конструкций рассчитываются индивидуально, так как они и изготовляются индивидуально под каждый проект"
};
var hiddenCurtains = {
	title: "Скрытые гардины в тканевых потолках",
	lead: "Современные тканевые потолки Descor и HEYtex позволяют полностью скрывать шторные и гардинные системы внутри профиля. Это решение идеально подходит для интерьеров, где важны чистые линии, минимализм и премиальный вид, а сами шторы остаются функциональными, но полностью невидимыми, когда не используются.",
	text1: "Скрытые гардины превращают потолок в архитектурный элемент, объединяющий стиль, технологичность и комфорт управления светом и приватностью.",
	techTitle: "Техническое описание",
	techDesc: "Системы скрытых гардин состоят из нескольких элементов:",
	frameTitle: "Профили и каркас",
	frame1: "Алюминиевые профили интегрируются в тканевый потолок и создают невидимую нишу для карниза или направляющей.",
	frame2: "Профиль обеспечивает прочность, точную геометрию и поддерживает ткань потолка ровной и без складок.",
	frame3: "Профиль можно комбинировать с треками и закладными под дополнительные элементы интерьера.",
	tissueTitle: "Ткань потолка",
	tissue1: "Полотно Descor или HEYtex натягивается с помощью системы демпфера, сохраняя ровную поверхность потолка.",
	tissue2: "Скрытые гардины полностью закрыты тканью и становятся практически невидимыми с любого ракурса.",
	curtainsTitle: "Шторные системы",
	curtains1: "В нишу можно устанавливать как классические карнизы, так и трековые системы для штор.",
	curtains2: "Шторы могут быть однослойными, многослойными или комбинированными, полностью убираясь в нишу.",
	curtains3: "Направляющие и механизмы скрыты, что сохраняет минималистичный и чистый вид потолка.",
	mountTitle: "Монтаж и обслуживание",
	mount1: "Система устанавливается до натяжки ткани, а после полотна ниша полностью закрыта.",
	mount2: "При необходимости доступ к шторным механизмам осуществляется через скрытые панели, без снятия всего потолка.",
	mount3: "Совместима с другими встроенными системами: световыми линиями, треками, вентиляцией.",
	benefitsTitle: "Преимущества скрытых гардин",
	benefit1: "Полная невидимость карниза и направляющих",
	benefit2: "Сохраняется ровная, чистая поверхность потолка",
	benefit3: "Возможность установки любых типов штор и ткани",
	benefit4: "Простота обслуживания без демонтажа полотна",
	benefit5: "Совместимость с трековыми и световыми системами",
	benefit6: "Минималистичный и премиальный дизайн интерьера",
	text2: "Скрытые гардины превращают потолок в универсальный архитектурный элемент, который объединяет эстетику, функциональность и комфорт. Системы Descor и HEYtex позволяют создать интерьер, где каждая деталь работает на стиль и удобство.",
	price: "Стоимость гардин 60 евро за метр погонный"
};
const ru = {
	nav: nav,
	header: header,
	common: common,
	footer: footer,
	home: home,
	contactForm: contactForm,
	about: about,
	prices: prices,
	gallery: gallery,
	shadowCeilings: shadowCeilings,
	floatingCeilings: floatingCeilings,
	multiLevelCeilings: multiLevelCeilings,
	printedCeilings: printedCeilings,
	lightingSolutions: lightingSolutions,
	linearLighting: linearLighting,
	trackLighting: trackLighting,
	spotlights: spotlights,
	chandeliers: chandeliers,
	innovations: innovations,
	quietWalls: quietWalls,
	hiddenHatches: hiddenHatches,
	ventilation: ventilation,
	hiddenCurtains: hiddenCurtains
};

const ru$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about: about,
  chandeliers: chandeliers,
  common: common,
  contactForm: contactForm,
  default: ru,
  floatingCeilings: floatingCeilings,
  footer: footer,
  gallery: gallery,
  header: header,
  hiddenCurtains: hiddenCurtains,
  hiddenHatches: hiddenHatches,
  home: home,
  innovations: innovations,
  lightingSolutions: lightingSolutions,
  linearLighting: linearLighting,
  multiLevelCeilings: multiLevelCeilings,
  nav: nav,
  prices: prices,
  printedCeilings: printedCeilings,
  quietWalls: quietWalls,
  shadowCeilings: shadowCeilings,
  spotlights: spotlights,
  trackLighting: trackLighting,
  ventilation: ventilation
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const sitemap_xml = defineEventHandler((event) => {
  const baseUrl = "https://skylineceilings.com";
  const routes = [
    "",
    "/about",
    "/prices",
    "/gallery",
    "/shadow-ceilings",
    "/floating-ceilings",
    "/multi-level-ceilings",
    "/printed-ceilings",
    "/lighting-solutions",
    "/linear-lighting",
    "/track-lighting",
    "/spotlights",
    "/chandeliers",
    "/innovations",
    "/quiet-walls",
    "/hidden-hatches",
    "/ventilation",
    "/hidden-curtains",
    // Мультиязычные версии
    "/en",
    "/en/about",
    "/en/prices",
    "/en/gallery",
    "/es",
    "/es/about",
    "/es/prices",
    "/es/gallery"
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map((route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;
  event.node.res.setHeader("Content-Type", "application/xml");
  return sitemap;
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sitemap_xml
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
